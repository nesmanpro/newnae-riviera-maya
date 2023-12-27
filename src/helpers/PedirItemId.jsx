import data from '../data/departments.json'
import data2 from '../data/departmentsEN.json'

const PedirItemId = (id) => {

    const storageLan = localStorage.getItem('lng');
    const getlng = () => storageLan === 'es' ? data : data2;
    const dataDef = getlng();

    return new Promise((resolve, reject) => {
        const item = dataDef.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: 'no se encontro el producto'
            })
        }
    })
}


export default PedirItemId