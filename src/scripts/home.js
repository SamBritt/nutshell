import domStructure from "./domStructure";
import fetch from "./APIcaller";
import apiStructure from "./APIstructure";
import build from "./constructors";
import welcome from "./welcome"

const home = {
  homePage () {
    const homeContainer = build.elementWithText("article", "", "homeContainer");
    homeContainer.appendChild(build.elementWithText("h1", `Welcome ${window.sessionStorage.getItem("userName")} `, "homePageHeader"));

    return homeContainer;
  },

}

export default home