import Merch1 from "../assets/merch/akatsuki hoodies-Photoroom.png"
import Merch2 from "../assets/merch/bungo_cat_plushie-removebg-preview.png"
import Merch3 from "../assets/merch/bungo_cat_plushie2-removebg-preview.png"
import Merch4 from "../assets/merch/dbz_goku-removebg-preview.png"
import Merch5 from "../assets/merch/demon_slayer_tanjiro_figurine-removebg-preview.png"
import Merch6 from "../assets/merch/gojo_hoodie-removebg-preview.png"
import Merch7 from "../assets/merch/one_piece_luffy-removebg-preview.png"
import Merch8 from "../assets/merch/one_piece_straw_hat-removebg-preview.png"
import Merch9 from "../assets/merch/slazzer-preview-iaf0y.png"
import Merch10 from "../assets/merch/solo_leveling_hoodie-removebg-preview.png"

const Prizes = () => {
    return (
        <div className='w-screen min-h-screen relative bg-black text-white py-24 overflow-hidden'>
            <h1 className='absolute left-1/2 top-8 -translate-x-1/2 text-5xl sm:text-6xl md:text-7xl font-bold'>We Got Cool Prizes !!</h1>

            <div className='container mx-auto px-4 pt-32'>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center items-center'>
                    <img className='w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] rotate-6 shadow-2xl' src={Merch1} alt='Akatsuki hoodie' />
                    <img className='w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] -rotate-6 shadow-2xl' src={Merch2} alt='Bungo cat plushie' />
                    <img className='w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] rotate-3 shadow-2xl' src={Merch3} alt='Bungo cat plushie 2' />
                    <img className='w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] -rotate-12 shadow-2xl' src={Merch4} alt='Goku merch' />
                    <img className='w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] -rotate-3 shadow-2xl' src={Merch5} alt='Tanjiro figurine' />
                    <img className='w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] rotate-12 shadow-2xl' src={Merch6} alt='Gojo hoodie' />
                    <img className='w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] -rotate-10 shadow-2xl' src={Merch7} alt='Luffy merch' />
                    <img className='w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] -rotate-8 shadow-2xl' src={Merch8} alt='Straw hat merch' />
                    <img className='w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] rotate-3 shadow-2xl' src={Merch9} alt='Slazzer merch' />
                    <img className='w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] -rotate-18 shadow-2xl' src={Merch10} alt='Solo Leveling hoodie' />
                </div>
                <p className='mt-8 text-center text-xl sm:text-3xl text-gray-300'>these are just examples, you can get any valid prize you want !!</p>
            </div>
        </div>
    )
}

export default Prizes
