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

// const home = {
//   homePage () {
//     const homeContainer = build.elementWithText("article", "", "homeContainer");
//     homeContainer.appendChild(build.elementWithText("h1", `Welcome ${window.sessionStorage.getItem("userName")} `, "homePageHeader"));
//     homeContainer.appendChild(build.elementWithText("p", "This is your Nutshell"));
//     const topNews = build.elementWithText("section", "Current News");
//     this.getNews().then(dataArray => {
//       let articles = dataArray.articles
//       articles.forEach(element => {
//       const buildDIV = build.elementWithText("div", "", null, "news")
//       buildDIV.appendChild(build.elementWithText("h4", element.title));
//       buildDIV.appendChild(build.elementWithText("p", element.description))
//       topNews.appendChild(buildDIV);
//     });
//     }); homeContainer.appendChild(topNews);
//     return homeContainer;
//   },
//   getNews() {
//     return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ee4101fb7d2242919a12f0d66674ccc5").then(res => res.json());
//   },

// }



export default home