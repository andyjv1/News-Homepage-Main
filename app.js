
document.getElementById("icon-menu-close").addEventListener('click', mobileMenu1)
document.getElementById("icon-menu").addEventListener('click', mobileMenu2)
document.getElementById("main-overlay").addEventListener('click', mobileMenu3)

function mobileMenu1() {
        document.getElementById("main-links").style.right = '-16rem'
        document.getElementById("main-overlay").style.display = 'none'
}

function mobileMenu2() {
        document.getElementById("main-links").style.right = '0'
        document.getElementById("main-overlay").style.display = 'block'
}

function mobileMenu3() {
        document.getElementById("main-links").style.right = '-16rem'
        document.getElementById("main-overlay").style.display = 'none'
}