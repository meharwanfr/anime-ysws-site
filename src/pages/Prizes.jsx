import Merch1 from "../assets/merch/akatsuki hoodies-Photoroom.png"
import Merch2 from "../assets/merch/one_piece_usb_stick-removebg-preview.png"
import Merch3 from "../assets/merch/bungo_cat_plushie2-removebg-preview.png"
import Merch4 from "../assets/merch/dbz_goku-removebg-preview.png"
import Merch5 from "../assets/merch/demon_slayer_tanjiro_figurine-removebg-preview.png"
import Merch6 from "../assets/merch/gojo_hoodie-removebg-preview.png"
import Merch7 from "../assets/merch/one_piece_luffy-removebg-preview.png"
import Merch8 from "../assets/merch/pikachu_plushie-removebg-preview.png"
import Merch9 from "../assets/merch/slazzer-preview-iaf0y.png"
import Merch10 from "../assets/merch/solo_leveling_hoodie-removebg-preview.png"

// List of all prizes in one place — easy to add or remove items
const prizes = [
  { img: Merch1,  alt: "Akatsuki Hoodie",tag: "1 – 2 hours" },
  { img: Merch2,  alt: "One Piece USB Stick",tag: "1 – 2 hours" },
  { img: Merch3,  alt: "Bongo Cat Plushie" ,tag: "1 – 2 hours"},
  { img: Merch4,  alt: "Goku Figure" ,tag: "1 – 2 hours"},
  { img: Merch5,  alt: "Tanjiro Figurine",tag: "1 – 2 hours" },
  { img: Merch6,  alt: "Gojo Hoodie",tag: "1 – 2 hours" },
  { img: Merch7,  alt: "Luffy Figure",tag: "1 – 2 hours" },
  { img: Merch8,  alt: "Pikachu Plushie",tag: "1 – 2 hours" },
  { img: Merch9,  alt: "Anime Keychain" ,tag: "1 – 2 hours"},
  { img: Merch10, alt: "Solo Leveling Hoodie" ,tag: "1 – 2 hours"},
]

const Prizes = () => {
  return (
    <div className="w-screen min-h-screen bg-black text-white py-16 px-4">

      {/* Page heading */}
      <h1 className="text-center text-5xl font-bold mb-9">
        We Got Cool Prizes !!
      </h1>

      {/* Prize grid */}
      <div className="min-w-4xl md:px-20 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {prizes.map((prize) => (
          <div
            key={prize.alt}
            className="p-4 flex flex-col items-center gap-2"
          >
            <img
              src={prize.img}
              alt={prize.alt}
              className="w-full object-contain"
            />
            <p className="text-2xl font-extrabold tracking-widest font-medium text-center text-gray-200">
              {prize.alt}
            </p>

            {/* Show a tag only if the prize has one */}
            {prize.tag && (
              <span className="text-3xl bg-white text-black px-3 py-0.5 rounded-full font-semibold">
                {prize.tag}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-20 text-center text-gray-500 text-4xl">
        These are just examples — you can pick any valid prize you want!
      </p>

    </div>
  )
}

export default Prizes