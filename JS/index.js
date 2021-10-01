let infoDeAlumno = []
let orden = 0
let more = true
const next = document.getElementById('next')
const textNota = document.getElementById('textNota')

const porcent = (num, procent) => num * procent

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

const returnTexNota = (notaTXT, semestre) => notaTXT === 'parcial'
    ? `${notaTXT} del semestre ${semestre}`
    : `${notaTXT} nota del semestre ${semestre}`;

const isRange = (num) => num >= 1 && num <= 5
    ? true
    : false;

const pedirNota = (notaTXT, semestre) => {
    let leave = true;
    let fallo = false
    while (leave) {
        let nota
        if (fallo) {
            nota = prompt(returnTexNota(`INGRESO MAL LA NOTA, ES ENTRE 1 Y 5, profavor, ingrese la ${notaTXT}`, semestre))
        } else {
            nota = prompt(returnTexNota(notaTXT, semestre))
        }
        if (orden == 0 && nota == 0) {
            return true
        }
        if (isRange(nota)) {
            orden++
            leave = false
            return nota
        }
        fallo = true
    }
};
const renderDocument =(id,text)=>{
    document.getElementById(id).innerHTML=text
}
const render = (nombreDocennte
    ,promedioAprobaron
    ,promedioCadaCategoria
    ,promedioReprobaron
    ,aprobaronCadaPeriodo
    ,cantidadEstudiantesAprobados
    ,reprobaronCadaPeriodo
    ,cantidadEstudiantesReprobados) =>{
        renderDocument("nombre del docente",nombreDocennte)
        renderDocument("promedio de aprobados",promedioAprobaron)
        renderDocument("promedio de cada categoria 1",promedioCadaCategoria[0])
        renderDocument("promedio de cada categoria 2",promedioCadaCategoria[1])
        renderDocument("promedio de cada categoria 3",promedioCadaCategoria[2])
        renderDocument("promedio de cada categoria 4",promedioCadaCategoria[3])
        renderDocument("promedio de reprobados",promedioReprobaron)
        renderDocument("cantidad de aprobados en cada periodo 1",aprobaronCadaPeriodo[0])
        renderDocument("cantidad de aprobados en cada periodo 2",aprobaronCadaPeriodo[1])
        renderDocument("cantidad de aprobados en cada periodo 3",aprobaronCadaPeriodo[2])
        renderDocument("cantidad de aprobados en cada periodo 4",aprobaronCadaPeriodo[3])
        renderDocument("cantidad aprobados",cantidadEstudiantesAprobados)
        renderDocument("cantidad de reprobados en cada periodo 1",reprobaronCadaPeriodo[0])
        renderDocument("cantidad de reprobados en cada periodo 2",reprobaronCadaPeriodo[1])
        renderDocument("cantidad de reprobados en cada periodo 3",reprobaronCadaPeriodo[2])
        renderDocument("cantidad de reprobados en cada periodo 4",reprobaronCadaPeriodo[3])
        renderDocument("cantidad reprobados",cantidadEstudiantesReprobados)
}

(function () {
    let nombreDocennte = prompt('cual es el nombre del docente')


    while (more) {

        
    let s1 = []
    let s2 = []
    let s3 = []
    let s4 = []
    let nota1Procent = []
    let nota2Procent = []
    let nota3Procent = []
    let nota4Procent = []



        s1[0] = pedirNota('primera', '1')
        if (s1[0] === true) {
            break;
        }
        nota1Procent[0] = porcent(s1[0], 0.2)
        s1[1] = pedirNota('segunda', '1')
        nota1Procent[1] = porcent(s1[1], 0.2)
        s1[2] = pedirNota('parcial', '1')
        nota1Procent[2] = porcent(s1[2], 0.6)

        s2[0] = pedirNota('primera', '2')
        nota2Procent[0] = porcent(s2[0], 0.2)
        s2[1] = pedirNota('segunda', '2')
        nota2Procent[1] = porcent(s2[1], 0.1)
        s2[2] = pedirNota('tercera', '2')
        nota2Procent[2] = porcent(s2[2], 0.2)
        s2[3] = pedirNota('parcial', '2')
        nota2Procent[3] = porcent(s2[3], 0.5)

        s3[0] = pedirNota('primera', '3')
        nota3Procent[0] = porcent(s3[0], 0.2)
        s3[1] = pedirNota('segunda', '3')
        nota3Procent[1] = porcent(s3[1], 0.2)
        s3[2] = pedirNota('parcial', '3')
        nota3Procent[2] = porcent(s3[2], 0.6)

        s4[0] = pedirNota('primera', '4')
        nota4Procent[0] = porcent(s4[0], 0.2)
        s4[1] = pedirNota('segunda', '4')
        nota4Procent[1] = porcent(s4[1], 0.1)
        s4[2] = pedirNota('tercera', '4')
        nota4Procent[2] = porcent(s4[2], 0.2)
        s4[3] = pedirNota('parcial', '4')
        nota4Procent[3] = porcent(s4[3], 0.5)

        let periodo = [nota1Procent, nota2Procent, nota3Procent, nota4Procent]
        let notastotalperiodos = []
        let notaperiodo = []
        periodo.forEach(element => {
            let sumatoria = 0
            let sumatoriapro = 0
            element.forEach(el => {
                sumatoriapro += porcent(el, 0.25)
                sumatoria += el
            })
            notastotalperiodos = [...notastotalperiodos, sumatoria]
            notaperiodo = [...notaperiodo, sumatoriapro]
        });

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
        orden =0;
        infoDeAlumno = [...infoDeAlumno, {
            periodo,
            notaperiodo,
            notastotalperiodos,
            definitiva,
            aprobo,
            promedioText
        }]

    }
    console.log(infoDeAlumno)
    let cantidadestudiantes=0
    let promedioAprobaron=0
    let promedioReprobaron=0
    let promedioCadaCategoria=[]
    let aprobaronCadaPeriodo=[0,0,0,0]
    let reprobaronCadaPeriodo=[0,0,0,0]
    let cantidadEstudiantesAprobados=0
    let cantidadEstudiantesReprobados=0
    let sumPeriodo=[0,0,0,0]

    infoDeAlumno.forEach(element=>{
        if(element.aprobo){
            cantidadEstudiantesAprobados++
            promedioAprobaron+=element.definitiva
        }else{
            cantidadEstudiantesReprobados++
            promedioReprobaron+=element.definitiva
        }
        element.notastotalperiodos.forEach((el,index)=>{
            if(el >=3){
                aprobaronCadaPeriodo[index]++
            }else{
                reprobaronCadaPeriodo[index]++
            }
        })
        sumPeriodo[0]+=element.notastotalperiodos[0]
        sumPeriodo[1]+=element.notastotalperiodos[1]
        sumPeriodo[2]+=element.notastotalperiodos[2]
        sumPeriodo[3]+=element.notastotalperiodos[3]


        cantidadestudiantes++
    })

    promedioCadaCategoria[0] = sumPeriodo[0]/cantidadestudiantes
    promedioCadaCategoria[1] = sumPeriodo[1]/cantidadestudiantes
    promedioCadaCategoria[2] = sumPeriodo[2]/cantidadestudiantes
    promedioCadaCategoria[3] = sumPeriodo[3]/cantidadestudiantes

    promedioAprobaron = promedioAprobaron/cantidadestudiantes

    console.log('cantidad de estudiantes '+cantidadestudiantes)
    console.log('promedio de los estudiantes que aprobaron '+promedioAprobaron)
    console.log('promedio de los estudiantes que reprobaron '+promedioReprobaron)
    console.log('promedio de calificaciones en cada periodo '+promedioCadaCategoria)
    console.log('cantidad de personas que aprobaron cada periodo '+aprobaronCadaPeriodo)
    console.log('cantidad de personas que reprobaron cada periodo '+reprobaronCadaPeriodo)
    console.log('cantidad de aprobados '+cantidadEstudiantesAprobados)
    console.log('cantidad de reprobados '+cantidadEstudiantesReprobados)
    render(nombreDocennte
    ,promedioAprobaron
    ,promedioCadaCategoria
    ,promedioReprobaron
    ,aprobaronCadaPeriodo
    ,cantidadEstudiantesAprobados
    ,reprobaronCadaPeriodo
    ,cantidadEstudiantesReprobados)
    
}())
