import { useState, useEffect } from "react"
import { Container } from ".."
import userAvatar from "../../public/images/avatar/avatar.png"

import usersInfo from "../../data/usersInfo.json"
import languages from "../../data/languages.json"

export default function Header({ children }) {

    const [resumeActive, setResumeActive] = useState(false)
    const [reposcount, setReposCount] = useState(0)
    const [avatar, setAvatar] = useState("")

    const userName = usersInfo.github_username;

    function openResume() {

        setResumeActive(!resumeActive)
    }

    // fetch github repos count
    async function getReposCount() {
        let res;
        if (localStorage.getItem("repo_counts") === null) {

            res = await fetch(`https://api.github.com/users/${userName}`)
            let data = await res.json()

            if (data && data.public_repos !== undefined) {
                const { public_repos, avatar_url } = data;
                localStorage.setItem("repo_counts", JSON.stringify(public_repos))
                // store github user avatar
                localStorage.setItem("github_avatar", JSON.stringify(avatar_url))
                setReposCount(public_repos)
            }
        }

        // get data from cahched localstorage
        let data = JSON.parse(localStorage.getItem("repo_counts"))
        let useravatar = JSON.parse(localStorage.getItem("github_avatar"))

        setReposCount(data)
        setAvatar(useravatar)

        return data
    }

    useEffect(() => {

        (async () => {
            await getReposCount()

        })()

    }, [])




    return (
        <header className={`header w-full h-[100vh] relative bg-dark-200 md:h-auto`}>
            <Container>
                {children}

                {/* Enhanced Hero Section with Personal Introduction */}
                <div className={`w-full h-[70vmin] flex align-center items-center justify-center flex-row p-[20px] flex-wrap mt-[50px]`}>

                    <div className={`w-full h-full mb-[50px] relative md:w-[50%]`}>
                        {/* Personal Introduction Section */}
                        <div className={`mb-[40px]`}>
                            {/* Skill Badge */}
                            <span data-aos="fade-up" className={`py-[2px] px-[8px] bg-green-600 text-green-100 rounded-[3px] text-[12px] text-capitalize inline-block mb-[20px]`}>
                                {usersInfo.user_skill}
                            </span>
                            
                            {/* Personal Greeting */}
                            <div data-aos="fade-right" data-aos-delay="200" className={`mb-[30px]`}>
                                <h2 className={`text-[25px] md:text-[30px] font-light text-white-200 mb-[10px]`}>
                                    {usersInfo.greeting_type} I'm{' '}
                                    <span className={`text-green-200 font-bold`}>
                                        {usersInfo.full_name}
                                    </span>
                                </h2>
                            </div>

                            {/* Main Tag Line */}
                            <h1 data-aos="fade-right" data-aos-delay="400" className={`text-[7vmin] md:text-[4.5vmin] font-bold leading-tight mb-[20px]`}>
                                {usersInfo.tag_line}
                            </h1>

                            {/* Featured Intro Quote */}
                            <div data-aos="fade-up" data-aos-delay="600" className={`mb-[20px]`}>
                                <p className={`text-[16px] md:text-[18px] text-green-200 italic font-medium px-4 py-3 bg-dark-300 border-l-[4px] border-solid border-l-green-200 rounded-r-md`}>
                                    "{usersInfo.intro_tagline}"
                                </p>
                            </div>

                            {/* Subtitle */}
                            <span data-aos="fade-in" data-aos-delay="800" className={`text-[18px] md:text-[20px] text-white-300 font-medium block mb-[25px]`}>
                                {usersInfo.subTitle}
                            </span>

                            {/* Bio Snippet */}
                            <div data-aos="fade-up" data-aos-delay="1000" className={`mb-[30px]`}>
                                <p className={`text-[14px] md:text-[15px] text-white-300 leading-relaxed max-w-[500px]`}>
                                    {usersInfo.bio_desc[0]}
                                </p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className={`relative top-[20px] flex align-start items-start justify-start w-full mb-[40px]`}>
                            <div data-aos="zoom-in-left" data-aos-delay="1200" className={`w-[50%] mr-[20px] flex flex-row items-center justify-start`}>
                                <h1 className={`text-[35px] md:text-[40px] pt-[10px] pr-[10px] pb-0 pl-0 text-green-200 font-bold`}>
                                    {(new Date().getFullYear() - parseInt(usersInfo.tech_year))+1}
                                </h1>
                                <span className={`w-[80px] text-white-300 text-[11px] md:text-[12px] font-medium`}>
                                    Years of Experience
                                </span>
                            </div>
                            <div data-aos="zoom-in-right" data-aos-delay="1400" className={`w-[50%] mr-[20px] flex flex-row items-center justify-start`}>
                                <h1 className={`text-[35px] md:text-[40px] pt-[10px] pr-[10px] pb-0 pl-0 text-green-200 font-bold`}>
                                    {reposcount}
                                </h1>
                                <span className={`w-[80px] text-white-300 text-[11px] md:text-[12px] font-medium`}>
                                    Projects / Contributions
                                </span>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="w-full h-auto mt-[30px]" data-aos="zoom-in-up" data-aos-delay="1600">
                            <button className="w-[160px] border-[2px] border-solid border-green-200 px-6 py-3 bg-dark-100 rounded-[30px] scale-[.90] hover:scale-[.95] transition-all hover:bg-green-200 hover:text-dark-100 font-medium text-[14px]" onClick={openResume}>
                                View My Resume
                            </button>
                        </div>

                        {resumeActive && <ResumeViewer openResume={openResume} />}
                    </div>

                    {/* Avatar Section with Tech Stack */}
                    <div data-aos="fade-left" data-aos-delay="800" className={`main w-full h-auto hidden md:block md:w-[50%] relative`}>
                        <div className={`img-cont w-[280px] h-[280px] p-[15vmin] flex flex-col items-center justify-center bg-cover bg-center rounded-[50%] mx-auto shadow-2xl border-[3px] border-green-200 border-opacity-30`}>
                            <style jsx>{`
                                .img-cont{
                                    background-image: url("${avatar}");
                                    background-size: cover;
                                    background-position: center;
                                }
                            `}</style>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1000" className={`circleA`}>
                            <img src={languages.languages.length === 0 || languages.languages.length <= 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" : languages.languages[0]} className={`langImgA`} alt="Tech stack" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="1200" className={`circleB`}>
                            <img src={languages.languages.length === 0 || languages.languages.length <= 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" : languages.languages[1]} className={`langImgB`} alt="Tech stack" />
                        </div>
                        <div data-aos="fade-left" data-aos-delay="1400" className={`circleC`}>
                            <img src={languages.languages.length === 0 || languages.languages.length <= 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" : languages.languages[2]} className={`langImgC`} alt="Tech stack" />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

function ResumeViewer({ openResume }) {

    function dowloadCv() {
        let link = document.createElement("a")
        link.href = resume;
        link.download = "resume.pdf"
        link.click()
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-dark-400 z-[1500] flex flex-row items-center justify-center">
            <div id="box" className="w-[100%] h-[99%] mx-auto bg-dark-100 overflow-hidden rounded-md md:w-[70%]">
                <div id="head" className="w-full h-auto p-3 bg-dark-200 flex items-start justify-start">
                    <h2>My Resume / CV</h2>
                    <button className="px-3 py-1 flex flex-row items-center justify-center bg-green-300 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95]  " onClick={dowloadCv}>Download</button>
                    <button className="px-3 py-1 flex flex-row items-center justify-center bg-red-500 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95] " onClick={openResume}>Close</button>
                </div>
                <iframe src={"/CV/resume.pdf"} frameborder="0" className="w-full h-full overflow-scroll bg-white-200 mt-0"></iframe>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}


