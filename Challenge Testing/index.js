class carritoCompra {
    constructor(){
        this.products = [];
    }

    agregarProducto(product){
        this.products.push(product);
    }

    calcularTotal(){
        let total = 0;
        for (const product of this.products){
            total += product.price;
        }
        return total;
    }

    aplicarDescuento(percent){
        const total = this.calcularTotal();
        const discount = (percent / 100) * total;
        return total - discount;
    }
}

module.exports = carritoCompra;