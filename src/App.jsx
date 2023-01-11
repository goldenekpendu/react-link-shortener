import './App.css'
import { Benefits } from './components/Benefits'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Stats from './components/Stats'

function App() {

  return (
    <main className=' w-full overflow-hidden'>
      <Navbar />
      <Hero />
      <Benefits />
      <Stats />
    </main>
  )
}

export default App
