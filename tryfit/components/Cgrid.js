export default function Cgrid(){
    return(
        <div className="grid xl:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.2fr_0.8fr]  ml-8 pr-8 sm:ml-8 md:ml-20 lg:ml-20 xl:ml-40 mt-12 gap-6">
            <div className="lg:pr-0 md:pr-20">
                <span className=" flex flex-col h-[894px] bg-light_background rounded-[25px]" >
                    <h1 className="font-aventa text-dark_green lg:text-5xl md:text-4xl text-4xl xl:text-6xl mt-16 xl:ml-16 sm:ml-16 md:ml-16 ml-8">
                        <span className="border-b-2 border-underline">GET IN TOUCH</span>
                    </h1>
                    <form className=" flex flex-col xl:ml-16 sm:ml-16 md:ml-16 ml-8 mt-24 font-aventa">
                        <div className=" flex flex-col gap-10 w-full pr-10">
                            <input type="text" placeholder="Name *" className="flex input input-placeholder w-full text-dark_green "/>
                            <input type="text" placeholder="Last Name *" className="flex input input-placeholder w-full text-dark_green "/>
                            <input type="text" placeholder="Phone Number *" className="flex input input-placeholder w-full  text-dark_green "/>
                            <input type="text" placeholder="Email *" className="flex input input-placeholder w-full text-dark_green "/>
                            <input type="text" placeholder="Message *" className="flex input input-placeholder w-full text-dark_green pb-24"/>
                            
                        </div>
                        <button className=" mt-16 w-52 items-center text-center rounded-[17px] py-3.5 bg-dark_green text-4xl">SEND</button>
                    </form>     
                </span>
            </div>
            <div className="grid grif-rows-[0.7fr_1.3fr] lg:pr-20 xl:pr-40 md:pr-20 gap-8">
                <div>
                    <span className="flex flex-col h-[345px] rounded-[25px] bg-light_pink_packground">
                        <h1 className=" text-dark_green md:text-3xl lg:text-2xl xl:text-3xl ml-8 mt-16 font-aventa">
                            <span className="border-b-2 border-dark_green">STELLAR SERVICE</span>
                        </h1>
                        <p className="text-dark_green font-abessinica md:text-[20px] lg:text-[14px] xl:text-[16px] ml-2 p-5">Expect a prompt and personalized response from our team. We value your time and aim to provide the best assistance possible. Our commitment is to address your queries swiftly and effectively.</p>
                    </span>
                </div>
                <div>
                    <span className="flex flex-col h-[511px] rounded-[25px] bg-light_pink_packground gap-4">
                        <h1 className=" text-dark_green md:text-3xl lg:text-2xl xl:text-3xl ml-8 mt-16 font-aventa">
                            <span className="border-b-2 border-dark_green">Connect Us Further</span>
                        </h1>
                        <p className="text-dark_green ml-4 pl-5 mt-12 text-2xl font-light">Reach Us Over Phone</p>
                        <p className="text-dark_green ml-4 pl-5 md:text-3xl lg:text-2xl xl:text-3xl font-semibold">+91 9999999999</p>
                        <p className="text-dark_green ml-4 pl-5 pr-10 lg:text-xl md:text-2xl  xl:text-2xl font-light">Feel Free To Drop Us A Line Using our Dedicated Email Address:</p>
                        <p className="text-dark_green ml-4 pl-5 mt-2 md:text-3xl lg:text-2xl xl:text-3xl font-semibold">fabric123@Gmail.com</p>
                    </span>
                </div>
            </div>
        </div>
    )
}