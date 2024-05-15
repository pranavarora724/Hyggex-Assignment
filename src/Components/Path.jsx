import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";


function Path()
{
    return(
        <div>
            <div className="max-w-[1200px] w-[80%] mt-8 text-[10px] font-semibold sm:text-sm  mx-auto flex flex-row items-center  text-gray-500  gap-x-2">
            <GoHome className="text-lg sm:text-xl"/>
            <FaAngleRight />
            <div>Flashcard</div>
            <FaAngleRight />
            <div>Mathematics</div>
            <FaAngleRight />
            <div className="text-blue-900 font-semibold ">Relation And Function</div>
            </div>

            <div className="max-w-[1200px] w-[80%] mt-8 mx-auto text-blue-800 sm:text-2xl font-semibold">Relation and Functions ( Mathematics ) </div>
        </div>
    )
}

export default Path;