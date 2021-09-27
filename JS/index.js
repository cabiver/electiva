const loadImg = document.getElementById("loadImg")
const img = document.getElementById("renderImg")
const textLoader = document.getElementById("textLoader")
const barraDeCarga = document.getElementById('barra-de-carga')
const form = document.getElementById("form")
const marco = document.getElementById('fool')

let file
let urlobject

const changecolorAdd = (obj, clase) => {
    obj.classList.add(`${clase}`)
}
const changecolorSubtract = (obj, clase) => {
    obj.classList.remove(`${clase}`)
}
const render = (imageToRender) => {
    if (!imageToRender) {
        textLoader.innerHTML = 'la igamen que ingreso es invalida'
      return
    }
    file = imageToRender
    textLoader.innerHTML = ''
    renderImage()
}

function createImgVideo (element, complement, ast) {
    console.log(complement)
    const nars = document.createElement('div')
    const content = document.createElement('div')
    ast.setAttribute('src', element)
    ast.setAttribute('class', ' precentacion')
    const descr = document.createElement('p')
    descr.setAttribute('class', 'text-center text-light')
    descr.innerHTML = complement
    content.appendChild(nars)
    nars.appendChild(descr)
    nars.appendChild(ast)
    nars.setAttribute('class', 'd-flex flex-column bg-primary p-2')
    content.setAttribute('class', 'div-para-marco')
    marco.appendChild(content)
  }
  


const renderImage = () => {
    const extencion = file.name.split('.')
    const renderPc = document.getElementById('loadVideo')
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    if (extencion[(extencion.length - 1)] === 'mp4' || extencion[(extencion.length - 1)] === 'mkv') {
      document.getElementById('loadVideo').style.height = 'fit-content'
      img.setAttribute('src', '')
      reader.addEventListener('progress', e => {
        const carga = Math.round(e.loaded / file.size * 100)
        barraDeCarga.style.width = `${carga}%`
      })
      reader.addEventListener('load', e => {
        const videofinalizado = new Blob([new Uint8Array(e.currentTarget.result)], { type: 'video/mp4' })
        const url = URL.createObjectURL(videofinalizado)
        urlobject = url
        renderPc.setAttribute('src', url)
      })
    } else {
        reader.addEventListener('progress', e => {
        const carga = Math.round(e.loaded / file.size * 100)
        barraDeCarga.style.width = `${carga}%`
      })
      reader.addEventListener('load', e => {
        barraDeCarga.style.width = '0px'
      })
      const image = URL.createObjectURL(file)  
      urlobject = image
      changecolorSubtract(img, 'd-none')
      img.setAttribute('src', image)
    }
}
loadImg.addEventListener('dragover', (e) => {
    e.preventDefault()
    changecolorAdd(e.target, 'objetoEncima')
})
loadImg.addEventListener('dragleave', (e) => {
    changecolorSubtract(e.target, 'objetoEncima')
})
loadImg.addEventListener('drop', (e) => {
    e.preventDefault()
    render(e.dataTransfer.files[0])
    changecolorSubtract(e.target, 'objetoEncima')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let post =new FormData(form)
    let posting = document.createElement('img')
    createImgVideo(urlobject,post.get('desc'),posting);
})