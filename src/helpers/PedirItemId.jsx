import data from '../data/departments.json'

const PedirItemId = () => {

    return new Promise((resolve, reject) => {
        const item = data.findIndex((el) => el == el.id)

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