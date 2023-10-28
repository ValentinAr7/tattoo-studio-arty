import React from "react";
import { useState } from "react";
import { FaqData } from "../data";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
// import variants
import { fadeIn } from '../variants';



export function Faq() {
    const [FaqDataState, setFaqDataState] = useState(FaqData);
  
    const toggleFold = (index) => {
      setFaqDataState(
        FaqDataState.map((q, i) =>
          i === index ? { ...q, fold: !q.fold } : q
        )
      );
    };
  
    return (
      <motion.div
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0 }}
      className='flex-1'
    >

      <section id="faq" className="section bg-[#F9F9F9]">
        <div className="container mx-auto">
          <h2 className="h2 max-w-none">Как да запазим час?</h2>
          {FaqDataState.map((q, i) => (
            <div
              className=" mb-4 align-middle space-x-7 border-b border-solid border-gray-300 button[aria-expanded='true'"
              key={i}
              >
              
              <div className="flex space-x-5 mb-2" >
              <p className=" text-2xl hover:cursor-pointer hover:font-semibold" onClick={() => toggleFold(i)}>{q.title}</p>

              
              <span>
                <button onClick={() => toggleFold(i)}>
                  {q.fold ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </span>
              </div>
              
              {q.fold && <p className=" pb-12 pt-4 text-justify">{q.answer}</p>}
            </div>
          ))}

        </div>

      </section>
      </motion.div>


    );
  }