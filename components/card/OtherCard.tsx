"use client";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import { RWebShare } from "react-web-share";

interface Props {
  data: any;
}
import { IoCallOutline } from "react-icons/io5";
import DetailBadge from "../DetailBadge";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { SlSocialFacebook } from "react-icons/sl";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Folder, Share } from "lucide-react";
import { toJpeg } from "html-to-image";

const OtherCard = ({ data }: Props) => {
  const pathname = usePathname();
  {
    /* 
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(`${pathname}`);
      toast.info("Profile link Copied to clipboard!");
    } catch (err: any) {
      console.error("Unable to copy to clipboard.", err);
      toast("Unable to copy to clipboard");
    }
  };
*/
  }
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toJpeg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "DigiCard.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <div className="no-scrollbar  " ref={ref}>
      <div
        className="rounded-lg border  bg-card text-card-foreground shadow-sm w-full max-w-sm mx-auto"
        data-v0-t="card"
      >
        <div className=" flex flex-col items-center space-y-2">
          <div className="h-48 lg:rounded-t-lg bg-shade_red dark:bg-primary w-full"></div>
          <div className=" absolute    top-12 z-10 bg-white lg:rounded-none shadow-lg rounded-2xl w-80 lg:w-96 h-48 dark:bg-gray-800">
            <div className="grid grid-cols-2  content-center ">
              <Image
                height={500}
                width={500}
                alt="profile pic"
                src={data.photo}
                className="rounded-s-2xl lg:rounded-none  object-cover  h-48"
              />
              <div className="flex flex-col  lg:rounded-none rounded-e-2xl justify-start dark:bg-black px-5 ">
                <div className="my-auto">
                  <p className="text-xl text-wrap font-medium text-gray-900  dark:text-light-900">
                    {data.fullName}
                  </p>
                  <p className="text-xs pt-2 dark:text-light-700 text-gray-700">
                    {data.designation}
                  </p>
                  <p className="text-xs dark:text-light-700  text-gray-700">
                    {data.companyName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#292929] ">
          <div className="text-clip text-wrap   max-w-xs justify-items-center pt-12 mx-auto ">
            <div className="flex gap-2 ">
              <Button onClick={onButtonClick} className="bg-shade_red ">
                <Folder className="mr-2 h-4 w-4" />
                Save Card
              </Button>

              <RWebShare
                data={{
                  url: `http://localhost:3000/${pathname}`,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="inline-flex h-10 px-4 py-2 rounded border border-current  text-sm font-medium text-light-900 dark:text-primary-500  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500">
                  <Share className="mr-2 my-auto h-4 w-4" />
                  <span className="my-auto">Share Card</span>
                </button>
              </RWebShare>
            </div>
            <p className="paragraph-bold overflow-scroll  text-gray-50 text-wrap  my-2">
              {data.aboutCompany}
            </p>
          </div>
          <h3 className="h2-bold text-light-900 my-4">Social</h3>
          <div className="grid grid-cols-6 z-50   capitalize paragraph-regular gap-2 content-center ">
            <DetailBadge
              detailLink={`tel:${data.personalPhoneNumber}`}
              icon={
                <IoCallOutline className="m-auto dark:text-primary-100  h-5 w-5 " />
              }
            />
            <DetailBadge
              detailLink={`https://wa.me/${data.personalWhatsapp}`}
              icon={<FaWhatsapp className="m-auto  h-5 w-5 " />}
            />

            <DetailBadge
              detailLink={`https://www.instagram.com/${data.companyInstagram}`}
              icon={<FaInstagram className="m-auto  h-5 w-5 " />}
            />
            <DetailBadge
              detailLink={`${data.facebookPageId}`}
              icon={<SlSocialFacebook className="m-auto  h-5 w-5 " />}
            />

            <div className="">
              <DetailBadge
                detailLink={`mailto:${data.email}`}
                icon={<MdOutlineMail className="m-auto  h-5 w-5 " />}
              />
            </div>
            <div className="">
              <DetailBadge
                detailLink={`${data.companyWebsite}`}
                icon={<TbWorldWww className="m-auto  h-5 w-5 " />}
              />
            </div>
          </div>
        </div>
        {/* <div className="items-center p-4 flex justify-center">
          <button className="inline-flex bg-primary-500 text-primary-100 dark:text-dark-500 dark:bg-primary-100 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Contact
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default OtherCard;
