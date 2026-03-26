"use client";

import { useEffect, useRef } from "react";
import { DialogDemo } from "@/components/items/dialog/Dialog";

function DialogStreem({ handleStreem, openStreem }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;

    // Start camera when dialog opens
    if (openStreem) {
      const startCamera = async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        } catch (err) {
          console.error("Failed to access camera:", err);
        }
      };

      startCamera();
    }

    // Stop camera when dialog closes
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [openStreem]);

  return (
    <DialogDemo open={openStreem} setOpen={handleStreem} customClass={"w-fit z-[99992]"}>
      <div className="mx-auto flex flex-col gap-clamp-24 relative p-clamp-48">
        {/* Close button */}
        <button
          onClick={handleStreem}
          className="absolute top-0 right-clamp-20 -translate-y-[50%] p-clamp-10 cursor-pointer bg-wd500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-24 h-clamp-24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7929 6.79289C16.1834 6.40237 16.8164 6.40237 17.207 6.79289C17.5975 7.18342 17.5975 7.81643 17.207 8.20696L13.414 11.9999L17.207 15.7929C17.5975 16.1834 17.5975 16.8164 17.207 17.207C16.8164 17.5975 16.1834 17.5975 15.7929 17.207L11.9999 13.414L8.20696 17.207C7.81643 17.5975 7.18342 17.5975 6.79289 17.207C6.40237 16.8164 6.40237 16.1834 6.79289 15.7929L10.5859 11.9999L6.79289 8.20696C6.40237 7.81643 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81643 6.40237 8.20696 6.79289L11.9999 10.5859L15.7929 6.79289Z"
              fill="#D44040"
            />
          </svg>
        </button>

        {/* Video stream */}
        <div className="text-center flex flex-col gap-clamp-24 items-center">
          <video
            ref={videoRef}
            className="rounded-md w-full max-w-[400px] h-auto bg-black"
            autoPlay
            playsInline
            muted
          />

          <div className="text-light400 text-clamp-18 leading-[0.7]">Scanning....</div>

          {/* Performance bar (optional) */}
          <div className="flex items-center gap-clamp-12 w-full max-w-[400px]">
            <div className="h-[8px] rounded-[4px] flex-1 bg-gray200">
              {/* You can dynamically update this div width based on progress */}
            </div>

            <div className="text-light400 text-clamp-14 rounded-[4px]">
              {/* {uploadperformance}% */}
            </div>
          </div>
        </div>
      </div>
    </DialogDemo>
  );
}

export default DialogStreem;