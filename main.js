// import all hidden pages
import Introduction from "./pages/introduction.js";
import AboutMe from "./pages/aboutMe.js";
import Skills from "./pages/skills.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/contact.js";

// import all services
import _spaService from "./services/spaService.js";
import _modalService from "./services/modalService.js";
import _redirectService from "./services/redirectService.js";
// import _fadeService from "./services/fadeService.js"

// Declare and init pages
let introduction = new Introduction();
let aboutMe = new AboutMe();
let skills = new Skills();
let portfolio = new Portfolio();
let contact = new Contact();

// init services
_spaService.init();
_modalService.modal();

window.pageChange = () => _spaService.pageChange();
window.navigateTo = (hash) => _spaService.navigateTo(hash);
// window.fade = () => _fadeService.fade();