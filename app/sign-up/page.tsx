import { ContainerDiv } from "@/components/ContainerDiv";
import Scroll from "@/components/Scroll";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <Scroll />
      <ContainerDiv divId="firstName" particleId="1">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <label className="text-white">Enter your Full name</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#email"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="email" particleId="2">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">Enter your email</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#personalPhoneNumber"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="personalPhoneNumber" particleId="3">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">
              Enter your Personal phone number*
            </label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#personalWhatsApp"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="personalWhatsApp" particleId="4">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">Enter your Personal WhatsApp*</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#companyName"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="companyName" particleId="5">
        <div className="md:h-screen  flex flex-col justify-center items-center">
          <div>
            <label className="text-white">Enter your Company name *</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#companyWhatsAppNumber"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>

      <ContainerDiv divId="companyWhatsAppNumber" particleId="7">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">
              Enter your Company WhatsApp number*
            </label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#companyInstagram"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="companyInstagram" particleId="8">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">Enter your Company Instagram</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#companyFacebookPage"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="companyFacebookPage" particleId="9">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">
              Enter your Company Facebook page /I&#39;d
            </label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#telegramChannel"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="telegramChannel" particleId="10">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">Enter your Telegram Channel*</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <Link
              className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              href="#companyWebsite"
            >
              Next
            </Link>
          </div>
        </div>
      </ContainerDiv>
      <ContainerDiv divId="companyWebsite" particleId="11">
        <div className="h-screen flex flex-col justify-center items-center">
          <div>
            <label className="text-white">Enter your Company Website</label>
            <input
              className="w-full text-white bg-transparent border-b   py-2 px-4 mb-6 leading-tight focus:outline-none focus:border-blue-500"
              type="text"
              defaultValue=""
            />
            <button className="justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
              Submit
            </button>
          </div>
        </div>
      </ContainerDiv>
    </>
  );
};

export default Page;
