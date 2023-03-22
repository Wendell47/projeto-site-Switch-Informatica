
const subMenuOption = document.querySelector('#SubMenuOption')
const subMenu = document.querySelector('.subMenu')
const menuExtra = document.querySelector('.option')

subMenuOption.onclick = showSubMenuOption
menuExtra.onclick = showMenuExtra

function showSubMenuOption(){
    subMenu.classList.toggle('open')
    subMenuOption.classList.toggle('open')
}

function showMenuExtra(){
    menuExtra.querySelector('.subMenu').classList.toggle('open')
}

