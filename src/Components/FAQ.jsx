import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


function FAQ(props)
{

    const[isVisible , setIsVisible] = useState(false);

    function clickHandler()
    {
        if(isVisible == true)
            setIsVisible(false);
        else
        setIsVisible(true);
    }

    return(
        <div className="max-w-[600px] w-[100%] text-slate-600 text-xs sm:text-[14px]  my-4 p-4 border rounded-lg border-blue-400 transition-all duration-700 ">
            {/* Question */}
            <div onClick={clickHandler} className="flex flex-row justify-between cursor-pointer items-center">
                <div className="font-semibold">{props.question}</div>
                {
                    (isVisible == false ? (<FaAngleDown/>):(<FaAngleUp />)               )
                }
            </div>
            {/* Answer */}
            {
                (isVisible == true ? (<div className="text-blue-800 mt-4 font-semibold">{props.answer}</div>):(<div></div>))
            }
        </div>
    )
}

export default FAQ;