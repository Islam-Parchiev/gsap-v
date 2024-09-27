import Nav from './components/Nav'
import './App.css'
import { FaBehance,FaFacebookF, FaInstagram } from 'react-icons/fa'

function App() {

  return (
    <>
  <Nav/>
  <div className="fixed h-[70vh] bottom-0 w-24 flex flex-col justify-between items-center p-10">
    <div className="flex items-center -rotate-90 gap-8">
      <p>Eng</p>
      <div className="w-20 h-[1px] bg-white/50"></div>
      <p>Br</p>
    </div>
    <div className="space-y-8 [&>8]:cursor-pointer">
      <FaBehance className="hover:text-orange-500"/>
      <FaFacebookF className="hover:text-orange-500"/>
      <FaInstagram className="hover:text-orange-500"/>
    </div>
  </div>
    </>
  )
}

export default App
