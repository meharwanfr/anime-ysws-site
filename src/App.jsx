import Home from "./pages/Home"
import Prizes from "./pages/Prizes"
import "./App.css"
import Projects from "./pages/Projects"
import FAQ from "./pages/Faq"

function App() {
  return (
   <main className="w-screen min-h-screen font-[OnePieceFont]  bg-black">
    <Home></Home>
    <Prizes></Prizes>
    {/* <Projects>
    
    </Projects>
    <FAQ></FAQ> */}
   </main>
  )
}

export default App
