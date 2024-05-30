

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './index.css'


function App() {


  return (
 <div className='w-full flex flex-col'>
<Navbar/>
<div className='max-w-7xl mx-auto py-20 px-6'>
<Hero/>

</div>
 </div>
  )
}

export default App
