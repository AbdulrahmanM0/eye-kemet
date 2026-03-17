import Otp from "@/_ui/otp/Otp";

export default function OtpVerification({ searchParams }) {
  const data = {
    pagination: [
      {
        title: "Sign in",
        link: "/signin"
      },
      {
        title: "OTP Verification ",
        link: "#"
      },
    ],
  }
  return (
    <div>
      <Otp searchParams={searchParams} data={data}/>
    </div>
  );
}
