import Cgrid from "./Cgrid";
import Carousel from "./carousel";
import Carousel2 from "./carousel2";

export default function Connect(){
    return(
        <div className="text-white ">
            <div className=" flex justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heavitas gap-4 mt-36 ">
                <h1>LET'S</h1>
                <h1 className="text-btn_hover">CONNECT</h1>
                <h1>AND</h1>
            </div>
            <div className=" flex justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heavitas gap-4">
                <h1>IGNITE</h1>
                <h1 className="text-btn_hover">SUCCESS</h1>
            </div>
            <Cgrid />
            <Carousel2 />
            <Carousel />
        </div>
    )
}