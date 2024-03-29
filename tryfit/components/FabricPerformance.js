import Swal from "sweetalert2";
import Carousel from "./carousel";
import Modal from "./Modal";
import { useState } from "react";
import Carousel1 from "./carousel1";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FabricPerformance() {
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-12">
                <a href="#SuccessStories" className="flex items-center btn_shadow btn_green py-1 px-6 sm:px-12 md:px-24 rounded-[20px] mt-8 sm:mt-16 md:mt-32 space-x-2 ">
                    <svg width="24" height="24" viewBox="0 0 49 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-flex item-center shrink-0">
                        <circle cx="12" cy="13.5" r="12" fill="#D9D9D9"/>
                        <circle cx="24" cy="13.5" r="12.5" fill="#D9D9D9" stroke="#334C1D"/>
                        <circle cx="36" cy="13.5" r="12.5" fill="#D9D9D9" stroke="#334C1D"/>
                    </svg>
                    <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">What Others Say About Us</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-btn_hover mt-3 font-heavitas">FABRIC.</h1>
                </div>
                <div className="inline-flex justify-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-heavitas">PERFORMANCE</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heavitas font-bold text-btn_hover">.</h1>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-btn_hover font-heavitas">DELIVERED.</h1>
                </div>
                <div className="text-white text-sm sm:text-sm md:text-xl lg:text-2xl font-thin text-center">
                    <div className="inline-flex font-aventa">
                        <p className="mr-2">"</p>
                        <p className="text-btn_hover">TryFit Fabrics</p>
                        <p>:</p>
                        <p>Engineered For Champions, Designed</p>
                    </div>
                    <div className="font-aventa">
                        <p>For Comfort. Elevate Your Game with Every Thread."</p>
                    </div>
                </div>
                <Link href="/Contact" className="bg-btn_hover font-aventa_bold font-bold py-2 px-4 sm:py-3.5 sm:px-10 rounded-[13px] mt-8 md:mt-16">Approach Us</Link>
            </div>
            <Carousel1 />
        </div>
    );
}
