import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PriceSection from './components/PriceSection'
import TestimonialsSection from './components/TestimonialsSection'
import WorkflowSection from './components/WorkflowSection'
import './index.css'


function App() {

  return (
 <div className='w-full flex flex-col'>
<Navbar/>
<div className='max-w-7xl mx-auto py-20 px-6'>
<HeroSection/>
<FeaturesSection/>
<WorkflowSection/>
<PriceSection/>
<TestimonialsSection/>
<Footer/>
</div>
 </div>
  )
}

export default App
