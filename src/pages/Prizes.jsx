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
        <div className='w-screen min-h-1/2 bg-black text-white flex justify-center mt-10'>

            <div className='w-2/3 flex flex-col items-center justify-start '>
                <h1 className='text-7xl'>We Got Cool Prizes !!</h1>

                <img src={Merch1} alt="" srcset="" />
                <img src={Merch2} alt="" srcset="" />
                <img src={Merch3} alt="" srcset="" />
                <img src={Merch4} alt="" srcset="" />
                <img src={Merch5} alt="" srcset="" />
                <img src={Merch6} alt="" srcset="" />
                <img src={Merch7} alt="" srcset="" />
                <img src={Merch8} alt="" srcset="" />
                <img src={Merch9} alt="" srcset="" />
                <img src={Merch10} alt="" srcset="" />
                <img src="" alt="" />
            </div>

        </div>
    )
}

export default Prizes
