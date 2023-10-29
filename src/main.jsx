import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'
import {Routers} from './router'
import { LoadingProvider } from './contexts/loadingContext'
import { ProductsProvider} from './contexts/productsContext'
import { CartProvider } from './contexts/cartContext'
import { FirebaseProvider } from './firebase/firebaseContext'
import { AppThemeProvider } from './contexts/themeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <LoadingProvider>
        <FirebaseProvider>
          <ProductsProvider>
              <CartProvider>            
                <Routers />            
              </CartProvider>
          </ProductsProvider>
          </FirebaseProvider>
      </LoadingProvider>
    </AppThemeProvider>
  </React.StrictMode>
)
