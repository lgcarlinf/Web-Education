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

/* CONTADOR */
addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador-cant')
    const velocidad = 1000

    const animarContadores = () => {
      for(const contador of contadores){
        const actualizarContador = () =>{
          let cantMax = +contador.dataset.cantTotal
          valorActual = +contador.innerText
          incremento = cantMax / velocidad

          if(valorActual < cantMax){
            contador.innerText = Math.ceil(valorActual + incremento)
            setTimeout(actualizarContador,5)
          }else{
            contador.innerText = cantMax
          }
    }
    
    actualizarContador()

  }
}

const mostrarContadores = elementos => {
    elementos.forEach(elemento =>{
        if(elemento.isIntersecting){
          elemento.target.classList.add('animar')
          elemento.target.classList.remove('ocultar')
          setTimeout(animarContadores,300)
        }

    })
}

//IntersectionObserver 
const observer = new IntersectionObserver(mostrarContadores,{
    threshold: 0.5
})

  const elementosHTML = document.querySelectorAll('.contador')
  elementosHTML.forEach(elementoHTML => {
    observer.observe(elementoHTML)
  })
 
})
