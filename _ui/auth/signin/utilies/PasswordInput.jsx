"use client"
import { useState } from "react";

export default function PasswordInput() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      
      <input
        type={show ? "text" : "password"}
        placeholder="Password*"
        className="w-full input pr-12 rounded-lg 
                   transition-all duration-200"
        name="password"
      />

      {/* Eye Icon */}
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-colors duration-200 ${
            show ? "fill-black" : "fill-gray-400"
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4C17.116 4 21.197 7.194 22.932 11.636a1 1 0 010 .728C21.197 16.806 17.116 20 12 20S2.803 16.806 1.068 12.364a1 1 0 010-.728C2.803 7.194 6.884 4 12 4zm0 5a3 3 0 100 6 3 3 0 000-6z"
          />
        </svg>
      </button>

    </div>
  );
}