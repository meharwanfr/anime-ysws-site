import infinityCasteGif from "../assets/infinity-castle.gif"
import orpheausFlagImg from "../assets/flag-orpheus-left.svg"

const Home = () => {

  return (
    <>
      <div className="home-root">

        <img className='absolute top-0 left-0 w-fit h-fit z-10' src={orpheausFlagImg} alt="hackclub orpheus flag" />

        {/* Background */}
        <img src={infinityCasteGif} alt="" className="bg-gif" aria-hidden="true" />
        <div className="bg-vignette" />
        <div className="bg-scanlines" />

        <div className="content">

          <h1 className="main-title" >
            Anime YsWs
            <div />
          </h1>

          <p className="tagline">
            You Ship an <strong>anime-themed project</strong>.<br />
            We ship back <strong>cool anime prizes</strong>.
          </p>

          <div className="cta-row">
            <button className="btn btn-primary">RSVP Now !!</button>
            <button className="btn btn-secondary">Got Questions?</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home