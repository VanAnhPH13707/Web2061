import'../style.css'
import Navigo from "navigo";
// Component
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./Pages/home";
import BookDetail from "./pages/book/detail";
import { apiGet, apiGetCallback, getImage, getImagePromise, percent } from "./api";
// styles
import "../style.css";
import Admin from './Pages/admin';
import Management from './Pages/admin/management';


// Config router
const router = new Navigo("/", { linksSelector: "a" });
async function log() {
   // await console.log(document.getElementById("1"))
}
log();
router.on({
    "/": function() {
        print(Home);
    },
    "/san-pham": function() {
        console.log("Sản phẩm");
    },
    "/books/:id": function(pram) {
        print(BookDetail, pram)
    },
    
    "/admin": function (param) {
        print(Admin, param)
      },
      "/admin/books/:id": function(pram) {
        print(Management, pram)
    },
});
router.resolve();
// End config router

async function print(content, param) {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = await content.render(param);
    document.querySelector("#footer").innerHTML = Footer.render();
    if(content.afterRender){
       await content.afterRender(param)
    }
}

