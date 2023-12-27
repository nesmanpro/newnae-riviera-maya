import data from '../data/departments.json'
import data2 from '../data/departmentsEN.json'


const storageLan = localStorage.getItem('lng');

const dataDef = () => storageLan === 'es' ? data : data2;

const PedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataDef);
        }, 500)
    })
}

export default PedirDatos

