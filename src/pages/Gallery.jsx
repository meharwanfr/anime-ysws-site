import AnimeYsWsSiteSS from "../assets/anime-ysws-site-ss.png"
import ComingSoonImg from "../assets/aseprite-coming-soon.png"

const projects = [
    { link: "https://anime-ysws-site.vercel.app/", github_link: "https://github.com/meharwanfr/anime-ysws-site", title: "Anime YSWS Site", pic: AnimeYsWsSiteSS },
    { link: "#", github_link: "#", title: "Your Project", pic: ComingSoonImg },
];

const Gallery = () => {
    return (
        <div className='w-screen min-h-[40vh] py-4 px-20 text-white'>
            <h1 className='text-7xl font-bold opacity-85'>Projects Made by Students</h1>
            <br />
            <p className="text-2xl tracking-widest opacity-70">These are some existing anime themed projects. you are free to take inspiration from these projects.</p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-7">

                {
                    projects.map(project => (
<div className="border border-[#2b2423] bg-[#BCA180] p-2 py-3">
                    <img src={project.pic} alt="" />
                    <h2 className="text-2xl text-black font-bold py-1">{project.title}</h2>
                    <div className="py-0.5 flex items-center gap-4 text-lg">
                        <a className="underline text-gray-900 font-bold" href={project.link}>Link</a>
                        <a className="underline text-gray-900 font-bold" href={project.github_link}>Github</a>
                    </div>

                </div>

                    ))
                }
                

                {/* {prizes.map(prize => (
                    <div className="border border-[#432623] bg-[#BCA180] p-1">
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
                ))} */}


            </div>
            {/* <h2 className="mt-7 text-xl opacity-90">if your favorite item is not here just dm me on slack (@Mehar) or fill <a className="underline text-gray-300 " href=" https://forms.fillout.com/t/vvmiuTdm7Pus">this rsvp</a> to make a suggestion there !</h2> */}

        </div>
    )
}

export default Gallery
