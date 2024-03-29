import { Collapse } from "react-collapse";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";

export default function Accordian({open , toggle, title, branch, map , image , name, address ,contact }){

    return(
        <div className="text-white mt-3 pt-3">
            <div className="bg-white/15 py-[25px] px-[50px] flex justify-between  cursor-pointer rounded-[8px]" onClick={toggle}>
                <p className="text-[22px] font-abessinica ">{title}</p>
                <div className="text-[30px] ml-4">
                    {open ? <BsArrowDownSquareFill /> :  <BsArrowRightSquareFill />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-[#1A1B19] mt-5 pt-3 px-[50px] pb-[20px] rounded-[13px] ">
                    <div className="flex text-[40px] font-aventa mt-14">
                        <h1 className="text-btn_hover">Branch -</h1>
                        <h1>{branch}</h1> 
                    </div>
                    <iframe src={map} className="w-[754px] h-[278px]" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="grid grid-cols-[1fr_1fr]">
                            <div>
                                <h1 className="text-[40px] font-aventa text-btn_hover mt-16">Get In Touch At</h1>
                                <ul className="ml-[64px] pb-[80px] mt-4 text-[22px] list-disc w-[400px] font-aventa">
                                <li>{address}</li>
                                </ul>
                                <div>
                                    <ul className="ml-[64px] pb-[80px] list-disc w-[400px] font-aventa text-[22px]">
                                        <li className="flex gap-4">
                                            <h1 className="text-btn_hover">Contact No. :</h1>
                                            <h1 className="underline">{contact}</h1>
                                        </li>
                                        <li className="flex gap-4">
                                            <h1 className="text-btn_hover">Email :</h1>
                                            <h1 className="underline">info@tryfitfabrics.com</h1>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" mt-[250px] ">
                                <div className="flex items-center">
                                    <div className="flex flex-col">
                                        <h1 className="bg-white font-aventa text-[32px] text-black rounded-l-[10px] px-6 p-1">{name}</h1>
                                        <h1 className="font-aventa text-btn_hover ml-6">Branch Manager</h1>
                                    </div>
                                        <img src={image} className="h-[180px] w-[180px] border-4 rounded-[47px]  border-white"></img>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </Collapse>
        </div>
    )
}