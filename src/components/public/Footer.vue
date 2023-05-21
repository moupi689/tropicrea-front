<template>
  <div class="footer">
    <div class="footer__left">
      <h3>INFORMATIONS</h3>
      <ul>
        <router-link to="/infos/brand"><li>La marque</li></router-link>
        <router-link to="/infos/shops"
          ><li>Nos points de vente</li></router-link
        >
        <router-link to="/infos/showrooms"><li>Expositions</li></router-link>
        <router-link to="/mesmesures"><li>Le sur-mesure</li></router-link>
      </ul>
    </div>
    <div class="footer__middle-left">
      <h3>AIDE</h3>
      <ul>
        <router-link to="/infos/tailles"
          ><li>Guide des tailles</li></router-link
        >
        <router-link to="/infos/payment"><li>Paiement</li></router-link>
        <router-link to="/infos/delivery"><li>Livraisons</li></router-link>
        <router-link to="/infos/returns"><li>Retours</li></router-link>
      </ul>
    </div>
    <div class="footer__middle-right">
      <h3>CONTACT</h3>
      <ul>
        <div id="showPhone" v-if="hoverphone">{{ getLinks[0].phone }}</div>
        <li @mouseover="hoverphone = true" @mouseleave="hoverphone = false">
          <i class="fa-solid fa-phone" id="phoneLink"></i>
        </li>
        <a href="mailto:tropicrea@gmail.com" id="mailto"
          ><div id="showMail" v-if="hovermail">{{ getLinks[0].email }}</div></a
        >
        <li @mouseover="hovermail = true" @mouseleave="hovermail = false">
          <i class="fa-solid fa-envelope" id="mailLink"></i>
        </li>
      </ul>
    </div>
    <div class="footer__right">
      <h3>LIENS</h3>
      <ul>
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  data() {
    return {
      hoverphone: false,
      hovermail: false,
    };
  },
  computed: {
    ...mapGetters(["getLinks"]),
  },
};
</script>

<style>
.footer {
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(246, 234, 240, 0.7);
  justify-content: space-around;
  padding: 40px;
  box-shadow: 0px -5px 5px rgba(120, 118, 118, 0.2);
}
.footer h3 {
  color: #725243;
  font-size: calc(18px + 0.4vw);
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  padding-bottom: 20px;
}
.footer li {
  list-style-type: none;
  color: #a98574;
  text-align: center;
  padding: 10px;
  font-size: calc(15px + 0.4vw);
  transition: 0.2s ease;
}
.footer li:hover {
  cursor: pointer;
  color: #725243;
  transform: scale(1.1);
}

.footer__left,
.footer__middle-left,
.footer__middle-right,
.footer__right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 80px;
}

#showPhone,
#showMail {
  color: #725243;
  display: flex;
  position: absolute;
  transform: translateX(70px) translateY(10px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 1.2rem;
  text-align: center;
  padding: 5px 10px;
  background-color: rgba(209, 188, 177, 0.4);
}
#showPhone:hover,
#showMail:hover {
  cursor: pointer;
}

#mailto {
  text-decoration: none;
  color: #725243;
}
</style>
