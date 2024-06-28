const buttons = document.querySelectorAll(".js-switchBtn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("is-toggled")
        });
        btn.classList.toggle("is-toggled");
    });
});

console.log(buttons[0].classList.contains("is-toggled"))
