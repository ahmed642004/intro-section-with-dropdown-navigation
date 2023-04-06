let menu = document.querySelectorAll("#links li");
let features = document.getElementById("features");
let ul = document.getElementById("linkk");
let comp = document.getElementById("company")
let compMenu = document.querySelectorAll("#company li")
let image = document.getElementById("image")
let imm = document.getElementById("immm")
let image_2 = document.getElementById("image-2")
let imm_2 = document.getElementById("immm-2")
let burger = document.getElementById("burger")
let men = document.getElementById("menu")
let cross = document.getElementById("cross")
let compp = document.getElementById("compp")
menu.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.id === "features") {
      if (ul.classList.contains("hidden")) {
        ul.classList.remove("hidden");
        imm_2.classList.remove("hidden")
        image_2.classList.add("hidden")
        features.style.color = "black"
      } else {
        ul.classList.add("hidden");
        image_2.classList.remove("hidden")
        imm_2.classList.add("hidden")
        features.style.color = ""
      }
    }
    if(e.target.id === "compp"){
      if(comp.classList.contains("hidden")){
        comp.classList.remove("hidden")
        image.classList.remove("hidden")
        imm.classList.add("hidden")
        compp.style.color = "black"
      }else{
        comp.classList.add("hidden");
        imm.classList.remove("hidden")
        image.classList.add("hidden")
        compp.style.color = ""
      }
    }
  });
});
burger.addEventListener("click",()=>{
  men.classList.remove("hidden")
  burger.classList.add("hidden")
})
cross.addEventListener('click',()=>{
  men.classList.add("hidden")
  burger.classList.remove("hidden")
})
