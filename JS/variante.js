let infoDeAlumno = []

const form = document.getElementById('form')
const mostrar = document.getElementById('mostrar')

const isPar = num => (num + 1) % 2 === 0 ? true : false
const porcent = (num, procent) => num * procent

function showNotas() {
    infoDeAlumno.forEach(element => {
        const content = document.createElement('div')
        const ul = document.createElement('ul')
        ul.setAttribute('class','list-group mb-3')
        
        const li1 = document.createElement('li')
        li1.setAttribute('class','list-group-item d-flex justify-content-between lh-sm')
        const h61 =document.createElement('h6')
        h61.setAttribute('class', 'my-0')
        h61.innerHTML='ESTUDIANTE  '
        const small1= document.createElement('small')
        small1.setAttribute('class', 'text-muted')
        small1.innerHTML=`${element.nombre}`
        li1.appendChild(h61)
        li1.appendChild(small1)
        ul.appendChild(li1)

        const li2 = document.createElement('li')
        li2.setAttribute('class','list-group-item d-flex justify-content-between lh-sm')
        const h62 =document.createElement('h6')
        h62.setAttribute('class', 'my-0')
        h62.innerHTML='PRIMER CORTE '
        const small2= document.createElement('small')
        small2.setAttribute('class', 'text-muted')
        small2.innerHTML=`${element.notastotalperiodos[0]}`
        li2.appendChild(h62)
        li2.appendChild(small2)
        ul.appendChild(li2)

        const li3 = document.createElement('li')
        li3.setAttribute('class','list-group-item d-flex justify-content-between lh-sm')
        const h63 =document.createElement('h6')
        h63.setAttribute('class', 'my-0')
        h63.innerHTML='SEGUNDO CORTE '
        const small3= document.createElement('small')
        small3.setAttribute('class', 'text-muted')
        small3.innerHTML=`${element.notastotalperiodos[1]}`
        li3.appendChild(h63)
        li3.appendChild(small3)
        ul.appendChild(li3)

        const li4 = document.createElement('li')
        li4.setAttribute('class','list-group-item d-flex justify-content-between lh-sm')
        const h64 =document.createElement('h6')
        h64.setAttribute('class', 'my-0')
        h64.innerHTML='TERCER CORTE '
        const small4= document.createElement('small')
        small4.setAttribute('class', 'text-muted')
        small4.innerHTML=`${element.notastotalperiodos[2]}`
        li4.appendChild(h64)
        li4.appendChild(small4)
        ul.appendChild(li4)
        
        const li5 = document.createElement('li')
        li5.setAttribute('class','list-group-item d-flex justify-content-between lh-sm')
        const h65 =document.createElement('h6')
        h65.setAttribute('class', 'my-0')
        h65.innerHTML='CUARTO CORTE '
        const small5= document.createElement('small')
        small5.setAttribute('class', 'text-muted')
        small5.innerHTML=`${element.notastotalperiodos[3]}`
        li5.appendChild(h65)
        li5.appendChild(small5)
        ul.appendChild(li5)


        const li6 = document.createElement('li')
        li6.setAttribute('class','list-group-item d-flex justify-content-between lh-sm')
        const spanEstado = document.createElement('span')
        spanEstado.innerHTML='ESTADO  '
        const strong = document.createElement('strong')
        strong.innerHTML=`${element.promedioText} con ${element.definitiva}`
        li6.appendChild(spanEstado)
        li6.appendChild(strong)
        ul.appendChild(li6)

        content.setAttribute('class', 'col-lg-4 order-md-last animate__animated  animate__backInLeft')
        content.appendChild(ul)


        document.getElementById('fool').appendChild(content)
    });
}










const desempeño = (definitiva) => {
    let promedioText
    if (definitiva <= 2) {
        promedioText = 'Deficiente'
    } else {
        if (definitiva > 2 && definitiva <= 3) {
            promedioText = 'Bajo'
        } else {
            if (definitiva > 3 && definitiva <= 4.5) {
                promedioText = 'Basico'
            } else {
                if (definitiva > 4.5 && definitiva <= 5) {
                    promedioText = 'Superior'
                }
            }
        }
    }
    return promedioText
}

const periodosInpares = (num, index) => {
    if (index === 1 || index === 2) {
        return porcent(num, 0.2)
    } else {
        return porcent(num, 0.6)
    }
}
const periodosPares = (num, index) => {
    if (index === 1 || index === 3) {
        return porcent(num, 0.2)

    }
    if (index === 2) {
        return porcent(num, 0.1)
    }
    if (index === 4) {
        return porcent(num, 0.5)
    }
}


form.addEventListener('submit', e => {
    e.preventDefault();
    let info = new FormData(form)
    let periodo = []
    let notaperiodo = []
    let conjunto = []
    let notastotalperiodos=[]
    let nota1 = info.getAll('n1').map((element, index) => isPar(index) ? periodosPares(element, 1) : periodosInpares(element, 1))
    let nota2 = info.getAll('n2').map((element, index) => isPar(index) ? periodosPares(element, 2) : periodosInpares(element, 2))
    let nota3 = info.getAll('n3').map((element) => periodosPares(element, 3))
    let parcial = info.getAll('parcial').map((element, index) => isPar(index) ? periodosPares(element, 4) : periodosInpares(element, 4))
    let indexpunto3 = 0
    for (let i = 0; i < 4; i++) {
        if (nota1[i] === 0 || nota1[i] === 0 || nota1[i] === 0 || nota3[indexpunto3] === 0) {

            console.log("dijito mal alguna nota, recuerde que el minimo a sacar es 1")
            return

        }
        conjunto = []
        if (isPar(i)) {
            conjunto = [...conjunto, nota1[i]]
            conjunto = [...conjunto, nota2[i]]
            conjunto = [...conjunto, nota3[indexpunto3]]
            conjunto = [...conjunto, parcial[i]]

            indexpunto3++

        } else {
            conjunto = [...conjunto, nota1[i]]
            conjunto = [...conjunto, nota2[i]]
            conjunto = [...conjunto, parcial[i]]
        }
        // console.log(indexpunto3)

        periodo = [...periodo, conjunto]

    }
    periodo.forEach(element => {
        let sumatoria = 0
        let sumatoriapro=0
        element.forEach(el => {
            sumatoriapro += porcent(el,0.25)
            sumatoria+=el
        })
        notastotalperiodos = [...notastotalperiodos, sumatoria] 
        notaperiodo = [...notaperiodo, sumatoriapro]
    })
    let definitiva = 0
    notaperiodo.forEach(el => {
        definitiva += el
    })
    let aprobo

    if (definitiva >= 3) {
        aprobo = true
    } else {
        aprobo = false
    }

    let promedioText = desempeño(definitiva)

    console.log(periodo)
    infoDeAlumno = [...infoDeAlumno, { periodo, notaperiodo, notastotalperiodos, definitiva, aprobo, promedioText, nombre: info.get('nombre') }]
    form.reset()
})

mostrar.addEventListener('click', e => {
    while (document.getElementById('fool').firstChild) {
        document.getElementById('fool').removeChild(document.getElementById('fool').firstChild);
    }
    showNotas()
})