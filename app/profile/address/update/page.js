import BuildAddress from "@/_ui/profile/content/savedAddress/BuildAddress"

function Profile() {
    const head = {
        head: "Update Address",
        slogan: "Update Address data below"
    }
    return (
        <div>
            <BuildAddress {...head}/>
        </div>
    )
}

export default Profile