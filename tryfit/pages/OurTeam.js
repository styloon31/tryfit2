import Header from "@/components/Header";
import SliderGallery from "@/components/SliderGallery";
import Carousel from "@/components/carousel";

export default function OurTeam(){
    return(
        <div>
            <Header />


            {/* Our Team Section */}

            <div className="flex justify-center mt-56">
                <button  className="flex items-center btn_green  py-1 px-24  rounded-[20px] space-x-2 ">
                    <svg width="49" height="27" viewBox="0 0 49 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-flex item-center">
                        <circle cx="12" cy="13.5" r="12" fill="#D9D9D9"/>
                        <circle cx="24" cy="13.5" r="12.5" fill="#D9D9D9" stroke="#334C1D"/>
                        <circle cx="36" cy="13.5" r="12.5" fill="#D9D9D9" stroke="#334C1D"/>
                    </svg>
                    <div className=" text-sm/[21px]">What Others Say About Us</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>             
            </div>
            <div className="flex  justify-center text-white text-9xl gap-4 font-heavitas mt-20">
                <h2>OUR</h2>
                <h2 className="text-btn_hover">TEAM</h2>
            </div>
            <div className="flex  justify-center text-white text-9xl gap-4 font-heavitas">
                <h2>OUR</h2>
                <h2 className="text-btn_hover">STRENGTH</h2>
            </div>
            <div className=" flex justify-center text-center mt-6 text-4xl  text-white">
                <p className=" font-aventa max-w-5xl">United by a common goal, our team leverages their uniques strengths to create ground breaking solutions. Get to know the minds shaping the future</p>
            </div>
            <div className="flex justify-center mt-16">
                <iframe className="w-[1408px] h-[500px] rounded-xl"
                src="https://www.youtube.com/embed/OoJJvspNEf0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
                </iframe>
            </div>


            {/* Dive in Our World    */}
            <div className="flex flex-col text-white font-heavitas mt-48 text-center">
            <h1 className=" text-8xl">Dive in Our</h1>
            <h1 className=" text-8xl text-btn_hover  ">World.</h1>
            </div>

            <div className="ml-60 mt-11 grid grid-cols-[1.8fr_0.4fr] gap-4 pr-60">
                
                    <span className="flex flex-col w-full h-[484px] bg-whites border rounded-[25px]">
                        <div className="grid grid-cols-[1.8fr_0.2fr]" >
                            <h2 className=" text-dive_color text-6xl font-aventa_bold ml-10 mt-8">
                                What We Do. 
                            </h2>
                            <svg width="209" height="200" viewBox="0 0 177 259" fill="none" xmlns="http://www.w3.org/2000/svg" className=" justify-end mt-4">
                            <path d="M61.56 153.04C61.56 145.12 63.36 138.28 66.96 132.52C70.56 126.76 74.88 121.96 79.9199 118.12C84.9599 114.04 91.4399 109.72 99.3599 105.16C105.36 101.56 110.04 98.5599 113.4 96.1599C116.76 93.7599 119.52 91.1199 121.68 88.2399C123.84 85.3599 124.92 82.1199 124.92 78.5199C124.92 73.4799 123.6 68.7999 120.96 64.4799C118.32 59.9199 114.36 56.3199 109.08 53.6799C104.04 50.7999 97.9199 49.3599 90.7199 49.3599C83.0399 49.3599 76.3199 50.9199 70.5599 54.0399C65.04 56.9199 60.72 61.1199 57.6 66.6399C54.48 72.1599 52.8 78.5199 52.56 85.7199H0.35999C0.35999 67.9599 4.43999 52.7199 12.6 39.9999C21 27.0399 32.04 17.3199 45.72 10.8399C59.4 4.11994 74.1599 0.759944 89.9999 0.759944C105.36 0.759944 119.64 4.11994 132.84 10.8399C146.04 17.5599 156.48 26.9199 164.16 38.9199C172.08 50.6799 176.04 63.8799 176.04 78.5199C176.04 88.1199 174.24 96.2799 170.64 103C167.28 109.48 163.2 114.76 158.4 118.84C153.84 122.68 147.48 127.24 139.32 132.52C133.32 136.12 128.52 139.24 124.92 141.88C121.32 144.52 118.32 147.76 115.92 151.6C113.52 155.2 112.32 159.52 112.32 164.56L111.96 176.8H61.56V153.04ZM89.2799 258.16C80.3999 258.16 72.8399 255.16 66.6 249.16C60.6 243.16 57.6 235.72 57.6 226.84C57.6 217.96 60.6 210.52 66.6 204.52C72.8399 198.28 80.3999 195.16 89.2799 195.16C98.1599 195.16 105.6 198.28 111.6 204.52C117.84 210.52 120.96 217.96 120.96 226.84C120.96 235.72 117.84 243.16 111.6 249.16C105.6 255.16 98.1599 258.16 89.2799 258.16Z" fill="url(#paint0_linear_95_499)"/>
                            <defs>
                            <linearGradient id="paint0_linear_95_499" x1="87" y1="206.203" x2="87" y2="-11.4225" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#303030"/>
                            <stop offset="1" stop-color="#8A8A8A"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        <p className="text-dive_color max-w-2xl ml-10 mt-3 font-aventa_bold font-medium text-xl">Try fit Fabrics is a fabric manufacturing brand that deals in all kinds of fabrics. We’re a customer-centric brand and always aim to make our customers happy. We’ve 4 branches that are located across India and forthcoming. We’re renowned for distinctive new-age Sportswear fabrics. With a private manufacturing unit and warehouse in China, we’re all set to serve the world and enable people to be the more confident versions of themselves. With each passing day, we aim to make Try fit a global fabric brand.</p>
                    </span>
                
                <div>
                    <div className="flex w-full h-[484px] span-bg1  border border-white/50 rounded-[25px] justify-center">
                    </div>
                </div>
            </div>

        <div className=" ml-60 mt-4 grid grid-cols-[1fr_1fr] gap-4 pr-60">
            <div>
                <span className=" flex flex-col w-full h-[484px]  bg-bad_yellow  border border-white/50 rounded-[25px] text-white">
                    <div className=" flex w-full flex-col mt-16 ml-4 pr-6 ">
                        <h2 className=" flex text-dive_color text-6xl border-b-2  border-dive_color font-abessinica">Who We Are</h2>
                        <p className="flex text-dive_color text-3xl justify-end">Since 1990</p>
                    </div>
                    <p className=" max-w-2xl ml-7 mt-20 text-2xl font-aventa text-dive_color">Formerly Known As "Bhatia Traders" TryFitFabrics Was Founded In 1990 By Shri Kewal Kumar Bhatia. In Due Course Of Time, The Comapny Was Handed Over To His Son Mr. Deepak Bhatia And The Brand Was Renamed As "Try Fit Fabrics"</p>
                    <svg width="163" height="202" viewBox="0 0 163 202" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex  w-full justify-end">
                    <path d="M173.154 200.449C173.707 200.314 174.036 199.744 173.868 199.2C169.42 184.851 160.043 172.186 147.114 163.095C133.884 153.792 117.675 148.75 101 148.75C84.3248 148.75 68.1156 153.792 54.8863 163.095C41.9566 172.186 32.5797 184.851 28.1323 199.2C27.9637 199.744 28.2926 200.314 28.8456 200.449L91.4614 215.825C97.7273 217.363 104.272 217.363 110.538 215.825L173.154 200.449Z" fill="url(#paint0_linear_120_548)"/>
                    <ellipse cx="101" cy="79.3333" rx="42.0833" ry="49.5833" fill="url(#paint1_linear_120_548)"/>
                    <defs>
                    <linearGradient id="paint0_linear_120_548" x1="101" y1="148.75" x2="101" y2="218.167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EED145"/>
                    <stop offset="1" stop-color="#616161"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_120_548" x1="101" y1="29.75" x2="101" y2="128.917" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EED145"/>
                    <stop offset="1" stop-color="#616161"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </span>
            </div>
            <div>
                <span className=" flex   w-full h-[484px] bg-pinkish  border border-white/50 rounded-[25px]">
                    <div className="text-white mt-16 ml-8"> 
                        <h2 className="text-6xl ">Our Qualities</h2>
                    </div>
                </span>
            </div>
        </div>


        {/* Mind Behind Our Succes */}

        <div className="flex ml-60 justify-center items-center mt-40 pr-60">
            <div className="w-full h-[1000px] bg-white/15  rounded-[26px] flex flex-col items-center">
                <div className="flex gap-4">
                    <h1 className="font-aventa text-white text-7xl mt-16">The</h1>
                    <h1 className="font-aventa text-btn_hover text-7xl mt-16"> Great Minds</h1>
                </div>
                <div className="flex gap-4">
                    <h1 className="font-aventa text-white text-7xl ">Behind</h1>
                    <h1 className="font-aventa text-btn_hover text-7xl "> Our Succes</h1>
                </div>
                <div className="mt-20">
                    <SliderGallery />
                </div>
            </div>
        </div>


        <Carousel />
    </div>
    )
}