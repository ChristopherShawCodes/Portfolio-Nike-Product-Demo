const container = document.querySelector('.container')
const color1 = document.querySelector('.color-1')
const color2 = document.querySelector('.color-2')
const span = document.querySelector('.sizes')


color2.addEventListener('click',() =>{
    container.classList.add('change')
})

color1.addEventListener('click',() =>{
    container.classList.remove('change')
})

span.addEventListener('click' , () =>{
    alert('Added To Cart !')
})