import AxiosClient from ".";

export const getFilters = () => {
    return new Promise(async (resolve, reject) => {
        let colors;
        let materials;

        try {
            colors = await AxiosClient.get('/colors')
            materials = await AxiosClient.get('material')
            resolve({
                colors: [{ name: 'all colors', key: 'allcolors', id: 0 }, ...colors.data.colors],
                materials: [{ name: 'all materials', key: 'allmats', id: 0 }, ...materials.data.material]
            })

        } catch (err) {
            reject(err)
        }

    })
}

export const getProducts = () => {
    return AxiosClient.get('/products')
}

export const getFeaturedProducts = () => {
    return AxiosClient.get('/featured')
}