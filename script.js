

window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        let YDownHeader = document.getElementById("subHeader1");
        YDownHeader.style = "display:none; transition: 0.4s;"

        let YDownMenu = document.getElementById("menu-box");
        YDownMenu.style = "display:none; transition: 0.4s;"
    } else {
        let YUpHeader = document.getElementById("subHeader1");
        YUpHeader.style = "display: flex; flex-direction: row; justify-content: space-between; align-items: center; margin: 1rem 2rem; padding-bottom: 20px; border-bottom: 1px solid var(--light-white-color); transition: 0.4s;"

        let YUpMenu = document.getElementById("menu-box");
        YUpMenu.style = "display: flex; justify-content: center; align-items: center; padding-bottom: 16px; transition: 0.4s;"
    }

});



