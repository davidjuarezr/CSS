const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    // alert('Auch, me diste click')
    // entra a sus clases
    e.preventDefault();
    modal.classList.add('modal--show');
})

closeModal.addEventListener('click', (e)=>{
    // alert('Auch, me diste click')
    // entra a sus clases
    e.preventDefault();
    modal.classList.remove('modal--show');
})