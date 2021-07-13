//NAVBAR
const hamburguer = document.querySelector('.hamburguer') 
const links = document.querySelector('.links')
const navbar = document.querySelector('.navbar')
let abierto=false;

hamburguer.addEventListener('click',() =>{
    links.classList.toggle('active')
    navbar.classList.toggle('navcol')
    abierto=true;
})

window.addEventListener('resize',() =>{
  if(abierto){
    links.classList.remove('active')
    navbar.classList.remove('navcol')
    abierto=false;
  }
})

window.addEventListener('scroll',() =>{
  navbar.classList.toggle('active',window.scrollY >0)
})

/* MODO DARK */
const iconDark = document.querySelector('.mode')
const change = document.querySelector('.far')

iconDark.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
 
  if(document.body.classList.contains('dark')){
 
  change.classList.remove('fa-moon')
  change.classList.add('fa-sun')

  }else{
   
    change.classList.remove('fa-sun')
    change.classList.add('fa-moon')
 
  }

})




