import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-0-pattern bg-color bg-hero-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
