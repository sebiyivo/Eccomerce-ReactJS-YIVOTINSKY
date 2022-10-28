export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        description: data.description
    }
    return productAdapted
}