"use client";
import React, { useEffect, useState } from "react";
import { ContainerDiv } from "../ContainerDiv";
import NextButton from "../ui/NextButton";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UserSchema } from "@/lib/validation";
import { createUser } from "@/lib/action/user.action";
// import { Widget } from "@uploadcare/react-widget";

import Image from "next/image";
import * as LR from "@uploadcare/blocks";
import router from "next/router";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

LR.registerBlocks(LR);

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [companyPhotoUrl, setCompanyPhotoUrl] = useState<string>();
  const [uploadcareData, setUploadcareData] = useState<string>("");
  const router = useRouter();
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      fullName: "",
      email: "",
      photo: "",
      designation: "",
      personalPhoneNumber: "",
      personalWhatsapp: "",
      companyName: "",
      companyInstagram: "",
      facebookPageId: "",
      companyWebsite: "",
      companyPhoto: "",
    },
  });
  useEffect(() => {
    // Check if document is defined (browser environment)
    document.body.style.overflow = "hidden";
    if (typeof document !== "undefined") {
      const ctx = document.querySelector("#profipic") as HTMLElement | null;

      if (ctx) {
        ctx.addEventListener("data-output", (e) => {
          // Use type assertion to let TypeScript know it's a CustomEvent
          const customEvent = e as CustomEvent;

          if (customEvent.detail) {
            console.log(customEvent.detail, "profile pic");
            setUploadcareData(customEvent.detail[0]?.cdnUrl);
          }
        });
      }
    }
    if (typeof document !== "undefined") {
      const ctx2 = document.querySelector("#companylogo") as HTMLElement | null;

      if (ctx2) {
        ctx2.addEventListener("data-output", (e) => {
          // Use type assertion to let TypeScript know it's a CustomEvent
          const customEvent2 = e as CustomEvent;

          console.log(customEvent2, "companylogo event triggered");
          if (customEvent2.detail) {
            console.log(customEvent2.detail, "companylogo");
            setCompanyPhotoUrl(customEvent2.detail[0]?.cdnUrl);
          }
        });
      }
    }
  }, []);
  console.log(companyPhotoUrl, "company url");
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UserSchema>) {
    setIsSubmitting(true);
    try {
      await createUser({
        fullName: values.fullName,
        email: values.email,
        photo: uploadcareData,
        companyPhoto: companyPhotoUrl,
        personalPhoneNumber: values.personalPhoneNumber,
        personalWhatsapp: values.personalWhatsapp,
        companyName: values.companyName,
        companyInstagram: values.companyInstagram,
        aboutCompany: values.aboutCompany,
        facebookPageId: values.facebookPageId,
        companyWebsite: values.companyWebsite,
        designation: values.designation,
      });
      router.push("/user");
      toast.success("registration successful");
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      toast.warning("registration failed");
      console.log(values);
    }
    console.log(values);
  }
  // console.log(form.getValues, "kislay");
  return (
    <div className="no-scrollbar example-element">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ContainerDiv divId="firstName" particleId="1">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="ma">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <NextButton text="next" lnk="photo" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="photo" particleId="01">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              {uploadcareData && (
                <>
                  <div className="max-w-2xl  mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    <div className="rounded-t-lg h-32 overflow-hidden">
                      <Image
                        height={500}
                        width={500}
                        className="object-cover object-top w-full"
                        src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                        alt="Mountain"
                      />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                      <Image
                        className="rounded-full h-32 w-32 border border-primary-500 object-cover"
                        src={uploadcareData ? uploadcareData : ""}
                        alt="profile pic"
                        height={500}
                        width={400}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-gray-500">Your image preview</p>
                    </div>

                    <div className="p-4 border-t mx-8 mt-2"></div>
                  </div>
                </>
              )}
              <div>
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> profile pic</FormLabel>
                      <FormControl className="">
                        <>
                          <lr-config
                            ctx-name="profipic"
                            pubkey="c691bad6580f6ff10d39"
                            maxLocalFileSizeBytes={10000000}
                            multiple={false}
                            imgOnly={true}
                            sourceList="local, url, camera"
                          ></lr-config>
                          <lr-file-uploader-regular
                            css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.5/web/lr-file-uploader-regular.min.css"
                            ctx-name="profipic"
                            class="my-config"
                          ></lr-file-uploader-regular>
                          <lr-data-output
                            ctx-name="profipic"
                            use-event
                          ></lr-data-output>
                          <lr-upload-ctx-provider
                            id="profipic"
                            ctx-name="profipic"
                          ></lr-upload-ctx-provider>
                        </>
                      </FormControl>
                      <FormDescription>
                        This is your public display Picture.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2">
                <NextButton text="previous" lnk="firstName" />
                <NextButton text="next" lnk="companyName" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="companyName" particleId="2">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="ma">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public Company name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="photo" />
                  <NextButton text="next" lnk="designation" />
                </div>
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="designation" particleId="2">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="ma">
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>your designation</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        what is your position at your company.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="companyName" />
                  <NextButton text="next" lnk="companyPhoto" />
                </div>
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="companyPhoto" particleId="010">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              {companyPhotoUrl && (
                <>
                  <div className="max-w-2xl  mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                    <div className="rounded-t-lg h-32 overflow-hidden">
                      <Image
                        height={500}
                        width={500}
                        className="object-cover object-top w-full"
                        src={
                          companyPhotoUrl
                            ? `${companyPhotoUrl}`
                            : "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                        }
                        alt="Mountain"
                      />
                    </div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                      <Image
                        className="rounded-full h-32 w-32 border border-primary-500 object-cover"
                        src={uploadcareData ? uploadcareData : ""}
                        alt="profile pic"
                        height={500}
                        width={400}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <p className="text-gray-500">Your image preview</p>
                    </div>

                    <div className="p-4 border-t mx-8 mt-2"></div>
                  </div>
                </>
              )}
              <div>
                <FormField
                  control={form.control}
                  name="companyPhoto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>company logo</FormLabel>
                      <FormControl className="">
                        <>
                          <lr-config
                            ctx-name="companylogo"
                            pubkey="c691bad6580f6ff10d39"
                            maxLocalFileSizeBytes={10000000}
                            multiple={false}
                            imgOnly={true}
                            sourceList="local, url, camera"
                          ></lr-config>
                          <lr-file-uploader-regular
                            css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.5/web/lr-file-uploader-regular.min.css"
                            ctx-name="companylogo"
                            class="my-config"
                          ></lr-file-uploader-regular>
                          <lr-data-output
                            ctx-name="companylogo"
                            use-event
                          ></lr-data-output>
                          <lr-upload-ctx-provider
                            id="companylogo"
                            ctx-name="companylogo"
                          ></lr-upload-ctx-provider>
                        </>
                      </FormControl>
                      <FormDescription>
                        This is your public Company logo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-2">
                <NextButton text="previous" lnk="designation" />
                <NextButton text="next" lnk="aboutCompany" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="aboutCompany" particleId="aboutCompany">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="max-sm:mx-4 md:w-[70vw]">
                <FormField
                  control={form.control}
                  name="aboutCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>about Company</FormLabel>
                      <FormControl className="">
                        <Textarea
                          rows={10}
                          placeholder="write about your company in 10 to 500 words"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write about your company in 10 to 500 words.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="companyPhoto" />
                  <NextButton text="next" lnk="email" />
                </div>
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="email" particleId="2">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display email.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="aboutCompany" />
                  <NextButton text="next" lnk="personalPhoneNumber" />
                </div>
              </div>
            </div>
          </ContainerDiv>

          <ContainerDiv divId="personalPhoneNumber" particleId="3">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="personalPhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile No.</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          pattern="[0-9]*"
                          placeholder="Type your answer"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public Mobile no.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="email" />
                  <NextButton text="next" lnk="personalWhatsApp" />
                </div>
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="personalWhatsApp" particleId="4">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="personalWhatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Whatsapp no.</FormLabel>
                      <FormControl className="">
                        <Input
                          type="number"
                          pattern="[0-9]*"
                          placeholder="Type your answer"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public Whatsapp no.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="personalPhoneNumber" />
                  <NextButton text="next" lnk="companyInstagram" />
                </div>
              </div>
            </div>
          </ContainerDiv>

          <ContainerDiv divId="companyInstagram" particleId="8">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="companyInstagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public Instagram.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="personalWhatsApp" />
                  <NextButton text="next" lnk="companyFacebookPage" />
                </div>
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="companyFacebookPage" particleId="9">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="facebookPageId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook Id</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public Facebook Id(paste url id&#39;s url
                        not user id).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="companyInstagram" />
                  <NextButton text="next" lnk="companyWebsite" />
                </div>
              </div>
            </div>
          </ContainerDiv>

          <ContainerDiv divId="companyWebsite" particleId="11">
            <div className="h-screen grid  grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Website</FormLabel>
                      <FormControl className="">
                        <Input placeholder="Type your answer" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public Company Website.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-2">
                  <NextButton text="previous" lnk="companyFacebookPage" />
                  <Button
                    className="primary-gradient z-50 w-fit !text-light-900"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        {" "}
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting ....
                      </>
                    ) : (
                      <>Submit</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </ContainerDiv>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
