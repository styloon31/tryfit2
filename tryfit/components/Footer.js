import InstagramPostEmbed from "./instagram";

export default function Footer(){
    return(
        <footer className="text-white w-full h-auto bg-white/10  mt-28 ">
            <img src="/images/logo.png" className=" ml-36 pt-20 w-28"></img>
            <div className="grid  grid-cols-[1fr_1.8fr_0.4fr_0.5fr] ml-36">
                <div className="flex flex-col font-aventa">
                    <h1 className=" text-3xl ">TRYFIT FABRICS</h1>
                    <h1 className="text-2xl  underline mt-5">Contact Us</h1>
                    <h1 className=" mt-9 inline-flex gap-2 max-w-xs text-2xl">
                        <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
                        <path d="M12 16.15C10.8634 16.15 9.77327 15.7022 8.96954 14.9052C8.16582 14.1082 7.71429 13.0272 7.71429 11.9C7.71429 10.7728 8.16582 9.69183 8.96954 8.8948C9.77327 8.09777 10.8634 7.65 12 7.65C13.1366 7.65 14.2267 8.09777 15.0305 8.8948C15.8342 9.69183 16.2857 10.7728 16.2857 11.9C16.2857 12.4581 16.1749 13.0108 15.9595 13.5264C15.7441 14.042 15.4284 14.5106 15.0305 14.9052C14.6325 15.2999 14.16 15.6129 13.6401 15.8265C13.1201 16.0401 12.5628 16.15 12 16.15ZM12 0C8.8174 0 5.76515 1.25375 3.51472 3.48543C1.26428 5.71711 0 8.74392 0 11.9C0 20.825 12 34 12 34C12 34 24 20.825 24 11.9C24 8.74392 22.7357 5.71711 20.4853 3.48543C18.2348 1.25375 15.1826 0 12 0Z" fill="#F6F6F6"/>
                        </svg>
                        Winconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                    </h1>
                    <h1 className="inline-flex mt-9 gap-2 text-2xl items-center">
                        <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.4009 0.010534C30.2646 -0.00351133 30.1272 -0.00351133 29.9909 0.010534H1.99094C1.81148 0.0132991 1.63321 0.0402073 1.46094 0.0905339L15.9109 14.4805L30.4009 0.010534Z" fill="#F6F6F6"/>
                        <path d="M31.88 1.40234L17.32 15.9023C16.9453 16.2748 16.4384 16.4839 15.91 16.4839C15.3816 16.4839 14.8747 16.2748 14.5 15.9023L0.0700001 1.51234C0.0256394 1.67538 0.00211869 1.84339 0 2.01234V22.0123C0 22.5428 0.210714 23.0515 0.585786 23.4266C0.960859 23.8016 1.46957 24.0123 2 24.0123H30C30.5304 24.0123 31.0391 23.8016 31.4142 23.4266C31.7893 23.0515 32 22.5428 32 22.0123V2.01234C31.992 1.804 31.9516 1.59818 31.88 1.40234ZM3.37 22.0123H1.98V20.5823L9.25 13.3723L10.66 14.7823L3.37 22.0123ZM29.98 22.0123H28.58L21.29 14.7823L22.7 13.3723L29.97 20.5823L29.98 22.0123Z" fill="#F6F6F6"/>
                        </svg>
                        support@figma.com
                    </h1>
                    <h1 className="inline-flex mt-9 gap-2 text-2xl">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.3667 28C23.1259 28 19.9241 27.2938 16.7611 25.8813C13.5981 24.4689 10.7204 22.4659 8.12778 19.8722C5.53519 17.2796 3.53267 14.4019 2.12022 11.2389C0.707778 8.07593 0.00103704 4.87407 0 1.63333C0 1.16667 0.155555 0.777778 0.466667 0.466667C0.777778 0.155555 1.16667 0 1.63333 0H7.93333C8.2963 0 8.62037 0.123407 8.90556 0.370222C9.19074 0.617037 9.35926 0.908444 9.41111 1.24444L10.4222 6.68889C10.4741 7.1037 10.4611 7.4537 10.3833 7.73889C10.3056 8.02407 10.163 8.27037 9.95555 8.47778L6.18333 12.2889C6.70185 13.2481 7.31733 14.1747 8.02978 15.0687C8.74222 15.9626 9.52674 16.8249 10.3833 17.6556C11.187 18.4593 12.0296 19.2049 12.9111 19.8924C13.7926 20.58 14.7259 21.2084 15.7111 21.7778L19.3667 18.1222C19.6 17.8889 19.9049 17.7141 20.2813 17.598C20.6578 17.4819 21.027 17.4492 21.3889 17.5L26.7556 18.5889C27.1185 18.6926 27.4167 18.8808 27.65 19.1536C27.8833 19.4263 28 19.7307 28 20.0667V26.3667C28 26.8333 27.8444 27.2222 27.5333 27.5333C27.2222 27.8444 26.8333 28 26.3667 28Z" fill="#F6F6F6"/>
                        </svg>
                        +1 800 854-36-80
                    </h1>
                </div>
                <div className="flex flex-col justify-center font-aventa">
                    <h1 className="text-2xl  underline mt-5 justify-center text-center mb-5 ">Instagram</h1>
                    <div className="grid-container h-auto w-9">
                        <InstagramPostEmbed />
                    </div>
                </div>
                <div className="font-aventa justify-center mr-2">
                    <h1 className="text-2xl  underline mt-5 justify-center ">Our Location</h1>
                    <h1 className=" mt-7 text-xl">India</h1>
                    <h1 className=" text-xl mt-4">China</h1>
                </div>
                <div className="font-aventa">
                    <h1 className="text-2xl  underline mt-5 justify-center mr-3 ">COMPANY</h1>
                    <h1 className=" mt-7 text-xl">About Us</h1>
                    <h1 className=" mt-4 text-xl">Catalogue</h1>
                    <h1 className=" mt-4 text-xl">Teams</h1>
                    <h1 className=" mt-4 text-xl">Contacts Us</h1>
                </div>
            </div>
            <div className="flex justify-center mt-24">
                <h1 className=" text-2xl font-aventa max-w-2xl text-center">Subscribe to our news letter stay tuned for new web design and latest updates. Let's do it!</h1>
            </div>
            <div className=" p-4 flex justify-center items-center mt-20">
                <span className="text-white font-aventa font-semibold mr-6">Newsletter</span>
                <div className="bg-white p-1">
                <input
                type="email"
                placeholder="Enter your email Address"
                className="text-black mx-4 px-2 py-1 w-96 outline-none"/>
                <button className=" bg-black text-white px-6 py-3 hover:bg-gray-700 hover:text-white">
                Subscribe
                </button>
                </div>
            </div>
        </footer>
    )
}