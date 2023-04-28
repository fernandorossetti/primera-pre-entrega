const products = [
    {
        id: '1',
        name: 'MacBook',
        price: '150.000',
        category: 'MacBook',
        img: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg',
        stock: '10',
        description: 'The best notebook of the commerce'
    },
    {
        id: '2',
        name: 'Airpods',
        price: '50.000',
        category: 'Accesorios',
        img: 'https://cdn.pixabay.com/photo/2020/04/10/01/17/airpods-5023660_640.jpg',
        stock: '15',
        description: 'The pleasure of being able to hear everything at all times'
    },
    {
        id: '3',
        name: 'iPhone 13 Pro',
        price: '350.000',
        category: 'iPhone',
        img: 'https://cdn.pixabay.com/photo/2021/09/25/17/43/iphone-13-6655518_1280.jpg',
        stock: '9',
        description: 'Is one the best cellphones in the marketplace'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
        resolve(products)
    }, 500)
})
}

export const getProductsById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout( () => {
        resolve(products.find(prod => prod.id === productsId))
    }, 500)
})
}

export const getProductsByCategory = (getProductsByCategory) => {
    return new Promise((resolve) => {
        setTimeout( () => {
        resolve(products.filter(prod => prod.category === getProductsByCategory))
    }, 500)
})
}