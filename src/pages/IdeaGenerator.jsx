import { useState, useEffect } from 'react'

const ideas = [
  "A Pokédex desktop app",
  "A Solo Leveling-style fitness tracker",
  "A GBA-style Pokémon game",
  "A fighting game with your favourite anime characters",
  "A Minecraft mod with Naruto or any anime powers",
  "Your personal anime-themed portfolio site",
  "A Death Note-style to-do app where tasks get crossed off dramatically",
  "An anime episode tracker with watch status and ratings",
  "A quiz app that guesses which anime character you are",
  "A visual novel set in your favourite anime universe",
  "A rhythm game using your favourite anime openings",
  "An AI that roasts your code like an anime villain",
  "A loot box simulator with anime-themed drops and rarities",
  "A weather app skinned as a Studio Ghibli scenes",
]

const IdeaGenerator = () => {
  const [current, setCurrent] = useState(null)
  const [visible, setVisible] = useState(true)

  const generate = () => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(prev => {
        const pool = ideas.map((_, i) => i).filter(i => i !== prev)
        return pool[Math.floor(Math.random() * pool.length)]
      })
      setVisible(true)
    }, 180)
  }

  return (
    <div className="w-screen min-h-[50vh] px-20 py-20 text-white">
      <h1 className="text-6xl font-bold tracking-tight leading-none mb-2">
        Idea Generator
      </h1>
      <p className="text-md tracking-[0.3em] uppercase text-white/60 mb-4">
        Not sure what to build? Try making one of these projects
      </p>

      <div className="border-t border-white/10">
        <div className="py-7 border-b border-white/10">
          <p
            className="text-3xl font-semibold leading-snug transition-all duration-200"
            style={{
              opacity: visible ? (current === null ? 0.2 : 1) : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(6px)',
            }}
          >
            {current !== null ? ideas[current] : 'Hit Generate Idea.'}
          </p>
        </div>
      </div>

      <div className="mt-12 flex items-center gap-8">
        <button
          onClick={generate}
          className="text-md font-bold tracking-[0.2em] uppercase text-white/90 border border-white/80 px-6 py-3 hover:text-white/60 hover:border-white/50 transition-colors duration-150 cursor-pointer bg-transparent"
        >
          Generate Idea
        </button>
        {/* {current !== null && (
          <p className="text-sm text-white/25 font-mono">
            {String(current + 1).padStart(2, '0')} / {String(ideas.length).padStart(2, '0')}
          </p>
        )} */}
      </div>
    </div>
  )
}

export default IdeaGenerator