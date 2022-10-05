const products = [
    {
        id: "1",
        name: "Iphone 13",
        price: 120000,
        category: "Celulares",
        img: "https://cbafederal.net/wp-content/uploads/2021/10/iphone-13-pro-max-blue-select.png",
        stock: 25,
        description: "Iphone 13 celeste"
    },
    {
        id: "2",
        name: "Moto G52",
        price: 80000,
        category: "Celulares",
        img: "https://medias.musimundo.com/medias/00554006-146236-146236-01-146236-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NDI1NnxpbWFnZS9qcGVnfGg2OC9oODYvMTA0MTIwNDQ1MTc0MDYvMDA1NTQwMDYtMTQ2MjM2LTE0NjIzNl8wMS0xNDYyMzZfMDEuanBnX3NpemU1MTV8YTljZjZlN2EyNzQyNDhjYTQzYzg5OWJhMzRhZTM1MTMzODIyYWEyM2I2OWE4MTJiOWI5YjdjMTZlOTAzZGU3Ng",
        stock: 20,
        description: "Motorola Moto G52 celeste"
    },
    {
        id: "3",
        name: "Samsung A32",
        price: 70000,
        category: "Celulares",
        img: "https://medias.musimundo.com/medias/00325007-142200-142200-01-142200-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2NTc1NXxpbWFnZS9qcGVnfGg4ZS9oYzEvMTAzODAyNDI2MTYzNTAvMDAzMjUwMDctMTQyMjAwLTE0MjIwMF8wMS0xNDIyMDBfMDEuanBnX3NpemU1MTV8MjQ4ZWRkYTA1NTk4OTY5MjIyNWMwZGMwYTEwNWQ1YzU0Yzk4ZWQwOTU3MzQzZTEwYzdhM2EwNWUyYzYyMzE1ZQ",
        stock: 30,
        description: "Samsung A32 negro"
    },
    {
        id: "4",
        name: "Samsung galaxy A03",
        price: 60000,
        category: "Celulares",
        img: "https://hiperlibertad.vteximg.com.br/arquivos/ids/198095-600-600/CELULAR-SAMSUNG-GALAXY-A03-4-GB-BLACK-128-GB-1-33447.jpg?v=637910122042470000",
        stock: 10,
        description: "Samsung galaxy A03 negro"
    },
    {
        id: "5",
        name: "Moto G20",
        price: 110000,
        category: "Celulares",
        img: "https://fullmuebles.com/wp-content/uploads/2022/05/CELULAR-PREP-CLARO-MOTOROLA-G20-64GB-1.png",
        stock: 30,
        description: "Motorola moto G20"
    },
    {
        id: "6",
        name: "Moto E40",
        price: 60000,
        category: "Celulares",
        img: "https://www.nexon.com.ar/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/m/o/motorola-e40-64gb-dual-sim-gris-acero_1.jpg",
        stock: 10,
        description: "Motorola moto E40"
    },
    {
        id: "7",
        name: "Motorola G200",
        price: 90000,
        category: "Celulares",
        img: "https://senseiar.vteximg.com.br/arquivos/ids/159700-1000-1000/012CELUL31919.jpg?v=637882639372870000",
        stock: 12,
        description: "Motorola G200 celeste"
    },
    {
        id: "8",
        name: "LG K40",
        price: 55000,
        category: "Celulares",
        img: "https://pixelstore.com.ar/wp-content/uploads/2019/11/Sin-t%C3%ADtulo-1.png",
        stock: 8,
        description: "LG K40 color gris"
    },
    {
        id: "9",
        name: "LG K20",
        price: 75000,
        category: "Celulares",
        img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/2/42144-min.jpg",
        stock: 25,
        description: "LG K20 negro"
    },
    {
        id: "10",
        name: "Xiaomi redmi 10",
        price: 65000,
        category: "Celulares",
        img: "https://s3-sa-east-1.amazonaws.com/saasargentina/c7PSiq9dWdXInyZ0b05B/imagen",
        stock: 11,
        description: "Xiaomi redmi 10 gris"
    },
    {
        id: "11",
        name: "Xiaomi 11T pro",
        price: 95000,
        category: "Celulares",
        img: "https://promart.vteximg.com.br/arquivos/ids/4676211-1000-1000/image-b5a7873a3713445ab72ca049294ef338.jpg?v=637817534552300000",
        stock: 18,
        description: "Xiaomi 11T pro celeste"
    },
    {
        id: "12",
        name: "Iphone 11",
        price: 111000,
        category: "Celulares",
        img: "https://www.qloud.ar/SITES/ryr/fotos/18299-0.jpg",
        stock: 32,
        description: "Iphone 11 color rojo"
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000);
    })
}