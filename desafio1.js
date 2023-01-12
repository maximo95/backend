class ProductManager {
    constructor() {
        this.products = []
    }

    getProduct = () => this.products

    getProductById = (id)  => {

        const productDb = this.products.find(product => product.id === id)
        if (!productDb) {
            return 'No existe el producto con el id ingresado'
        } return productDb

    }

    addProduct = (newItem) => {
        const productDb = this.products.find(product => product.code === newItem.code)
        if (productDb) {
            return 'Se encuentra el producto'
        }

        if (newItem.title === '') {
            return 'llenar bien title'
        }

        if (this.products.length === 0) {
            newItem.id = 1
            this.products.push(newItem)
        } else {
            this.products = [...this.products, {...newItem,id: this.products[this.products.length-1].id +1 } ]
        }

    }

}

const productos = new ProductManager()

console.log(productos.getProduct());
console.log(productos.addProduct({code:1}));