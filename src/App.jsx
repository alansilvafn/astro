// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'
import './js/main.js'

// Components
import Header from './components/Header'
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <div className="page" id="particles-js">
        <Header></Header>
        <Product></Product>
      </div>
    </div>
  )
}

export default App
