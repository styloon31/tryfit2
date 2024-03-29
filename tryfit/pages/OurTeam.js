import Header from "@/components/Header";
import SliderGallery from "@/components/SliderGallery";
import Carousel from "@/components/carousel";
import Timeline from "@/components/verticalTimeline";
import Link from "next/link";
import { useState } from "react";

export default function OurTeam(){

    const [playing, setPlaying] = useState(false);
    const[title,setTitle] = useState("Who we are?");
    const[heading,setHeading] = useState("Legacy And Transition: From Bhatia Traders To Try Fit Fabrics");
    const[desc,setDescription] =  useState("Formerly known as “Bhatia Traders” Try fit fabrics was founded in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the company was handed over to his son Mr. Deepak Bhatia and the brand was renamed as “Try fit Fabrics”.");
    const handleIframeClick = () => {
        if (playing) {
          // If video is playing, pause it
          setPlaying(false);
        } else {
          // If video is paused, redirect to YouTube
          window.location.href = 'https://youtu.be/OoJJvspNEf0?si=qZGX27awae4l2BBp';
        }
      };
      

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
            <div className="video-container">
                <div className="iframe-wrapper">
                    <iframe
                    className="w-[1408px] h-[500px] rounded-xl"
                    src="/videos/youtube.mp4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    muted
                    onClick={handleIframeClick} // Handle click on the iframe
                    ></iframe>
                </div>
                </div>
            </div>


            {/* Dive in Our World    */}
            <div className="flex flex-col text-white font-heavitas mt-48 text-center">
            <h1 className=" text-8xl">Dive in Our</h1>
            <h1 className=" text-8xl text-btn_hover  ">World.</h1>
            </div>

            <div className="grid grid-cols-[1fr_1fr] text-white_yellow ml-60 pr-60 mt-28 gap-12">
                <div className=" bg-white/10 rounded-[25px]">
                    <div className=" mt-16 ml-4">
                        <span className=" font-ABeeZee bg-black py-1 px-4 rounded-[8px] text-2xl">
                            {title}
                        </span>
                        <h2 className=" font-gilroy text-4xl mt-11">{heading}</h2>
                        <p className=" font-ABeeZee mt-16 text-3xl pr-4">{desc}</p>     
                    </div>
                </div>
                <div className="grid grid-rows-[1fr_1fr_1fr]">
                    <div className="font-ABeeZee border border-white border-x-0">
                        <button className="flex flex-col" onClick={() => {setTitle('Who we are?'), setHeading('Legacy And Transition: From Bhatia Traders To Try Fit Fabrics'),setDescription('Formerly known as “Bhatia Traders” Try fit fabrics was founded in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the company was handed over to his son Mr. Deepak Bhatia and the brand was renamed as “Try fit Fabrics”.')}} >
                            <h1 className=" font-ABeeZee text-btn_hover text-4xl mt-6">Who we are?</h1>
                            <p className=" text-left mt-5 pb-12">Formerly known as “Bhatia Traders” Try fit fabrics was founded in 1990 by Shri Kewal Kumar Bhatia. In due course of time, the company was handed over to his son Mr. Deepak Bhatia and the brand was renamed as “Try fit Fabrics”.</p>
                        </button>
                    </div>
                    <div>
                    <button className="flex flex-col no-underline" onClick={() => {setTitle('What we do?'), setHeading('Empowering Confidence Through Quality Fabrics'),setDescription('Try fit Fabrics, a premier fabric manufacturer, caters to diverse needs with quality textiles. Our customer-centric approach ensures satisfaction at every touchpoint. With four branches in India and expansion plans underway, accessibility is our priority. Renowned for our Sportswear fabrics, blending innovation and tradition, we empower global confidence.')}} >
                        <div className="font-ABeeZee border border-white border-x-0">
                            <h1 className="text-left font-ABeeZee text-btn_hover text-4xl mt-6">What we do?</h1>
                            <p className="text-left mt-5 pb-12">Try fit Fabrics is a fabric manufacturing brand that deals in all kinds of fabrics. We’re a customer-centric brand and always aim to make our customers happy.We’re renowned for distinctive new-age Sportswear fabrics. With a private manufacturing unit and warehouse in China.</p>
                        </div>
                    </button>
                    </div>
                    <div>
                    <button className="flex flex-col no-underline" onClick={() => {setTitle('Our Qualities'), setHeading('Uncompromising Commitment To Quality'),setDescription('At Try fit Fabrics, our commitment to excellence is unmatched. With a 100% Satisfaction Guarantee and rigorous Quality Control System, we ensure top-tier textiles for our global clientele. Backed by a highly professional team and expert fabric specialists, we redefine industry standards, empowering confidence worldwide.')}} >
                        <div className="font-ABeeZee border border-white border-x-0">
                            <h1 className=" text-left font-ABeeZee text-btn_hover text-4xl mt-6">Our Qualities</h1>
                            <p className=" text-left mt-5 pb-12">More than just fabric, we offer [list of qualities your fabrics possess, e.g., softness, durability, vibrancy]. Our commitment to quality ensures you'll find the perfect material to bring your creative vision to life, all while experiencing the exceptional touch and performance you deserve.</p>
                        </div>
                    </button>
                    </div>
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

        <Timeline />
    </div>
    )
}