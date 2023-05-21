import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "@/_helpers/auth-guard.js";
import Home from "../views/public/Home.vue";

import SignIn from "../views/auth/SignIn.vue";
import SignUp from "../views/auth/SignUp.vue";

import Giftcard from "@/components/public/Giftcard.vue";
import InfoBrand from "@/components/public/InfoBrand.vue";
import InfoShowrooms from "@/components/public/InfoShowrooms.vue";
import InfoShops from "@/components/public/InfoShops.vue";
import InfoPayment from "@/components/public/InfoPayment.vue";
import InfoDelivery from "@/components/public/InfoDelivery.vue";
import InfoReturns from "@/components/public/InfoReturns.vue";
import LookBook from "../views/public/LookBook.vue";
import GuideTailles from "../views/public/GuideTailles.vue";
import SurMesure from "../views/public/SurMesure.vue";

import NotFound from "../views/public/NotFound.vue";
import PublicLayout from "../views/public/PublicLayout.vue";
import Slideshow from "../views/public/Slideshow.vue";

import Dashboard from "../views/admin/Dashboard.vue";

import ProductsDashboard from "@/components/admin/ProductsDashboard.vue";
import AddProduct from "@/components/admin/AddProduct.vue";
import FindProduct from "@/components/admin/FindProduct.vue";
import GetProducts from "@/components/admin/GetProducts.vue";

import Cart from "../views/public/Cart.vue";
import Wishlist from "../views/public/Wishlist.vue";
import Checkout from "../views/public/Checkout.vue";

import Links from "@/components/admin/Links.vue";

import UsersDashboard from "@/components/admin/UsersDashboard.vue";
import FindUser from "@/components/admin/FindUser.vue";
import FoundUser from "@/components/admin/FoundUser.vue";
import GetUsers from "@/components/admin/GetUsers.vue";

import LookbookDashboard from "@/components/admin/LookbookDashboard.vue";
import AddLookbook from "@/components/admin/AddLookbook.vue";
import GetLookbook from "@/components/admin/GetLookbook.vue";

import HeadersDashboard from "@/components/admin/HeadersDashboard.vue";
import AddHeader from "@/components/admin/AddHeader.vue";
import GetHeaders from "@/components/admin/GetHeaders.vue";

import FabricsDashboard from "@/components/admin/FabricsDashboard.vue";
import AddFabric from "@/components/admin/AddFabric.vue";
import GetFabrics from "@/components/admin/GetFabrics.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "public",
      component: PublicLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/slideshow",
          name: "Slideshow",
          component: Slideshow,
        },
        {
          path: "/giftcard",
          name: "Giftcard",
          component: Giftcard,
        },
        {
          path: "/infos/brand",
          name: "InfoBrand",
          component: InfoBrand,
        },
        {
          path: "/infos/shops",
          name: "InfoShops",
          component: InfoShops,
        },
        {
          path: "/infos/showrooms",
          name: "InfoShowrooms",
          component: InfoShowrooms,
        },
        {
          path: "/infos/payment",
          name: "InfoPayment",
          component: InfoPayment,
        },
        {
          path: "/infos/delivery",
          name: "InfoDelivery",
          component: InfoDelivery,
        },
        {
          path: "/infos/returns",
          name: "InfoReturns",
          component: InfoReturns,
        },
        {
          path: "/infos/tailles",
          name: "GuideTailles",
          component: GuideTailles,
        },
        {
          path: "/mesmesures",
          name: "SurMesure",
          component: SurMesure,
        },
        {
          path: "/lookbook",
          name: "LookBook",
          component: LookBook,
        },
        {
          path: "/monpanier",
          name: "Cart",
          component: Cart,
        },
        {
          path: "/mawishlist",
          name: "Wishlist",
          component: Wishlist,
        },
        {
          path: "/checkout",
          name: "Checkout",
          component: Checkout,
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: Dashboard,
      children: [
        {
          path: "products",
          name: "productsbashboard",
          component: ProductsDashboard,
          children: [
            {
              path: "add",
              name: "AddProduct",
              component: AddProduct,
            },
            {
              path: "find",
              name: "findproduct",
              component: FindProduct,
            },
            {
              path: "get",
              name: "getproducts",
              component: GetProducts,
            },
          ],
        },
        {
          path: "links",
          name: "links",
          component: Links,
        },
        {
          path: "users",
          name: "users",
          component: UsersDashboard,
          children: [
            {
              path: "getusers",
              name: "GetUsers",
              component: GetUsers,
            },
            {
              path: "finduser",
              name: "FindUser",
              component: FindUser,
              props: true,
              children: [
                {
                  path: "user",
                  name: "founduser",
                  component: FoundUser,
                },
              ],
            },
          ],
        },
        {
          path: "lookbook",
          name: "lookbook",
          component: LookbookDashboard,
          children: [
            {
              path: "get",
              name: "getlookbook",
              component: GetLookbook,
            },
            {
              path: "add",
              name: "addlookbook",
              component: AddLookbook,
            },
          ],
        },
        {
          path: "headers",
          name: "headers",
          component: HeadersDashboard,
          children: [
            {
              path: "get",
              name: "getHeaders",
              component: GetHeaders,
            },
            {
              path: "add",
              name: "addHeader",
              component: AddHeader,
            },
          ],
        },
        {
          path: "fabrics",
          name: "fabrics",
          component: FabricsDashboard,
          children: [
            {
              path: "get",
              name: "getFabrics",
              component: GetFabrics,
            },
            {
              path: "add",
              name: "addFabric",
              component: AddFabric,
            },
          ],
        },
      ],
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});

//fermeture partie admin
router.beforeEach((to, from, next) => {
  console.log(to.matched[0].name);
  if (to.matched[0].name == "admin") {
    authGuard();
  }
  next();
});

export default router;
