"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { Controller } from "react-hook-form"


export function InputOTPPattern({ control }) {
  return (
    <Controller
      name="otp"
      control={control}
      rules={{ required: "OTP is required" }}
      render={({ field }) => (
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          value={field.value}
          onChange={field.onChange}
        >
          <InputOTPGroup className="gap-clamp-12 w-fit mx-auto text-gray200">
            {[...Array(6)].map((_, i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="
                  w-12 h-12 text-lg border border-gray400 rounded-[2px]
                  flex items-center justify-center bg-wd700
                  data-[active=true]:ring-2
                  data-[active=true]:ring-gold100
                  data-[active=true]:outline-none
                "
                placeholder="0"
                render={({ char }) => (
                  <span className={char ? "text-black" : "text-gray-400"}>
                    {char || "#"}
                  </span>
                )}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      )}
    />
  )
}
