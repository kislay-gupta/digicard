"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  data: any;
}
import { IoCallOutline } from "react-icons/io5";
import DetailBadge from "../DetailBadge";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { FaRegShareSquare } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const UserCard = ({ data }: Props) => {
  const pathname = usePathname();
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(`localhost:3000${pathname}`);
      toast.info("Profile link Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      toast("Copy to clipboard failed.");
    }
  };
  return (
    <>
      <div className="">
        <div
          className="rounded-lg border  bg-card text-card-foreground shadow-sm w-full max-w-sm mx-auto"
          data-v0-t="card"
        >
          <div className=" flex flex-col items-center space-y-2">
            <div className="h-24  w-full">
              {data.photo ? (
                <div className="flex-center">
                  <Image
                    src={data.companyPhoto}
                    width={500}
                    height={500}
                    alt="profile pic"
                    className="object-cover md:rounded-t-lg"
                  />
                </div>
              ) : (
                <p> {data.companyName}</p>
              )}
            </div>
            <div className="relative top-16 flex  overflow-hidden  ">
              <div className="flex h-full w-full items-center   justify-center   ">
                <Image
                  src={data.photo}
                  width={100}
                  height={100}
                  alt="profile pic"
                  className="rounded-full h-32 w-32 border border-primary-500 object-cover"
                />
                <button
                  onClick={handleCopyClick}
                  className="fixed max-sm:top-64 lg:bottom-0 max-sm:right-2 z-50 "
                >
                  <FaRegShareSquare />
                </button>
              </div>
            </div>
            <div className="text-center">
              <h3 className="whitespace-nowrap mt-16 h2-bold text-light900_dark300">
                {data.name}
              </h3>
              <p className="paragraph-semibold capitalize text-light-400_light500">
                {data.designation}@{data.companyName}
              </p>
            </div>
          </div>
          <div className="p-6 grid grid-cols-2  paragraph-regular gap-2 content-center place-content-evenly">
            <DetailBadge
              detail={data.personalPhoneNumber}
              detailLink={`tel:${data.personalPhoneNumber}`}
              icon={
                <IoCallOutline className="m-auto dark:text-primary-100  h-5 w-5 " />
              }
            />
            <DetailBadge
              detail={data.personalWhatsapp}
              detailLink={`https://wa.me/${data.personalWhatsapp}`}
              icon={<FaWhatsapp className="m-auto  h-5 w-5 " />}
            />

            <DetailBadge
              detail={data.companyInstagram}
              detailLink={`https://www.instagram.com/${data.companyInstagram}`}
              icon={<FaInstagram className="m-auto  h-5 w-5 " />}
            />
            <DetailBadge
              detail={"kislay"}
              detailLink={`${data.facebookPageId}`}
              icon={<SlSocialFacebook className="m-auto  h-5 w-5 " />}
            />
            <div className="col-span-full gap-2 justify-items-center mx-auto">
              <div className="py-2">
                <DetailBadge
                  detail={data.email}
                  detailLink={`mailto:${data.email}`}
                  icon={<MdOutlineMail className="m-auto  h-5 w-5 " />}
                />
              </div>
              <div>
                <DetailBadge
                  detail={data.companyWebsite}
                  detailLink={`${data.companyWebsite}`}
                  icon={<TbWorldWww className="m-auto  h-5 w-5 " />}
                />
              </div>
            </div>
            <div className="col-span-full mt-11 mx-auto ">
              <span className="ml-2 h2-bold text-gray-900 dark:text-gray-50">
                About {data.companyName}
              </span>
              <p className="paragraph-regular my-5">{data.aboutCompany}</p>
            </div>
          </div>
          <div className="items-center p-6 flex justify-center">
            <button className="inline-flex bg-primary-500 text-primary-100 dark:text-dark-500 dark:bg-primary-100 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
