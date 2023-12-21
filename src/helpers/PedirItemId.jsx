import data from '../data/departments.json'
import dataEN from '../data/departmentsEN.json'

const PedirItemId = (id) => {

    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id)

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