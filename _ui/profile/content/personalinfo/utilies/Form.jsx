"use client";

import UseEdit from "../../hookss/UseEdit";

function ErrorMsg({ message }) {
  if (!message) return null;
  return (
    <p className="text-red100 text-clamp-12 mt-1 flex items-center gap-1 animate-[slideDown_0.25s_ease-out] [@keyframes_slideDown]{0%{transform:translateY(-10px);opacity:0}100%{transform:translateY(0);opacity:1}}">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8S2 14.418 2 10 5.582 2 10 2s8 3.582 8 8zm-8-3a1 1 0 00-1 1v2a1 1 0 002 0V8a1 1 0 00-1-1zm0 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );
}
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
        <ErrorMsg message={errors.name?.message} />
      </div>

      {/* Email */}
      <div>
        <input
          className="input"
          placeholder="Email *"
          type="text"
          {...register("email")}
        />
        <ErrorMsg message={errors.email?.message} />
      </div>

      {/* Birthday */}
      <div>
        <input
          type="date"
          style={{ colorScheme: "dark" }}
          className="input text-gray-200"
          {...register("birthday")}
        />
        <ErrorMsg message={errors.birthday?.message} />
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
        <ErrorMsg message={errors.gender?.message} />
      </div>

      {/* Submit Button */}
      <div className="w-fit mt-clamp-30">
        <button
          type="submit"
          className="secondary-btn whitespace-nowrap shrink-0 !w-fit"
          disabled={isSubmitting}
        >
          Update changes

          {isSubmitting ?
            <svg xmlns="http://www.w3.org/2000/svg" className=' animate-spin text-balance fill-balance w-clamp-24 h-clamp-24' width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 17.5227 17.5228 21.9999 12 21.9999C6.47715 21.9999 2 17.5227 2 11.9999C2 9.98412 2.59925 8.10896 3.625 6.53894L2.29297 5.20691C2.00697 4.92091 1.92139 4.49074 2.07617 4.11707C2.23098 3.74346 2.59558 3.49988 3 3.49988H7C7.55228 3.49988 8 3.94759 8 4.49988V8.49988C8 8.90429 7.75641 9.26889 7.38281 9.42371C7.00914 9.57849 6.57897 9.49291 6.29297 9.20691L5.07715 7.99109C4.39285 9.17015 4 10.5387 4 11.9999C4 16.4182 7.58172 19.9999 12 19.9999C16.4183 19.9999 20 16.4182 20 11.9999C20 7.5816 16.4183 3.99988 12 3.99988C11.4477 3.99988 11 3.55216 11 2.99988C11 2.44759 11.4477 1.99988 12 1.99988Z" />
            </svg> :
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
          }
        </button>
      </div>
    </form>
  );
}

export default Form;