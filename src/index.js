function ChangeTheme(){
    let body = document.querySelector("body");

   // body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
    }
    else {
        body.classList.add("dark");
    }
}

let ThemeButton = document.querySelector("theme-button");
ThemeButton.addEventListener("click", ChangeTheme);