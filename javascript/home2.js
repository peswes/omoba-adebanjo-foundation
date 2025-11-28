const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOPen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOPen
    ?'fa-solid fas fa-times'
    : 'fa-solid fas fa-bars'
}

 