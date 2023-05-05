

document.getElementById("icon-menu").addEventListener('click', mobileMenu2)

document.getElementById("icon-menu-close").addEventListener('click', mobileMenu1)

function mobileMenu1() {
        document.getElementById("myLinks").style.right = '-16rem'
        document.getElementById("overlay").style.display = 'none'
}

function mobileMenu2() {
        document.getElementById("myLinks").style.right = '0'
        document.getElementById("overlay").style.display = 'block'

}