import { getSessionToken } from "@/api/authinticated";
import Provider from "@/components/layout/Provider";

async function Authinticated({ children }) {
    const {customer} = await getSessionToken();

    return (
        <Provider customer={customer}>
            {children}
        </Provider>
    )
}

export default Authinticated