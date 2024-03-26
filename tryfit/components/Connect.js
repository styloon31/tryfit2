import Cgrid from "./Cgrid";

export default function Connect(){
    return(
        <div className="text-white">
            <div className=" flex justify-center text-6xl font-heavitas gap-4 mt-36">
                <h1>LET'S</h1>
                <h1 className="text-btn_hover">CONNECT</h1>
                <h1>AND</h1>
            </div>
            <div className=" flex justify-center text-6xl font-heavitas gap-4">
                <h1>IGNITE</h1>
                <h1 className="text-btn_hover">SUCCESS</h1>
            </div>
            <Cgrid />
            <div>
                <img src="/images/rectangle.png" className="flex w-screen mt-40 h-10"></img>
            </div>
            <div>
                <img src="/images/rectangle.png" className=" w-screen mt-20"></img>
            </div>
        </div>
    )
}