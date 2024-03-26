import Grid2 from "./Grid-2";
import Grid1 from "./Grid1";

export default function WhatWeDo() {
    return (
        <div className="text-white ml-4 sm:ml-10 md:ml-20 lg:ml-40">
            <h1 className="text-btn_hover font-heavitas text-4xl sm:text-5xl md:text-6xl mt-12 sm:mt-24 md:mt-36">What We Do</h1>
            <p className="md:w-auto lg:w-1/2 text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, incidunt? Ipsam, pariatur quo. Voluptatem cum eum debitis eveniet</p>
            <Grid1 />
            <Grid2 />
        </div>
    );
}
