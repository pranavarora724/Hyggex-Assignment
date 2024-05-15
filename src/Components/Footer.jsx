import Card from "./Card";
import { faqs } from "../data/faqs";
import FAQ from "./FAQ";

function Footer()
{

    console.log("Printing FAQS");
    console.log(faqs);

    return(
        <div className="max-w-[1200px] w-[80%] mt-8 mx-auto ">
            <div className="text-3xl text-blue-800 font-bold">FAQ</div>

            {/* FAQ Container */}
            <div className="mt-8">
                {
                    faqs.map((faq , index)=>{
                        return(
                            <FAQ key={index} question={faq.question} answer = {faq.answer}></FAQ>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer;