import { GET_PRODUCTS } from './types'

export const getProducts = () => dispatch => {
    //static data
    const products = [
        {
            imgPath: '/product.png',
            desc: 'Samsung Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Samsung',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'LG Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'LG',
            rating: 3,
            price: 2000,
            favorite: true,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Sony Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Sony',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'SYMPHONY Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'SYMPHONY',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'ATA Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'ATA',
            rating: 3,
            price: 2000,
            favorite: true,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: true,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: false,
            date: Date.now()
        },
        {
            imgPath: '/product.png',
            desc: 'Toshiba Eastpack Padded Pak`r Backpack',
            size: 40,
            color: 'Black',
            brand: 'Toshiba',
            rating: 3,
            price: 2000,
            favorite: true,
            date: Date.now()
        }
    ]
    //dispatching data to producer
    dispatch({
            type: GET_PRODUCTS,
            payload: products
        })
}