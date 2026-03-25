"use client";

import UseEdit from "../../hookss/UseEdit";

function Form({ name, email, birthday, gender }) {
  const { onSubmit, register, handleSubmit, errors, isSubmitting, control } =
    UseEdit({ name, email, birthday, gender });

  return (
    <form
      className="flex flex-col gap-clamp-20"
      data-aos="fade-up"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name */}
      <div>
        <input
          className="input"
          placeholder="Full name *"
          type="text"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          className="input"
          placeholder="Email *"
          type="text"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Birthday */}
      <div>
        <input
          type="date"
          style={{ colorScheme: "dark" }}
          className="input text-gray-200"
          {...register("birthday")}
        />
        {errors.birthday && (
          <p className="text-red-500 text-sm mt-1">{errors.birthday.message}</p>
        )}
      </div>

      {/* Gender */}
      <div className="flex gap-clamp-48">
        {["male", "female"].map((g) => (
          <label
            key={g}
            htmlFor={g}
            className="flex items-center gap-clamp-16 cursor-pointer select-none"
          >
            <input
              type="radio"
              id={g}
              value={g}
              {...register("gender")}
              className="peer hidden"
            />
            <div className="h-clamp-24 w-clamp-24 border border-gray300 rounded flex items-center justify-center transition-all duration-200 peer-checked:bg-gold100 peer-checked:border-black">
              <svg
                className="transition-opacity duration-200 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6678 3.66781C11.0583 3.27745 11.6914 3.27735 12.0818 3.66781C12.472 4.0583 12.4721 4.69141 12.0818 5.08187L6.53983 10.6239C6.35231 10.8113 6.09793 10.9168 5.8328 10.9168C5.56767 10.9168 5.31329 10.8113 5.12577 10.6239L2.50077 7.99886C2.11034 7.60842 2.1105 6.97533 2.50077 6.5848C2.8913 6.19429 3.52432 6.19426 3.91483 6.5848L5.8328 8.50277L10.6678 3.66781Z"
                  fill="#292929"
                />
              </svg>
            </div>
            <p className="text-clamp-18 text-balance leading-[0.7]">{g === "male" ? "Male" : "Female"}</p>
          </label>
        ))}
        {errors.gender && (
          <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="w-fit mt-clamp-30">
        <button
          type="submit"
          className="secondary-btn whitespace-nowrap shrink-0 !w-fit"
          disabled={isSubmitting}
        >
          Update changes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-clamp-14 h-clamp-14"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path d="M14.707 13.4805H12.707V3.41406L1.41406 14.707L0 13.293L11.293 2H1.22656V0H13.707C14.2593 0 14.707 0.447715 14.707 1V13.4805Z" fill="#FEFEFE" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Form;