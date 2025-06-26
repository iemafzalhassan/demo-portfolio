import Link from "next/link"

import skills from "../../data/skills.json"
import usersInfo from "../../data/usersInfo.json"



export default function Intro() {

    return (
        <div className={`w-full h-auto p-0 relative top-[50px] mb-[100px]`}>
            {/* Skills & Expertise Section */}
            <div className={`w-full mb-[50px]`}>
                <div className={`w-full flex flex-row items-center justify-center mb-[40px]`}>
                    <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
                    <p data-aos="fade-up" className={`text-white-200 text-[15px] font-medium`}>Skills & Expertise</p>
                    <span data-aos="zoom-in" className={`w-[100px] h-[2px] rounded-[30px] m-[20px] bg-green-200 md:w-[120px]`}></span>
                </div>
            </div>

            <div className={`w-full flex items-start justify-between flex-row flex-wrap-reverse`}>
                <div className={`w-full h-auto p-[10px] relative container md:w-[65%]`}>
                    {/* Skills Cards */}
                    <IntroCards data={skills.skill} />
                </div>
                <div className={`w-full h-auto relative top-[20px] p-[10px] mb-[30px] md:mb-0 md:w-[30%]`}>
                    {/* Brief About Section */}
                    <div className={`relative top-[20px]`}>
                        <h3 data-aos="zoom-in-up" className={`text-[24px] md:text-[28px] font-bold mb-[20px] text-green-200`}>
                            About My Work
                        </h3>
                        
                        <p data-aos="fade-up" className={`text-[14px] mb-5 text-white-200 leading-relaxed`}>
                            {usersInfo.bio_desc[0]}
                        </p>

                        <div data-aos="zoom-in-up" data-aos-delay="200" className={`mt-[30px]`}>
                            <Link href="/about">
                                <a className={`inline-flex items-center px-4 py-2 bg-green-200 text-dark-100 rounded-lg font-medium text-[14px] hover:bg-green-300 transition-all hover:scale-105`}>
                                    Learn More About Me
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function IntroCards({ data }) {

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {
                data.length > 0 ?
                    data.map((skill, i) => {
                        return (
                            <div data-aos="zoom-in-up" data-aos-delay={i * 100} key={i} className={`w-full h-[140px] p-[20px] rounded-[8px] bg-dark-200 relative transition-all hover:shadow-2xl hover:bg-dark-300 hover:scale-105 group`}>
                                <div className={`flex flex-col items-start justify-start h-full`}>
                                    <div className={`flex items-center justify-between w-full mb-[10px]`}>
                                        <p className={`m-0 font-extrabold text-green-100 text-[16px] group-hover:text-green-200 transition-colors`}>
                                            {skill.name}
                                        </p>
                                        <ion-icon name="code-slash" class={`text-green-400 text-[20px] group-hover:text-green-200 transition-colors`}></ion-icon>
                                    </div>
                                    <span className={`text-[12px] text-white-300 leading-relaxed flex-1`}>
                                        {skill.description}
                                    </span>
                                    <div className={`mt-auto pt-[10px]`}>
                                        <div className={`flex items-center justify-between w-full`}>
                                            <span className={`text-[13px] text-green-200 font-bold`}>
                                                {skill.projects_completed} Projects
                                            </span>
                                            <div className={`w-[30px] h-[3px] bg-green-200 rounded-full`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <div data-aos="zoom-in-up" className={`w-full h-[140px] p-[20px] rounded-[8px] bg-dark-200 relative transition-all hover:shadow-2xl hover:bg-dark-300 hover:scale-105 group`}>
                        <div className={`flex flex-col items-start justify-start h-full`}>
                            <div className={`flex items-center justify-between w-full mb-[10px]`}>
                                <p className={`m-0 font-extrabold text-green-100 text-[16px] group-hover:text-green-200 transition-colors`}>
                                    Frontend Development
                                </p>
                                <ion-icon name="code-slash" class={`text-green-400 text-[20px] group-hover:text-green-200 transition-colors`}></ion-icon>
                            </div>
                            <span className={`text-[12px] text-white-300 leading-relaxed flex-1`}>
                                Development of beautiful and unique user interfaces.
                            </span>
                            <div className={`mt-auto pt-[10px]`}>
                                <div className={`flex items-center justify-between w-full`}>
                                    <span className={`text-[13px] text-green-200 font-bold`}>
                                        60 Projects
                                    </span>
                                    <div className={`w-[30px] h-[3px] bg-green-200 rounded-full`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}