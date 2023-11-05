import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routers } from './router'
import { LoadingProvider } from './contexts/loadingContext'
import { FakeStoreProvider } from './contexts/fakeStoreApiContext'
import { CartProvider } from './contexts/cartContext'
import { FirebaseProvider } from './firebase/firebaseContext'
import { AppThemeProvider } from './contexts/themeContext'
import { DrawerProvider } from './contexts/drawerContext'
import { ProductsProvider } from './contexts/productsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppThemeProvider>
      <LoadingProvider>
        <DrawerProvider>
          <FirebaseProvider>
            <FakeStoreProvider>
              <ProductsProvider>
                <CartProvider>            
                  <Routers/>            
                </CartProvider>
              </ProductsProvider>
            </FakeStoreProvider>
          </FirebaseProvider>
        </DrawerProvider>
      </LoadingProvider>  
    </AppThemeProvider>
  </React.StrictMode>
)
