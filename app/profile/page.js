import PersonalForm from "@/_ui/profile/content/personalinfo/utilies/PersonalForm";
import handleProfile from "@/api/proflie/Profile";

export default async function Profile() {
  const profile = await handleProfile();

  return (
    <PersonalForm profile={profile?.customer} />
  );
}
