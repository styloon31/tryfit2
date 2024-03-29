export default function Sgrid1(){
    return(
        <div className="mt-11 grid xl:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr] pr-8 gap-4 md:gap-3 lg:gap-4 xl:gap-7 lg:pr-20 xl:pr-40 md:pr-20">
            <div>
                <span className=" flex flex-col   w-full h-[360px] bg-btn_hover/15 backdrop-blur-md border border-white/50 rounded-[25px]">
                <div className="flex ml-12 mt-12 ">
                        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="42.0334" cy="42" rx="41.4982" ry="42" fill="#D9D9D9"/>
                        </svg>
                        <h2 className=" text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-gilroy ml-8 mt-6 text-btn_hover">Aryan Yadav</h2>
                    </div>
                    <p className="md:text-lg lg:text-xl xl:text-2xl mt-10 pr-4 ml-12 max-w-[650px] font-aventa">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ducimus, incidunt? Ipsam, pariatur quo.Voluptatem cum eum debitis eveniet</p>
                </span>
            </div>
            <div>
                <span className=" flex flex-col  w-full h-[360px] bg-btn_hover/15 backdrop-blur-md border border-white/50 rounded-[25px]">
                <div className="flex ml-12 mt-12 ">
                        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="42.0334" cy="42" rx="41.4982" ry="42" fill="#D9D9D9"/>
                        </svg>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-gilroy ml-8 mt-6 text-btn_hover">Aryan Yadav</h2>
                    </div>
                    <p className=" md:text-lg lg:text-xl xl:text-2xl mt-10 pr-4 ml-12 max-w-[650px] font-aventa">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ducimus, incidunt? Ipsam, pariatur quo.Voluptatem cum eum debitis eveniet</p>
                </span>
            </div>
        </div>
    )
}