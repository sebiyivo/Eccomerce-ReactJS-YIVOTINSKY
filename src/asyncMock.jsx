const products = [
    {
        id: "1",
        name: "Iphone 13",
        price: 120000,
        category: "Celulares",
        img: "https://cbafederal.net/wp-content/uploads/2021/10/iphone-13-pro-max-blue-select.png",
        stock: 25,
        description: "New iphone"
    },
    {
        id: "2",
        name: "Moto G52",
        price: 80000,
        category: "Celulares",
        img: "https://medias.musimundo.com/medias/00554006-146236-146236-01-146236-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NDI1NnxpbWFnZS9qcGVnfGg2OC9oODYvMTA0MTIwNDQ1MTc0MDYvMDA1NTQwMDYtMTQ2MjM2LTE0NjIzNl8wMS0xNDYyMzZfMDEuanBnX3NpemU1MTV8YTljZjZlN2EyNzQyNDhjYTQzYzg5OWJhMzRhZTM1MTMzODIyYWEyM2I2OWE4MTJiOWI5YjdjMTZlOTAzZGU3Ng",
        stock: 20,
        description: "Motorola Moto G52"
    },
    {
        id: "3",
        name: "Samsung A32",
        price: 70000,
        category: "Celulares",
        img: "https://medias.musimundo.com/medias/00325007-142200-142200-01-142200-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2NTc1NXxpbWFnZS9qcGVnfGg4ZS9oYzEvMTAzODAyNDI2MTYzNTAvMDAzMjUwMDctMTQyMjAwLTE0MjIwMF8wMS0xNDIyMDBfMDEuanBnX3NpemU1MTV8MjQ4ZWRkYTA1NTk4OTY5MjIyNWMwZGMwYTEwNWQ1YzU0Yzk4ZWQwOTU3MzQzZTEwYzdhM2EwNWUyYzYyMzE1ZQ",
        stock: 30,
        description: "Black Samsung A32"
    }

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