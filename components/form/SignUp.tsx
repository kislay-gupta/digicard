"use client";
import React, { useState } from "react";
import { ContainerDiv } from "../ContainerDiv";
import NextButton from "../ui/NextButton";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

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

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      fullName: "",
      email: "",
      photo: "",
      personalPhoneNumber: "",
      personalWhatsapp: "",
      companyName: "",
      companyPhoneNumber: "",
      companyWhatsappNumber: "",
      companyInstagram: "",
      facebookPageId: "",
      telegramChannel: "",
      companyWebsite: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof UserSchema>) {
    setIsSubmitting(true);
    try {
      await createUser({
        fullName: values.fullName,
        email: values.email,
        photo: values.photo,
        personalPhoneNumber: values.personalPhoneNumber,
        personalWhatsapp: values.personalWhatsapp,
        companyName: values.companyName,
        companyPhoneNumber: values.companyPhoneNumber,
        companyWhatsappNumber: values.companyWhatsappNumber,
        companyInstagram: values.companyInstagram,
        facebookPageId: values.facebookPageId,
        telegramChannel: values.telegramChannel,
        companyWebsite: values.companyWebsite,
      });
      router.push("/");
    } catch (error) {}
    console.log(values);
  }
  return (
    <div className="">
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
                <NextButton lnk="email" />
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
                <NextButton lnk="personalPhoneNumber" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="firstName" particleId="01">
            <div className="h-screen  grid grid-col-1 justify-items-stretch content-center ">
              <div className="ma">
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>photo Name</FormLabel>
                      <FormControl className="">
                        <div>
                          <lr-config
                            ctx-name="my-uploader"
                            pubkey="736a13ce3cead6b559ab"
                            img-only="true"
                            max-local-file-size-bytes="524288000"
                            use-cloud-image-editor="true"
                            source-list="local, url, camera, dropbox"
                          ></lr-config>

                          <lr-file-uploader-regular
                            ctx-name="my-uploader"
                            css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.30.9/web/lr-file-uploader-regular.min.css"
                          ></lr-file-uploader-regular>
                        </div>
                        {/* <Widget
                          publicKey="736a13ce3cead6b559ab"
                          onChange={(info) => field.onChange(info.cdnUrl)}
                        /> */}
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <NextButton lnk="email" />
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
                      <FormLabel>
                        Mobile No.
                        <br className="md:hidden" />
                        (personal)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          pattern="[0-9]*"
                          placeholder="Type your answer"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <NextButton lnk="personalWhatsApp" />
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
                      <FormLabel>
                        Whatsapp no.
                        <br className="md:hidden" />
                        (personal)
                      </FormLabel>
                      <FormControl className="">
                        <Input
                          type="number"
                          pattern="[0-9]*"
                          placeholder="Type your answer"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <NextButton lnk="companyName" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="companyName" particleId="5">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch ">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>company Name</FormLabel>
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
                <NextButton lnk="companyWhatsAppNumber" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="companyWhatsAppNumber" particleId="7">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="companyPhoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Mobile No.
                        <br className="md:hidden" />
                        (company)
                      </FormLabel>
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
                <NextButton lnk="companyInstagram" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="companyWhatsAppNumber" particleId="7">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="companyWhatsappNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        WhatsApp No.
                        <br className="md:hidden" />
                        (company)
                      </FormLabel>
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
                <NextButton lnk="companyInstagram" />
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
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <NextButton lnk="companyFacebookPage" />
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
                      <FormLabel>Facebook Page</FormLabel>
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
                <NextButton lnk="telegramChannel" />
              </div>
            </div>
          </ContainerDiv>
          <ContainerDiv divId="telegramChannel" particleId="10">
            <div className="h-screen grid grid-cols-1 content-center justify-items-stretch">
              <div className="max-sm:mx-4">
                <FormField
                  control={form.control}
                  name="telegramChannel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>telegram Channel</FormLabel>
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
                <NextButton lnk="companyWebsite" />
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
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="primary-gradient z-50 w-fit !text-light-900"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <>Submitting ....</> : <>Submit</>}
                </Button>
              </div>
            </div>
          </ContainerDiv>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
