import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './router'
import { LoadingProvider } from './contexts/loadingContext'
import { CartProvider } from './contexts/cartContext'
import { AppThemeProvider } from './contexts/themeContext'
import { DrawerProvider } from './contexts/drawerContext'
import { ProductsProvider } from './contexts/productsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppThemeProvider>
      <LoadingProvider>
        <DrawerProvider>
              <ProductsProvider>
                <CartProvider>            
                  <Routers/>            
                </CartProvider>
              </ProductsProvider>
        </DrawerProvider>
      </LoadingProvider>  
    </AppThemeProvider>
  </React.StrictMode>
)
