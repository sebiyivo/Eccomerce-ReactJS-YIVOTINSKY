const products = [
    {
        id: "1",
        name: "Iphone 13",
        price: 120000,
        category: "Celulares",
        img: "https://www.macstation.com.ar/img/productos/2567-1.jpg",
        stock: 25,
        description: "Iphone 13 Blanco 128GB"
    },
    {
        id: "2",
        name: "Moto G52",
        price: 80000,
        category: "Celulares",
        img: "https://medias.musimundo.com/medias/00554006-146236-146236-01-146236-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NDI1NnxpbWFnZS9qcGVnfGg2OC9oODYvMTA0MTIwNDQ1MTc0MDYvMDA1NTQwMDYtMTQ2MjM2LTE0NjIzNl8wMS0xNDYyMzZfMDEuanBnX3NpemU1MTV8YTljZjZlN2EyNzQyNDhjYTQzYzg5OWJhMzRhZTM1MTMzODIyYWEyM2I2OWE4MTJiOWI5YjdjMTZlOTAzZGU3Ng",
        stock: 20,
        description: "Motorola Moto G52 Celeste 64GB"
    },
    {
        id: "3",
        name: "Samsung A32",
        price: 70000,
        category: "Celulares",
        img: "https://medias.musimundo.com/medias/00325007-142200-142200-01-142200-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2NTc1NXxpbWFnZS9qcGVnfGg4ZS9oYzEvMTAzODAyNDI2MTYzNTAvMDAzMjUwMDctMTQyMjAwLTE0MjIwMF8wMS0xNDIyMDBfMDEuanBnX3NpemU1MTV8MjQ4ZWRkYTA1NTk4OTY5MjIyNWMwZGMwYTEwNWQ1YzU0Yzk4ZWQwOTU3MzQzZTEwYzdhM2EwNWUyYzYyMzE1ZQ",
        stock: 30,
        description: "Samsung A32 Negro 32GB"
    },
    {
        id: "4",
        name: "Samsung Galaxy A03",
        price: 60000,
        category: "Celulares",
        img: "https://hiperlibertad.vteximg.com.br/arquivos/ids/198095-600-600/CELULAR-SAMSUNG-GALAXY-A03-4-GB-BLACK-128-GB-1-33447.jpg?v=637910122042470000",
        stock: 10,
        description: "Samsung Galaxy A03 Negro 128GB"
    },
    {
        id: "5",
        name: "Moto G20",
        price: 110000,
        category: "Celulares",
        img: "https://fullmuebles.com/wp-content/uploads/2022/05/CELULAR-PREP-CLARO-MOTOROLA-G20-64GB-1.png",
        stock: 30,
        description: "Motorola Moto G20 16GB"
    },
    {
        id: "6",
        name: "Moto E40",
        price: 60000,
        category: "Celulares",
        img: "https://www.nexon.com.ar/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/m/o/motorola-e40-64gb-dual-sim-gris-acero_1.jpg",
        stock: 10,
        description: "Motorola Moto E40 16GB"
    },
    {
        id: "7",
        name: "Motorola G200",
        price: 90000,
        category: "Celulares",
        img: "https://senseiar.vteximg.com.br/arquivos/ids/159700-1000-1000/012CELUL31919.jpg?v=637882639372870000",
        stock: 12,
        description: "Motorola G200 Celeste 32GB"
    },
    {
        id: "8",
        name: "LG K40",
        price: 55000,
        category: "Celulares",
        img: "https://pixelstore.com.ar/wp-content/uploads/2019/11/Sin-t%C3%ADtulo-1.png",
        stock: 8,
        description: "LG K40 Color Gris 128GB"
    },
    {
        id: "9",
        name: "LG K20",
        price: 75000,
        category: "Celulares",
        img: "https://hendel-r7d8odghj1.stackpathdns.com/media/catalog/product/cache/0c3e9ac8430b5a3e77d1544ae1698a10/4/2/42144-min.jpg",
        stock: 25,
        description: "LG K20 Negro 64GB"
    },
    {
        id: "10",
        name: "Xiaomi Redmi 10",
        price: 65000,
        category: "Celulares",
        img: "https://s3-sa-east-1.amazonaws.com/saasargentina/c7PSiq9dWdXInyZ0b05B/imagen",
        stock: 11,
        description: "Xiaomi Redmi 10 Gris 128GB"
    },
    {
        id: "11",
        name: "Xiaomi 11T Pro",
        price: 95000,
        category: "Celulares",
        img: "https://promart.vteximg.com.br/arquivos/ids/4676211-1000-1000/image-b5a7873a3713445ab72ca049294ef338.jpg?v=637817534552300000",
        stock: 18,
        description: "Xiaomi 11T Pro Celeste 32GB"
    },
    {
        id: "12",
        name: "Iphone 11",
        price: 111000,
        category: "Celulares",
        img: "https://www.qloud.ar/SITES/ryr/fotos/18299-0.jpg",
        stock: 32,
        description: "Iphone 11 Color Rojo 64GB"
    },

    // TELEVISORES ////////////////////

    {
        id: "13",
        name: "Smart TV Samsung 50`",
        price: 130000,
        category: "Televisores",
        img: "https://images.fravega.com/f500/d7ca24bf5639a7db78c31aa9fa963be8.jpg",
        stock: 22,
        description: "Smart TV 4K UHD Samsung 50` UN50AU7000"
    },
    {
        id: "14",
        name: "Smart TV Samsung 32`",
        price: 112000,
        category: "Televisores",
        img: "https://images.fravega.com/f500/b02f3e46c89fe14a5c4689ba6ac9bc08.jpg",
        stock: 9,
        description: "Smart TV 32` HD Samsung UN32T4300A"
    },
    {
        id: "15",
        name: "Smart TV Samsung 43`",
        price: 140000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/0ec3af99701dbf0665ec61ea3816b028.jpg",
        stock: 15,
        description: "Smart TV Full HD Samsung 43` UN43T5300A"
    },
    {
        id: "16",
        name: "Smart TV Samsung 43`4K",
        price: 155000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/fb526f948059428debdc23495a5060a3.jpg",
        stock: 17,
        description: "Smart TV 4K UHD Samsung 43` UN43RU7100"
    },
    {
        id: "17",
        name: "Smart TV TCL 50`",
        price: 146000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/5b76a6f1d5b4c7936b01bc1fb254fdb4.jpg",
        stock: 19,
        description: "Smart TV 50` 4K Ultra HD TCL L50P8M"
    },
    {
        id: "18",
        name: "Smart TV TCL 55`",
        price: 16000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/6733b79ebdf594370e1893e191d28713.jpg",
        stock: 23,
        description: "Smart TV 55` QLED 4K Ultra HD TCL L55C715"
    },
    {
        id: "19",
        name: "Smart TV NOBLEX 32`",
        price: 80000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/1934480f82ac0f68908f7141f7b8981d.jpg",
        stock: 33,
        description: "Smart TV 32` HD Noblex DM32X7000"
    },
    {
        id: "20",
        name: "Smart TV NOBLEX 43`",
        price: 121000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/3be7b1d9bbc38ec4e973c8f520e6a3e1.jpg",
        stock: 27,
        description: "Smart TV 43` Full HD Noblex DK43X5100"
    },
    {
        id: "21",
        name: "Smart TV NOBLEX 50`",
        price: 133000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/7365fc44ad75e0c28016ec94bf8caa39.jpg",
        stock: 8,
        description: "Smart TV Led 50` Full HD Noblex EA50X6100"
    },
    {
        id: "22",
        name: "Smart TV LG 43`",
        price: 116000,
        category: "Televisores",
        img: "https://images.fravega.com/f500/e1159ac5d160119bcf628556b667081b.jpg",
        stock: 10,
        description: "Smart TV FHD 43` LG 43LM6350"
    },
    {
        id: "23",
        name: "Smart TV LG 43` 4K",
        price: 144000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/8a02dd6af5cb0a26c55eabcdcc639d15.jpg",
        stock: 15,
        description: "Smart TV 4K UHD 43` LG 43UN7310"
    },
    {
        id: "24",
        name: "Smart TV LG 55`",
        price: 148000,
        category: "Televisores",
        img: "https://images.fravega.com/f1000/cae3427c406e0a632fbb582574f8e1e4.jpg",
        stock: 18,
        description: "Smart TV 55` 4K Ultra HD LG NAN081"
    },

    // NOTEBOOKS ////////////////////

    {
        id: "25",
        name: "Notebook DELL 15,6` 1TB",
        price: 98000,
        category: "Notebooks",
        img: "https://images.fravega.com/f1000/d08b30771c8bdd7af2534a94b9f986f1.jpg",
        stock: 19,
        description: "Notebook Dell 15,6` Core i7 8GB 1TB Inspiron 3000"
    },
    {
        id: "26",
        name: "Notebook DELL Core I7 1TB",
        price: 134000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/9031e8375562b1e7311cd78143c0a086.jpg",
        stock: 12,
        description: "Notebook Dell 17 Core i7 11va 32gb + 1TB SSD / FHD TOUCH"
    },
    {
        id: "27",
        name: "Notebook DELL 15` 1TB",
        price: 99000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/57147b8ed14b777f5f2c875cbe320aed.jpg",
        stock: 30,
        description: "Notebook Dell 15 TouchScreen Core i7 11va 32gb + 1tb SSD"
    },
    {
        id: "28",
        name: "Notebook HP 15,6` 1TB",
        price: 123000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/d0c7fd03ba92d3ffdd0a7b3c82a65310.jpg",
        stock: 7,
        description: "Notebook HP 15,6` AMD Ryzen 3 12GB 1TB 15-CW1025LA"
    },
    {
        id: "29",
        name: "Notebook LENOVO 14` 256GBB",
        price: 111000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/2c5a93bff902c803c0265700e952ef08.jpg",
        stock: 11,
        description: "Notebook Lenovo 14` Intel Core i5 8GB 256GB YGS7-82A300BA"
    },
    {
        id: "30",
        name: "Notebook BANGHO 15,6` 480GB",
        price: 109000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/4128c09743be8e4e739b757bc2582cec.jpg",
        stock: 14,
        description: "Notebook Banghó 15,6` Core i5 8GB SSD 480GB Windows 11 Pro - Bes T5 i5 Pro"
    },
    {
        id: "31",
        name: "Notebook HP 13,3` 256GB",
        price: 115000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/e0cad2a835512fb6bbe2d938fdd8a58c.jpg",
        stock: 18,
        description: "Notebook HP ENVY 13-ay0103la AMD Ryzen 3 8GB 256GB SSD 13.3`"
    },
    {
        id: "32",
        name: "Notebook HP Gamer 256GB",
        price: 133000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/3f26599877d9efbba2d76f2a2e392e5f.jpg",
        stock: 8,
        description: "Notebook HP Gamer Pavilion AMD Ryzen 5 8GB 256 GB SSD 15-ec1035la"
    },
    {
        id: "33",
        name: "Notebook ASUS 15,6` 256GB",
        price: 125000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/b83f2ecfa919e5359892916e2eb72638.jpg",
        stock: 13,
        description: "Notebook Asus 15,6` Intel Core i3 4GB 256GB SSD 91X515EA-EJ1342T"
    },
    {
        id: "34",
        name: "Notebook HP 16,1` 512GB",
        price: 144000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/4eaf9f18f59fdc4e60a1a5d1b4354f3b.jpg",
        stock: 16,
        description: "Notebook Gamer HP 16,1` Core i5 8GB 512GB SSD Omen 16-B0507LA"
    },
    {
        id: "35",
        name: "Notebook DELL 15` 256GB",
        price: 114000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/ee5ab2765a0e39bfdd8dbd9e5a1ac352.jpg",
        stock: 11,
        description: "Notebook Dell 15 FHD Touch Core I5 256 SSD + 16gb / Intel Windows 10"
    },
    {
        id: "36",
        name: "Notebook DELL 15` I7 1TB",
        price: 131000,
        category: "Notebooks",
        img: "https://images.fravega.com/f500/92222e9e8347ecc00837130ecad36e2f.jpg",
        stock: 23,
        description: "Notebook Dell 15 FHD Touch i7 256 SSD + 1tb HDD+ 16gb / Intel W10"
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