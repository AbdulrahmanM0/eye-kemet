import UserName from "@/_ui/username/UserName";

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
      <UserName searchParams={searchParams} data={data}/>
    </div>
  );
}
