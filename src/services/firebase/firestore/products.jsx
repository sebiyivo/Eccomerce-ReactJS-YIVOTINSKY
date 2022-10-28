import { db } from ".."
import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore"
import { createAdaptedProductFromFirestore } from "../../../adapter/productAdapter"

export const getProducts = (categoryId) => {

    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")

        getDocs(collectionRef).then(response => {
          const productsAdapted = response.docs.map(doc => {
            return createAdaptedProductFromFirestore(doc)
          })
          resolve(productsAdapted)
        }).catch(error => {
              reject(error)
          }) 
        })

}

export const getProduct = (productId) => {

  return new Promise((resolve, reject) => {
    const docRef = doc(db, "products", productId)

      getDoc(docRef).then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
      
      resolve(productAdapted)
    }).catch(error => {
          reject(error)
      })
    })
  } 
    
