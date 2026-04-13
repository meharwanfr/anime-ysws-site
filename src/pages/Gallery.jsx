import AnimeYsWsSiteSS from "../assets/anime-ysws-site-ss.png"
import ComingSoonImg from "../assets/aseprite-coming-soon.png"

const projects = [
    { link: "https://anime-ysws-site.vercel.app/", github_link: "https://github.com/meharwanfr/anime-ysws-site", title: "Anime YSWS Site", pic: AnimeYsWsSiteSS },
    { link: "#", github_link: "#", title: "Your Project", pic: ComingSoonImg },
];

const Gallery = () => {
    return (
        <div className='w-screen min-h-[60vh] mb-5 py-4 px-20 text-white'>
            <h1 className='text-7xl font-bold opacity-85'>Projects Made by Students</h1>
            <br />
            <p className="text-2xl tracking-widest opacity-70">These are some existing anime themed projects. you are free to take inspiration from these projects.</p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-7">

                {
                    projects.map(project => (
                        <div className="border border-[#2b2423] bg-[#bea382] p-2 py-3">
                            <img src={project.pic} alt="" />
                            <h2 className="text-2xl text-black font-bold py-1">{project.title}</h2>
                            <div className="py-0.5 flex items-center gap-4 text-lg">
                                <a className="underline text-gray-900 font-bold" href={project.link}>Link</a>
                                <a className="underline text-gray-900 font-bold" href={project.github_link}>Github</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Gallery
