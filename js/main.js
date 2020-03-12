import Spa from "./spa.js";
import Introduction from "./introduction.js";
import Home from "./home.js";
import AboutMe from "./aboutMe.js";
// import Skills from "./skills.js";
// import Portfolio from "./portfolio.js";

let spa = new Spa("introduction");
let introduction = new Introduction();
let home = new Home();
let aboutMe = new AboutMe();


window.pageChange = function () {
    spa.pageChange();
}

introduction.appendIntroduction();
home.appendHome();


aboutMe.appendAbout();