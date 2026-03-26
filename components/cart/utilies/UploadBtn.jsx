import { useRef } from "react";

export default function UploadButton({ handlePicture }) {
  const inputRef = useRef(null);

  const handleClick = () => inputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) handlePicture(file);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <button
        onClick={handleClick}
        className="w-full px-clamp-28 py-clamp-16 justify-center flex items-center gap-clamp-10 border border-gold100 text-clamp-18 text-light400 leading-[0.7] hover:bg-gold100 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-clamp-24 h-clamp-24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 19C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20C5 19.4477 5.44772 19 6 19H18ZM12 3C12.5523 3 13 3.44772 13 4V11H17C17.4044 11 17.769 11.2436 17.9238 11.6172C18.0786 11.9909 17.993 12.421 17.707 12.707L12.707 17.707C12.3165 18.0976 11.6835 18.0976 11.293 17.707L6.29297 12.707C6.00697 12.421 5.92139 11.9909 6.07617 11.6172C6.23098 11.2436 6.59558 11 7 11H11V4C11 3.44772 11.4477 3 12 3Z"
            fill="#FEFEFE"
          />
        </svg>
        Upload Image
      </button>
    </>
  );
}