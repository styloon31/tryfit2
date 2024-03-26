import Sgrid1 from "./Sgrid1";
import Sgrid2 from "./Sgrid2";

export default function SuccesStories(){
    return(
        <div className="text-white ml-40">
            <div className="inline-flex gap-4  font-heavitas text-6xl/[64px] mt-36 ">
              <h1>OUR</h1> <h1 className="text-btn_hover">SUCESS STORIES</h1>
            </div>
            <h1 className=" text-4xl font-heavitas">FROM OUR SATISFIED CLIENTS</h1>
            <Sgrid1 />
            <Sgrid2 />
        </div>
    )
}