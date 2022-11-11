const menu = document.querySelectorAll('label')
const lista = document.querySelectorAll('.js-li')
const tagNav = document.querySelector('nav')
function hadleClick(){
   lista.forEach((item)=>{
    item.classList.toggle('ativado-li')
    console.log('ativado')
    console.log(lista)
   })
   tagNav.classList.toggle('js-nav')
}
menu.forEach((item)=>{
    item.addEventListener('click',  function(){
        hadleClick()
    })
})