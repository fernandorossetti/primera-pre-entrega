const products = [
    {
        id: '1',
        name: 'MacBook',
        price: '150.000',
        category: 'cellphone',
        img: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_640.jpg',
        stock: '10',
        description: 'The best notebook of the commerce'
    },
    {
        id: '2',
        name: 'Airpods',
        price: '50.000',
        category: 'accesories',
        img: 'https://cdn.pixabay.com/photo/2020/04/10/01/17/airpods-5023660_640.jpg',
        stock: '15',
        description: 'The pleasure of being able to hear everything at all times'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
        resolve(products)
    }, 500)
})
}