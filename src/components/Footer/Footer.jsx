import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black    text-white px-10 py-16">
      {/* Top Section */}
      <div className=" md:w-[93%] m-auto ">


        <div className=" flex justify-between flex-wrap gap-10">

          {/* Column 1 */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Sable Credit</h2>
            <p className="text-gray-300">Sable ONE Credit</p>
            <Link to="#" className=" hover:underline">
              Credit Score <span className="text-teal-400">Coming Soon</span>
            </Link>

            <h2 className="text-3xl font-semibold mt-3 mb-3">Sable Debit</h2>

            <h2 className="text-3xl font-semibold mt-3 mb-3 ">App</h2>

            <h2 className="text-3xl font-semibold mt-3 mb-3">Learn</h2>
            <Link to="#" className="block text-gray-300 hover:underline">
              FAQs
            </Link>
            <Link to="#" className="block text-gray-300 hover:underline">
              About Sable
            </Link>
          </div>

          {/* Column 2 */}
          <div className=" flex flex-col justify-between">
            <div className="">
              <h2 className="text-3xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-300 text-xl">Email: help@sablecard.com</p>
              <p className="text-gray-300 text-xl">Location: New York, NY</p>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mt-10 text-xl">
              <FaInstagram className="" />
              <FaTwitter className="" />
              <FaFacebook className="" />
              <FaYoutube className="" />
              <FaTiktok className="" />
            </div>


          </div>

          {/* Column 3 — Brand Name */}
          <div className="flex md:justify-end">
            <h1 className="text-7xl font-bold">Sable.</h1>
          </div>

        </div>



        <div className="text-right text-gray-400  text-sm">
          © Sable Money Inc, all rights reserved.
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Terms Section */}
        <div className="text-gray-500 text-xs space-y-3 leading-relaxed">
          <p>
            Privacy policy | Terms and conditions
          </p>

          <p>
            *Banking services provided by Coastal Community Bank, Member FDIC, pursuant
            to license by Mastercard International Inc. Sable account is
            FDIC-insured up to $250,000 per depositor through Coastal Community Bank,
            Member FDIC.
          </p>

          <p>
            **If you are not a U.S. citizen, you can apply with your passport and U.S.
            Visa. Please note: you must submit an SSN once you receive one. If you
            are a U.S. citizen, SSN is required to open a bank account.
          </p>

          <p>
            *** Double cashback bonus (through 12/2022)
          </p>

          <p>
            Please see www.sablecard.com/terms-and-conditions#creditterm for terms
            and conditions. Some exclusions apply.
          </p>

          <p>
            Please see www.sablecard.com/terms-and-conditions for terms and conditions.
          </p>

          <p>
            This benefit is provided by MasterCard. Benefits are subject to terms,
            conditions and limitations, including coverage limits. Please see the
            terms and conditions.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
