const bar = document.querySelector('.bar')
const menu = document.querySelector('.menu');
const nav = document.getElementsByTagName('nav')


let menuBar = false
const toggleMenu = () => {
//  console.log('menu showed');

if(menu.classList.contains('show')){
menu.classList.remove('show') ;

} else {
menu.classList.add('show')}

}





bar.addEventListener('click', toggleMenu)
