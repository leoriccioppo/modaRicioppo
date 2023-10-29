import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import {Routers} from './router'
import { LoadingProvider } from './contexts/loadingContext'
import { ProductsProvider} from './contexts/productsContext'
import { CartProvider } from './contexts/cartContext'
import { FirebaseProvider } from './firebase/firebaseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
      <FirebaseProvider>
        <ProductsProvider>
            <CartProvider>            
              <Routers />            
            </CartProvider>
        </ProductsProvider>
        </FirebaseProvider>
    </LoadingProvider>
  </React.StrictMode>
)
