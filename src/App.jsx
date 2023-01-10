import './App.css'
import { Benefits } from './components/Benefits'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <main className=' w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Benefits />
    </main>
  )
}

export default App
