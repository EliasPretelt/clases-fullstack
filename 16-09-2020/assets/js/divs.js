
const dark = document.getElementById('dark')
const light = document.getElementById('light')
const grey = document.getElementById('grey')
const ligthblue = document.getElementById('ligthblue')
const pink = document.getElementById('pink')
let tema = document.getElementById('tema')

console.log("tema", tema)


if (tema != null) {
    localStorage.setItem("tema", tema)
    dark.addEventListener('click', ()=>{
        document.getElementById('container').classList.replace(tema,'dark')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","dark")
                
    })
    light.addEventListener('click', ()=>{
        document.getElementById('container').classList.replace(tema,'light')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","light")
    })
    grey.addEventListener('click', ()=>{
        document.getElementById('container').classList.replace(tema,'grey')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","grey")
    })
    ligthblue.addEventListener('click', ()=>{
        document.getElementById('container').classList.replace(tema,'ligthblue')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","ligthblue")
    })
    pink.addEventListener('click', ()=>{
        document.getElementById('container').classList.replace(tema,'pink')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","pink")
    })    
}   else {
    dark.addEventListener('click', ()=>{
        document.getElementById('container').classList.add(tema,'dark')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","dark")
    })
    light.addEventListener('click', ()=>{
        document.getElementById('container').classList.add(tema,'light')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","light")
    })
    grey.addEventListener('click', ()=>{
        document.getElementById('container').classList.add(tema,'grey')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","grey")
    })
    ligthblue.addEventListener('click', ()=>{
        document.getElementById('container').classList.add(tema,'ligthblue')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","ligthblue")
    })
    pink.addEventListener('click', ()=>{
        document.getElementById('container').classList.add(tema,'pink')
        const temaactual = localStorage.getItem('colorTema')
        tema = localStorage.setItem("tema","pink")
    })
}
