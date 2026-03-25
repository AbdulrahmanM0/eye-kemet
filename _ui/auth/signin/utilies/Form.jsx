"use client";
import SigninBTN from "./SigninBTN";
import UseSubmit from "../hooks/UseSubmit";
import PhoneInput from "./PhoneInput";
export default function Form() {
  const { onSubmit, register, handleSubmit, errors, isSubmitting , control } = UseSubmit()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-clamp-48">
      <div className="flex flex-col gap-clamp-24">
        {/* Phone input */}
        <div>
          <PhoneInput control={control} />
          {errors.phone && (
            <p className="text-red100 text-clamp-18 mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Sign in button */}
        <div>
          <SigninBTN loading={isSubmitting} />
        </div>
      </div>
    </form>
  );
}