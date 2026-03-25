import BuildAddress from "@/_ui/profile/content/savedAddress/BuildAddress"
import handleAllAddress from "@/api/proflie/AllAddress";

async function Profile({ searchParams }) {
    const id = searchParams?.id;
    const alladdress = await handleAllAddress({ method: "get" });
    const address = alladdress.data.find(item => item.id === id)
    const method = id ? "put" : "post";
    const head = id
        ? {
            head: "Update Address",
            slogan: "Update Address data below",
        }
        : {
            head: "Add new Address",
            slogan: "Fill the requirement data below",
        };

    return (
        <div>
            <BuildAddress {...head} address={address} method={method}/>
        </div>
    )
}

export default Profile