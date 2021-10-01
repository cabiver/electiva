let infoDeAlumno = []

const form = document.getElementById('form')
const porcent = (num, procent) => num * procent
const isPar = num => (num + 1) % 2 === 0 ? true : false
const mostrar = document.getElementById('mostrar')

function showNotas() {
    infoDeAlumno.forEach(element => {
        const content = document.createElement('div')
        const titule = document.createElement('p')
        const notas = document.createElement('p')
        titule.setAttribute('class', 'text-center text-light')
        titule.innerHTML = `EL ESTUDIANTE ${element.nombre}`
        notas.innerHTML = `Tiene en Cada Periodo: ${element.notaperiodo}`
        content.setAttribute('class', 'w-75 p-3 bg-secondary mb-2')
        content.appendChild(titule)
        content.appendChild(notas)

        document.getElementById('fool').appendChild(content)
    });
}

function showNotas() {
    infoDeAlumno.forEach(element => {
        const cuadro = document.createElement('div')

        const content = document.createElement('div')
        const titule = document.createElement('p')
        const notas = document.createElement('p')
        titule.setAttribute('class', 'text-center text-light')
        titule.innerHTML = `EL ESTUDIANTE ${element.nombre}`
        notas.innerHTML = `Tiene en Cada Periodo: ${element.notaperiodo}`
        content.setAttribute('class', 'w-75 p-3 bg-secondary mb-2')
        content.appendChild(titule)
        content.appendChild(notas)

        document.getElementById('fool').appendChild(content)
    });
}




const desempeño = (definitiva) => {
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
    return definitiva
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
        element.forEach(el => {
            sumatoria += el
        })
        notaperiodo = [...notaperiodo, sumatoria]
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

    // console.log('')
    // console.log(nota1)
    // console.log(nota2)
    // console.log(nota3)
    // console.log(parcial)
    // console.log('')
    console.log(periodo)
        // console.log(parcial)
        // console.log(notaperiodo)
    infoDeAlumno = [...infoDeAlumno, { periodo, notaperiodo, definitiva, aprobo, promedioText, nombre: info.get('nombre') }]
        // console.log(infoDeAlumno)
    form.reset()
})

mostrar.addEventListener('click', e => {
    while (document.getElementById('fool').firstChild) {
        document.getElementById('fool').removeChild(document.getElementById('fool').firstChild);
    }
    showNotas()
})