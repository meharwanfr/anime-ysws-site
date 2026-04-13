import infinityCasteGif from "../assets/infinity-castle.gif"
import orpheausFlagImg from "../assets/flag-orpheus-left.svg"

const Home = () => {

  return (
    <>
      <div className="home-root">

        <img className='absolute top-0 left-0 w-fit h-fit z-10' src={orpheausFlagImg} alt="hackclub orpheus flag" />
        <img src={infinityCasteGif} alt="" className="bg-gif" aria-hidden="true" />
        <div className="bg-vignette" />
        <div className="bg-scanlines" />

        <div className="content">

          <h1 className="main-title" >
            Anime YsWs
            <div />
          </h1>

          <p className="tagline font-[Abomination] mt-5">
            You Ship an <strong>anime-themed project</strong>.<br />
            We ship <strong>cool anime prizes</strong>.
          </p>

          <div className="cta-row">
            <a href="https://forms.fillout.com/t/vvmiuTdm7Pus" target="_blank" className="btn btn-primary shadow-[0_6px_0_0_rgba(29,78,216,1)] transition-all duration-100 active:translate-y-1 active:shadow-[0_2px_0_0_rgba(29,78,216,1)]">
              RSVP Now !!      
              </a>
            {/* <button className="btn btn-secondary">Got Questions?</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home