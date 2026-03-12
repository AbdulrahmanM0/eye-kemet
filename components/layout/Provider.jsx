import Header from './header/Header'
import Footer from './footer/Footer'

function Provider({ children }) {
  return (
    <div className='max-layout mx-auto relative'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Provider