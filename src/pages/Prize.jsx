import PosterMerch1 from "../assets/poster_merch/Akatsuki_hoodie.png"
import PosterMerch2 from "../assets/poster_merch/Bungo_Cat_Plushie.png"
import PosterMerch3 from "../assets/poster_merch/Gojo_hoodie.png"
import PosterMerch4 from "../assets/poster_merch/goku_figurine.png"
import PosterMerch5 from "../assets/poster_merch/Luffy_figurine.png"
import PosterMerch6 from "../assets/poster_merch/Maomao_Tshirt.png"
import PosterMerch7 from "../assets/poster_merch/One_Piece_USB_Stick.png"
import PosterMerch8 from "../assets/poster_merch/solo_leveling_hoodie.png"
import PosterMerch9 from "../assets/poster_merch/Tanjiro_Figurine.png"
import BerriesSymbol from "../assets/Berrysymbol.png"
import BerriesSymbolWhite from "../assets/berrysymbol-white.png"
import BerriesSymbolBrown from "../assets/berrysymbol-brown.png"


const prizes = [
    { link: PosterMerch9, prize: "15" },
    { link: PosterMerch2, prize: "15" },
    { link: PosterMerch3, prize: "25" },

    { link: PosterMerch1, prize: "30" },
    { link: PosterMerch7, prize: "40" },

    // { link: PosterMerch4, prize: "25" },
    // { link: PosterMerch5, prize: "25" },
    { link: PosterMerch6, prize: "50" },
    // { link: PosterMerch8, prize: "25" },
];

const Prize = () => {
    return (
        <div className='w-screen min-h-[80vh] py-4 px-20 text-white'>
            <h1 className='text-7xl font-bold opacity-85'>We Have Cool Prizes !!</h1>
            <br />
            <p className="text-2xl tracking-widest opacity-80">Earn 10 Berries for every hour shipped! Use them here:</p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-7">

                {prizes.map(prize => (
                    <div className="border border-[#432623] bg-[#bea382] p-1">
                        <img className="" src={prize.link} alt="" />
                        <div className="font-extrabold w-full bg-[#dbba92] scale-95 text-3xl text-black flex items-center justify-center cursor-pointer hover:bg-[#b99569] hover:-translate-y-0.5 transition-all border border-[#53332f]">
                            <div className="w-fit flex items-center gap-1 my-1">
                                <p className="text-black">
                                    {prize.prize}
                                </p>
                                <img className="w-4 h-8" src={BerriesSymbol} alt="" />
                            </div>

                        </div>
                    </div>
                ))}

            
            </div>
                <h2 className="mt-7 text-xl opacity-90">if your favorite item is not here just dm me on slack (@Mehar) or fill <a className="underline text-gray-300 " href=" https://forms.fillout.com/t/vvmiuTdm7Pus">this rsvp</a> to make a suggestion there !</h2>

        </div>
    )
}

export default Prize
