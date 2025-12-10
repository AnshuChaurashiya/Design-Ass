import React from "react";
import CreditCard from "../assets/CompareCard.png";
import DebitCard from "../assets/sableDebit.png";
import { FaCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const CardCompare = () => {
  const cards = [
    { img: CreditCard, name: "Sable Secured Credit & Debit Card" },
    { img: DebitCard, name: "Sable Debit Card" },
  ];

  const tableData = [
    {
      title: "No monthly fees or minimum balance",
      col1: true,
      col2: true,
    },
    {
      title: "Deposits FDIC insured up to $250,000",
      col1: true,
      col2: true,
    },
    {
      title: "Rewards, cash back & card perks",
      col1: true,
      col2: true,
    },
    {
      title: "Send checks & transfer money for free",
      col1: true,
      col2: true,
    },
    {
      title: "Build credit history from Day 1",
      col1: true,
      col2: false,
      lock2: true,
    },
    {
      title: "No credit check required for sign up",
      col1: true,
      col2: false,
      lock2: true,
    },
  ];

  return (
    <>
      <div className="w-full mt-20 text-center text-white bg-black py-20 p-4 md:p-0">
        {/* Heading */}
        <h1 className="text-2xl lg:text-8xl md:text-5xl mb-10"> Compare Sable . Compare Sable </h1>

        <div className="flex justify-center mb-10 lg:ml-60 gap-10">
          {cards.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img
                src={item.img}
                alt={item.name}
                className="w-60 h-32 object-contain"
              />
              <h2 className="mt-4 lg:text-2xl text-xl text-[#10ACA2FF] text-start lg:w-[60%]">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
        {/* Comparison Table */}
        <table className="md:w-[90%] mx-auto border-collapse">
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-t border-[#1f1f1f] text-xl py-10 h-20"
              >
                <td className="text-left py-5 w-[40%] text-sx">{row.title}</td>

                <td className="text-center py-5 w-[30%]">
                  {row.col1 ? <FaCheck className="text-white text-xl" /> : null}
                </td>

                {/* Column 2 */}
                <td className="text-center py-5 w-[40%]">
                  {row.col2 ? (
                    <FaCheck className="text-white text-xl" />
                  ) : row.lock2 ? (
                    <FaLock className="text-gray-500 text-xl" />
                  ) : null}
                </td>
              </tr>
            ))}

            {/* Pricing Row */}
            <tr className="border-t border-[#1f1f1f] h-24 text-3xl=">
              <td className="text-left py-6">Cost per year</td>

              <td className="text-start text-4xl">$0<span className=" text-xs text-gray-700">/ Year</span></td>

              <td className="text-start text-4xl">$0<span className=" text-xs text-gray-700">/ Year</span></td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap md:ml-56 md:mt-16 md:gap-40 gap-5">
          <button className="px-10 py-4 bg-[#10ACA2] text-black font-semibold rounded-full text-lg">
            GET CREDIT & DEBIT
          </button>
          <button className="px-10 py-4 bg-[#10ACA2] text-black font-semibold rounded-full text-lg">
            GET DEBIT
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCompare;
