function toggleMode(){
         const Html= document.documentElement
        Html.classList.toggle('Light')
        const img= document.querySelector("#profile img")
        if(Html.classList.contains('Light')){

            img.setAttribute("src","./assets/avatar-light.png")
        } else{
            img.setAttribute("src","./assets/avatar.png")

        }
}