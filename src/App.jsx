// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.scss'

// Components
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div className="bg-overlay"></div>
      <div className="page">
        <Header></Header>
      </div>
    </div>
  )
}

export default App
