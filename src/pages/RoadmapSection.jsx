import Num1 from "../assets/aseprite-num1.png"
import Num2 from "../assets/aseprite-num2.png"
import Num3 from "../assets/aseprite-num3.png"
import Num4 from "../assets/aseprite-num4.png"

const RoadmapSection = () => {
  return (
    <div className='w-screen min-h-[50vh] flex flex-col items-center px-30'>
      <h1 className='text-7xl mt-10 text-white'>How does this work ?</h1>

      {/* <div className="w-10 h-10 bg-red-500"></div> */}
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div className='border-[#3d3636] border-2 rounded-lg text-white p-4 '>
          <h2 className='text-3xl font-bold flex gap-2 items-center'>
            <img src={Num1} className="w-5 h-5" alt="" /> Start working on your project</h2>
          <p className='tracking-widest text-xl mt-4'>{"->"} Create your coding project and a <a href="https://github.com/" className="text-gray-300 underline">github</a> repo for it. </p>
        </div>

        <div className='border-[#3d3636]  border-2 rounded-lg text-white p-4 '>
          <h2 className='text-3xl font-bold flex gap-2 items-center'>
            <img src={Num2} className="w-5 h-5" alt="" />Track your time</h2>
          <p className=' tracking-widest text-xl mt-4'>{"->"} Use <a href="https://hackatime.hackclub.com/" className="text-gray-300 underline">hackatime</a> to track your coding hours</p>
        </div>
        <div className='border-[#3d3636]  border-2 rounded-lg text-white p-4 '>
          <h2 className='text-3xl font-bold flex gap-2 items-center'>
            <img src={Num3} className="w-5 h-5" alt="" /> Ship Your Project !</h2>
          <p className=' tracking-widest text-xl mt-4'>{"->"} Ship your project by submitting your project on the form provided in this website.</p>
        </div>
        <div className='border-[#3d3636]  border-2 rounded-lg text-white p-4 '>
          <h2 className='text-3xl font-bold flex gap-2 items-center'>
            <img src={Num4} className="w-5 h-5" alt="" /> Get Anime Merch !!</h2>
          <p className=' tracking-widest text-xl mt-4'>{"->"} After your project review is done, i will ship your merch.</p>
        </div>

      </div>
    </div>
  )
}

export default RoadmapSection
