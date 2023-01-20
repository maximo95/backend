const fs = require('fs')

class ProductManager {
    constructor (ruta){
        this.path = ruta
        this.products = [{id: '',title:'',description: '',price: '',thumbnail: '',code: '',stock: ''}]
        this.productsParse = JSON.stringify(products,replacer,'\t')
    }
    getProduct = () => this.products
    
    consultarProducos = async (products) => {
     
    try {
         const data = await fs.promise.readFile('./Usuarios.json, 'utf-8')
         let dataParseado = JSON.parse(data)
    } catch (error) {
        console.log(error)
       await fs.promise.writeFile (path,'[]','utf-8')
    }
    }   
    crearProducto = async (product) => {
        const users = await this.consultarProduct();
        if (product.length === 0){
            usuario.id = 1;
        }else{
            usuario.id = product[users.length-1].id + 1
        }
        users.push(products)
        await fs.promise.writeFile(path,JSON.stringify(users,null,'\t'))
    }

    getProductById = async (id)  => {
    try{   
        const data = await fs.promise.readFile('./Usuarios.json, 'utf-8')
        let dataParseado = JSON.parse(data)
        dataParseado = this.products.find(product => product.id === id)
        if (!dataParseado) { return 'No existe el producto con el id ingresado'}
        return productDb
   } catch (error) {
       console.log(error)
      console.log (path,'id','utf-8')
   }


    eliminarArchivo = async (products) => {
        try {
            let data = await fs.promise.unlink('./Usuarios.json', 'utf-8')
        } catch (error) {
            console.log(error)
        }
    }

    updateProducts = async (products) => {
        try{   
            const data = await fs.promise.readFile('./Usuarios.json, 'utf-8')
            let dataParseado = JSON.parse(data)
       } catch (error) {
           console.log(error)
          console.log (path,'id','utf-8')
       }



new ProductManager('./data.txt')