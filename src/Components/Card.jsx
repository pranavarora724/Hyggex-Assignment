import { MdLightbulbOutline } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { RiFullscreenFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import {cardData} from '../data/cardData';
import { useState } from "react";
// import { IoEllipseSharp } from "react-icons/io5";
import { IoMdVolumeOff } from "react-icons/io";


function Card()
{

    console.log("CardData");
    console.log(cardData);

    const [index , setIndex] = useState(0);
    const [clicked  , setIsClicked] = useState(false);
    const [sound , setSound] = useState(true);

    function clickHandler()
    {
        if(clicked == true)
            setIsClicked(false);
        else
            setIsClicked(true);
    }

    function soundHandler()
    {
        if(sound == true)
            setSound(false);
        else 
        setSound(true);
    }

    function updateValues(value)
    {
        setIndex(value);
    }

    function nextHandler()
    {
        if(index == 9)
            setIndex(0);
        else{
            let newIndex = index + 1;
            updateValues(newIndex);
        }

        setIsClicked(false);
    }
    function previousHandler()
    {
        if(index == 0)
            setIndex(0);
        else{
            let newIndex = index - 1;
            updateValues(newIndex);
        }
        setIsClicked(false);
    }

    function resetHandlder()
    {
        setIndex(0);
        setIsClicked(false);
    }

    return(
        <div>

            {/* Options */}
            <div className="max-w-[500px] w-[80%] flex flex-row gap-x-4 justify-around items-center font-semibold  h-10 mx-auto mt-8 ">
                <div className="flex flex-col items-center justify-between">
                    <div></div>
                    <div className="text-blue-900 cursor-pointer">Study</div>
                    <div className="bg-blue-900 px-7 py-[1px]"></div>
                </div>
                <div className="cursor-pointer">Quiz</div>
                <div className="cursor-pointer">Test</div>
                <div className="cursor-pointer">Game</div>
                <div className="cursor-pointer">Others</div>
            </div>


            {/* Card */}
            <div onClick={clickHandler} className={`max-w-[600px] w-[80%] h-[200px] sm:h-[300px]  mx-auto mt-8 rounded-3xl
                            flex justify-center items-center relative
                            [transform-style:preserve-3d]
                            
                           
                            ${(clicked == false)? (`bg-gradient-to-tr from-blue-400 to-blue-900`):(`bg-gradient-to-tr from-sky-600 to-sky-900 [transform:rotateY(180deg)]  transition-all duration-300 `)}
                            `} >
                {/* Card Text */}
                {
                    (clicked==false)?(<div className="text-white font-semibold text-xl sm:text-2xl ">{cardData[index].question}</div>):(<div className="text-white font-semibold text-xl sm:text-2xl [transform:rotateY(180deg)]">{cardData[index].answer}</div>)
                }
                <MdLightbulbOutline className={`absolute top-6 left-6 z-10 text-white md:text-2xl cursor-pointer ${(clicked==true)?(`[transform:rotateY(180deg)]`):(``)}`} />
                {
                    (sound == true)?(<IoMdVolumeHigh className={`absolute top-6 right-6 z-10 text-white md:text-2xl cursor-pointer ${(clicked==true)?(`[transform:rotateY(180deg)]`):(``)}`}/>):(<IoMdVolumeOff onClick={soundHandler} className={`absolute top-6 right-6 z-10 text-white md:text-2xl cursor-pointer ${(clicked==true)?(`[transform:rotateY(180deg)]`):(``)}`}/>)
                }
            </div>


            {/* Card Slider */}
            <div className="max-w-[500px] w-[80%] flex flex-row gap-x-4 justify-around items-center font-semibold  h-10 mx-auto mt-8 ">
            
            {/* Retry button */}
            <FaArrowRotateRight onClick={resetHandlder} className="text-blue-900 hover:rotate-180 transition-all duration-400 cursor-pointer md:text-2xl"/>
            
            {/* Mid part */}
            <div className="flex flex-row justify-around gap-x-6 items-center">
                {
                    // IF index == 0 hide previous button
                    (index!=0)?(<div onClick={previousHandler} className=" bg-gradient-to-tr from-blue-600 to-blue-900 rounded-full p-2 text-white font-semibold cursor-pointer"><FaAngleLeft /></div>):(<div></div>)
                }
                <div className="text-blue-900 font-bold">{index+1}/10</div>
                <div onClick={nextHandler} className=" bg-gradient-to-tr from-blue-600 to-blue-900 rounded-full p-2 text-white font-semibold cursor-pointer"><FaAngleRight /></div>
            </div>

            {/* Full Screen */}
            <RiFullscreenFill  className="text-blue-900 hover:scale-x-110 transition-all duration-200 cursor-pointer md:text-2xl"/>
            </div>


          {/* Card Footer */}
            <div className="max-w-[1200px] w-[80%] mt-4 mx-auto flex flex-row justify-between">

                {/* Logo */}
                <div className="flex flex-row gap-x-2">
                    {/* Hyggex Image */}
                    <div className="p-3 rounded-full shadow-[-10px_-10px_30px_0px_rgba(0,0,139,0.1),_10px_10px_30px_0px_rgba(0,0,139,0.1)]"><img className="w-8 h-8 md:w-12 md:h-12" src='pics/Hyggex Image.PNG'></img></div>

                    {/* Hyggex Text */}
                    <div className="flex flex-col gap-y-2">
                        <div className="text-xs text-slate-600">Published By</div>
                        <div><img className="w-20 md:w-28" src='pics/Hyggex Text.PNG'></img></div>
                        <div></div>
                    </div>
                </div>

                {/* Create Flashcard */}
                <div className="flex flex-row gap-x-2 items-center">
                    {/* Add sign */}
                    <div className="flex bg-blue-900 rounded-full p-1 cursor-pointer"><FaPlus className=" text-white font-bold
                    hover:rotate-180 transition-all duration-500 text-sm md:text-2xl"/></div>
                    {/* Text */}
                    <div className="text-blue-900 text-[14px] md:text-xl font-semibold">Create Flashcard</div>
                </div>
            </div>


        </div>
    )
}

export default Card;