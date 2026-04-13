const steps = [
  {
    num: "01",
    title: "Pick a theme & project idea",
    desc: "Anything from a Pokédex to a JJK simulator — sky's the limit.",
  },
  {
    num: "02",
    title: "Set up your project",
    desc:(
      <>
        Track hours with {" "}
        <a 
          href="https://hackatime.hackclub.com" 
          className="underline hover:text-white transition-colors"
          target="_blank" 
          rel="noreferrer"
        >
          Hackatime
        </a>{" "} and create a{" "}
        <a 
          href="https://github.com" 
          className="underline hover:text-white transition-colors"
          target="_blank" 
          rel="noreferrer"
        >
          GitHub repo
        </a>{" "}
        to start building.
      </>
    ),
  },
  {
    num: "03",
    title: "Ship your project",
    desc: "Submit your finished project using the form on this website.",
  },
  {
    num: "04",
    title: "Get Anime Merch !!",
    desc: "Exchange your Berries for anime merch in the shop after approval.",
  },
]

const HowToStart = () => {
  return (
    <div className="w-screen min-h-screen px-6 sm:px-8 md:px-20 py-20 text-white">

      {/* <p className="text-sm tracking-[0.3em] uppercase text-white/30 mb-4">
        Getting Started
      </p> */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mb-20">
        How Do I Start?
      </h1>

      <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
        {steps.map((step) => (
          <div
            key={step.num}
            className="grid hover:bg-[#131212] transition-all ease-linear grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 sm:gap-8 py-8 group"
          >
            <span className="text-3xl text-white/75 pt-1 font-mono tracking-widest">
              {step.num}
            </span>
            <div>
              <h2 className="text-3xl font-semibold mb-2 group-hover:text-white/80 transition-colors duration-150">
                {step.title}
              </h2>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default HowToStart