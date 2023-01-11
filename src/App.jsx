import './App.css'
import { Benefits } from './components/Benefits'
import Brands from './components/Brands'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Stats from './components/Stats'
import Promo from './components/Promo'

function App() {

  return (
    <main className=' w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Benefits />
      <Stats />
      <Brands />
      <Promo />
    </main>
  )
}

export default App
