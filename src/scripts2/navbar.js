import event from "./eventHandlerManager"


const navString =
'<nav class="navbar navbar-expand-sm navbar-dark sticky-top"> <a class="navbar-brand" href="#">NutsHell</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" ><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-between" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active" ><a class="nav-link" id="nav--users" href="#">Home</a></li><li class="nav-item active" ><a class="nav-link" id="nav--articles" href="#">Articles</a></li><li class="nav-item active" ><a class="nav-link" href="#" id="nav--events">Events</a></li><li class="nav-item active" ><a class="nav-link" href="#" id="nav--messages">Messages</a></li><li class="nav-item active" ><a class="nav-link" href="#" id="nav--friends">Friends</a></li></ul></div></nav>'

const navBar = {
  createNav() {
    const main = document.querySelector("#output");
main.insertAdjacentHTML("afterbegin", navString);
main.addEventListener("click", event.handleNavigation)
}
}

export default navBar