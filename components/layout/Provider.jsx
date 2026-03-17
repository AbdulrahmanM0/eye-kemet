"use client"
import Header from './header/Header'
import Footer from './footer/Footer'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Cart from '../cart/Cart';
import "react-phone-number-input/style.css";

function ProviderContainer({ children }) {
  return (
    <div className='max-layout mx-auto relative'>
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
        <ToastContainer theme="dark" />
        <Cart />
      </Provider>
    </div>
  )
}

export default ProviderContainer