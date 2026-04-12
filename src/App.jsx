import Home from "./pages/Home"
import "./App.css"
import FAQ from "./pages/Faq"
import Prize from "./pages/Prize"
import HowToStart from "./pages/HowToStart"

function App() {
  return (
    <main className="w-screen min-h-screen   bg-black">
      <Home></Home>
    <div className='w-screen px-20 pb-3 '>
      <div className="bg-white h-0.5 opacity-20"></div>
    </div>
    <Prize></Prize>
       <div className='w-screen px-20 '>
      <div className="bg-white h-0.5 opacity-20"></div>
    </div>
    <HowToStart></HowToStart>
    </main>
  )
}

export default App
