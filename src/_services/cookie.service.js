let getCookie = (cookieName) => {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  let visitorid = cookie[cookieName];
  localStorage.setItem("tropicrea_visitor_session", visitorid);
};

export const cookieService = {
  getCookie,
};
