import SavedAddress from '@/_ui/profile/content/savedAddress/SavedAddress'
import handleAllAddress from '@/api/proflie/AllAddress';

async function Profile() {
    const address = await handleAllAddress({method:"get"});
    return (
        <div>
            <SavedAddress address={address} />
        </div>
    )
}

export default Profile