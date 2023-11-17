import data from '../data/departments.json'

const PedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}

export default PedirDatos

