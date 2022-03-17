const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburger');

// console.log(imagenes);
// console.log(imagenesLight);
// console.log(contenedorLight);

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        // alert("Auch, me dolio")
        // console.log(imagen.getAttribute('src'))
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity ='1'
    }
})

// funcion para aparecer una imagen
const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity ='0'
}