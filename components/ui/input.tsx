import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full mt-8 h1-bold font-thin placeholder:h1-bold md:placeholder:font-thin text-white bg-transparent border-b   py-2  mb-6 md:leading-tight focus:outline-none focus:border-light-500 max-sm:text-xs max-sm:placeholder:text-xs ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
