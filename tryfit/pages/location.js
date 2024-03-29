import Header from "@/components/Header";
import Link from "next/link";

export default function Location() {
    return (
        <div>
            <Header />
            <div className="flex flex-col justify-center text-center items-center mt-10 xl:mt-36 text-white ">
                <div className="flex flex-col xl:flex-row text-4xl xl:text-8xl gap-5 font-heavitas">
                    <h1>WHERE TO </h1>
                    <h1 className="text-btn_hover">FIND</h1>
                    <h1>US</h1>
                </div>
                <p className="text-lg xl:text-3xl max-w-[990px] pt-5 pb-10">From India to China, we bridge continents with innovative products. Experience our global manufacturing power</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10">
                <Link href={"/location/india"} className="ml-2 xl:ml-[160px] pr-2 xl:pr-[32px] pb-10">
                    <img src="/images/india.png" className="w-full rounded-t-[18px]"/>
                    <div className="flex justify-center p-2 bg-[#1A1B19] text-white font-aventa text-lg xl:text-[40px] gap-4">
                        <h2>We  Have </h2>
                        <h2 className="text-btn_hover">4 Branches</h2>
                        <h2>In India</h2>
                    </div>
                    <div className="bg-[#212121] text-lg xl:text-[20px] text-white pb-5 rounded-b-[18px]">
                        <p className="ml-4  font-aventa">India, We're Growing! Experience Our Expertise Across 4 Locations. Find Your Closest Branch For Exceptional Service</p>
                        <ul className="ml-[64px] mt-4 list-disc">
                            <li>Delhi - Dadadsaddad</li>
                            <li>Uttar Pradesh - Dadadsaddad</li>
                            <li>Punjab - Dadadsaddad</li>
                            <li>TamilNadu - Dadadsaddad</li>
                        </ul>
                    </div>
                </Link>
                <div className="pr-2 xl:pr-[180px] pb-10">
                    <img src="/images/china.png" className="w-full rounded-t-[18px]" />
                    <div className="flex justify-center p-2 bg-[#1A1B19] text-white font-aventa text-lg xl:text-[40px] gap-4">
                        <h2>We  Have </h2>
                        <h2 className="text-btn_hover">4 Branches</h2>
                        <h2>In China</h2>
                    </div>
                    <div className="bg-[#212121] text-lg xl:text-[20px] text-white pb-5 rounded-b-[18px]">
                        <p className="ml-4  font-aventa">China, We're Growing! Experience Our Expertise Across 4 Locations. Find Your Closest Branch For Exceptional Service</p>
                        <ul className="ml-[64px] pb-[80px] mt-4 list-disc">
                            <li>Shaoxing - Zhejiang</li>
                            {/* Add other branches in China */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
