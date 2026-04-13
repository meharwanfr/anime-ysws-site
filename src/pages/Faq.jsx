import { useState } from 'react'

const faqs = [
  {
    q: "Who is eligible to participate?",
    a: "Anyone of age 18 or under !",
  },
  {
    q: "Is this free ?",
    a: "yes, anime-ysws is completely free to participate in!",
  },
  {
    q: "if i am a complete beginner, can i still participate ?",
    a: "Absolutely! Feel free to ask questions in the #anime-ysws Slack channel, and we'll do our best to help. Beginners are highly encouraged to make their first projects !",
  },
  {
    q: "How can i join the slack channel ?",
    a: (
      <>
        Go to {" "}
        <a 
          href="https://hackclub.com/" 
          className="underline hover:text-white transition-colors"
          target="_blank" 
          rel="noreferrer"
        >
          hackclub.com
        </a>{" "} website and Join in from there. when you are on slack, just search for #anime-ysws channel or if you are confused, dm me on slack (@Mehar).I am always happy to help you !!
      </>),
  },
  {
    q: "what is anime?",
    a: "Any japanese produced animation show is called anime.",
  },
  {
    q: "Can i double dip event with other events ?",
    a: "No, Double Dippinng is not allowed for anime-ysws ",
  },
  {
    q: "How will projects be judged?",
    a: "Its based on creativity (very important), anime authenticity and how fun is your project !",
  },
  {
    q: "Can I use AI tools or assets?",
    a: "Only 30% usage of AI in the overall development is allowed, AI generated art is highly discouraged, if you don't know how to make art, then you can make simple manga styled art or maybe use original arts from the internet. Overuse of AI will just result in a souless and barely functional project, so please keep that in mind",
  },
  {
    q: "What is not allowed ?",
    a: "This program is for teens (13-18). Explicit or inappropriate content is strictly prohibited and will result in a ban. If you're unsure about your project, DM me (@Mehar) on Slack or ask in the #anime-ysws channel if possible.",
  },

]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <div className="w-screen min-h-screen px-20 py-20 text-white">

      <h1 className="text-6xl font-bold tracking-tight leading-none mb-20">
        Got Some Questions?
      </h1>

      <div className="flex flex-col border-t border-white/10">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border-b border-white/30"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full grid grid-cols-[1fr_24px] gap-8 py-7 text-left group cursor-pointer bg-transparent border-0"
            >
              <span className={`text-2xl font-bold transition-colors duration-150 ${open === i ? 'text-white' : 'text-white/90 group-hover:text-white/70'}`}>
                {item.q}
              </span>
              <span className={`text-white/50 text-2xl leading-none mt-1 transition-transform duration-200 select-none ${open === i ? 'rotate-45 text-white/60' : ''}`}>
                +
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-out ${open === i ? 'max-h-40 pb-7' : 'max-h-0'}`}>
              <p className="text-white/90 text-xl leading-relaxed max-w-2xl border-l border-white/10 pl-5">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ