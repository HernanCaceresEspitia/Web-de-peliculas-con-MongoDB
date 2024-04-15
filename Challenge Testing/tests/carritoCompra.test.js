
//? constructor(): Inicializa el carrito como un array vacío.

//? agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

//? calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

//? aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

const carritoCompra = require("../index");

describe("Si 'CarritoCompra' es una clase", () => {

    let carrito;
    beforeEach(() =>{
        carrito = new CarritoCompra();
    });

    const producto1 = { name: producto1, price: 10 }
    const producto2 = { name: producto2, price: 20 }


    it('"CarritoCompra" debe ser una clase', () => {
        expect(typeof CarritoCompra).toBe("function");
        const carrito = new carritoCompra();
        expect(carrito instanceof CarritoCompra).toBe(true);
    });
    it('Inicializa el carrito como un array vacío.', () => {
        expect(Array.isArray(carrito.products)).toBe(true);
        expect(carrito.products.length).toBe(0);
    });

    it('Recibe un objeto representando un producto y lo agrega al carrito.', () => {
        carrito.agregarProducto(producto1);
        expect(carrito.products).toHaveLength(1);
        expect(carrito.products[0]).toEqual(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.products).toHaveLength(2);
        expect(carrito.producto1[1]).toEqual(producto2);
    });

    it(' Calcula el total de la compra sumando los precios de todos los productos en el carrito.', () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(30);
    });

    it('Aplica un descuento al total de la compra según el porcentaje especificado.', () => {
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(100)).toBe(0);
        expect(carrito.aplicarDescuento(50)).toBe(15);
        expect(carrito.aplicarDescuento(25)).toBe(7.5);
    });
});

