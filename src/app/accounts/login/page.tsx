"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Link } from "next13-progressbar";
const schema = z.object({
  email: z.string().email(),
});
const defaultValues = {
  email: "",
};
const page = () => {
  const form = useForm<z.infer<typeof schema>>({
    //@ts-ignore
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });
  const submitHandler = (values: z.infer<typeof schema>) => {
    console.log(values);
  };
  return (
    <main>
      <section className="flex justify-between ">
        <div className="w-1/2 hidden lg:flex bg-gray-900 min-h-screen">
        </div>
        <div className="w-full lg:w-1/2 flex px-0 flex-col gap-2 max-w-[580px] mx-auto pt-20 md:pt-36 lg:pt-52">
          <h1 className="text-black font-extrabold text-2xl md:text-3xl lg:text-4xl py-4">
            Login to your account
          </h1>
          <h3 className="text-gray-500 text-xs  font-medium">
            Welcome back! Select a method to log in:
          </h3>
          <div className="flex items-center py-4 justify-between gap-4">
            <Button
              variant="outline"
              className="w-1/2 flex items-center justify-center gap-2  py-2 text-xs h-8"
            >
              <Image
                alt="github image"
                src="/accounts/github.webp"
                width={15}
                height={15}
              />
              <span>
                Github
              </span>
            </Button>
            <Button
              variant="outline"
              className="w-1/2 flex items-center justify-center gap-2  py-2 text-xs h-8"
            >
              <Image
                alt="google image"
                src="/accounts/google.webp"
                width={15}
                height={15}
              />
              <span>
                Google
              </span>
            </Button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <hr className="bg-muted-foreground !h-[1px] flex-1" />

            <span className="text-xs text-gray-500  ">
              Conttinue with email
            </span>
            <hr className="bg-muted-foreground !h-[1px] flex-1" />
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitHandler)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-xs">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="adam@email.com"
                        className="text-xs h-9"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="">
                <Button className="bg-gray-900 w-full text-xs font-bold py-px">
                  Sign in
                </Button>

                <div className="text-xs flex py-2  justify-center">
                  <p>
                    Don't have an account ?
                    <Button
                      type="button"
                      variant="link"
                      className="text-xs px-2"
                    >
                      <Link href="/accounts/signup">
                        Create an account
                      </Link>
                    </Button>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
};

export default page;
