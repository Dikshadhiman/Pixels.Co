import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Demo from './components/Demo'
import Footer from './components/Footer'
function App() {

  return (
    <div className='app'>
      <Navbar />
      <Demo />
      <Main />
      <Footer />
    </div>
  )
}

export default App
