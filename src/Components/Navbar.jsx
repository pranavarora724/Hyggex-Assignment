import { IoReorderThree } from "react-icons/io5";


function Navbar()
{
    return(
        <div>
            {/* Outer div */}
            <div className="max-w-[1200px] w-[80%] mt-4 mx-auto">
                
                {/* Inner div */}
                <div className="flex flex-row justify-between items-center">
                    
                    {/* Image  */}
                    <div className=" cursor-pointer">
                        <img src="pics/HyggeX Logo .png" ></img>
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex flex-row gap-x-8 ">
                        <div className="py-2 cursor-pointer">Home</div>
                        <div className="py-2 cursor-pointer">Flashcard</div>
                        <div className="py-2 cursor-pointer">Contact</div>
                        <div className="py-2 cursor-pointer">FAQ</div>
                        <div className="py-2 bg-blue-800 rounded-full px-8 text-white cursor-pointer">Login</div>
                    </div>

                    {/* Three Lines */}
                    <div className="block md:hidden group relative">
                    <IoReorderThree className="text-blue-900 text-3xl"/>
                    
                    <div className="hidden bg-white group-hover:block group-hover:absolute z-10  -left-6">
                        <div className="pr-4 hover:cursor-pointer hover:bg-slate-200">Home </div>
                        <div className="pr-4 hover:cursor-pointer hover:bg-slate-200">Flashcard</div>
                        <div className="pr-4 hover:cursor-pointer hover:bg-slate-200">Contact</div>
                        <div className="pr-4 hover:cursor-pointer hover:bg-slate-200">FAQ</div>
                        <div className="pr-4 hover:cursor-pointer hover:bg-slate-200">Login</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;