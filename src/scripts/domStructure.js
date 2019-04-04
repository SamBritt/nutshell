import build from "./constructors"
import action from "./eventHandlerManager"

const domStructure = {
  nav: {
    createNavItem (page) {
      const navItem = build.elementWithText("li", "", null, "nav-item")
      const navLink = build.elementWithText("a", page, `nav--${page}`, "nav-link");
      navLink.setAttribute("href", "#");
      navItem.appendChild(navLink);
      return navItem;
    },
    createNavBar() {
      
      const navList = build.elementWithText("ul", "", null, "navbar-nav");
      navList.appendChild(this.createNavItem("home"));
      navList.appendChild(this.createNavItem("articles"));
      navList.appendChild(this.createNavItem("events"));
      navList.appendChild(this.createNavItem("messages"));
      navList.appendChild(this.createNavItem("friends"));
      navList.addEventListener("click", action.handleNavigation)
      return navList;
    }
  }
    

  
}

export default domStructure