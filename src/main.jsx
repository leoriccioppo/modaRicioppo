import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routers} from './router'
import { LoadingProvider } from './contexts/loadingContext'
import { ProductsProvider} from './contexts/productsContext'
import { CartProvider } from './contexts/cartContext'
import { FirebaseProvider } from './firebase/firebaseContext'
import { AppThemeProvider } from './contexts/themeContext'
import { DrawerProvider } from './contexts/drawerContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppThemeProvider>
      <LoadingProvider>
        <DrawerProvider>
          <FirebaseProvider>
            <ProductsProvider>
                <CartProvider>            
                  <Routers />            
                </CartProvider>
            </ProductsProvider>
          </FirebaseProvider>
        </DrawerProvider>
      </LoadingProvider>  
    </AppThemeProvider>
  </React.StrictMode>
)
