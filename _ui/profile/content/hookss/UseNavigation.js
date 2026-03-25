import { useState } from "react"

function UseNavigation() {
    const [active, setActive] = useState(1);

    const hadleChangeTab = (id) => {
        setActive(id)
    }

    return {active,hadleChangeTab}
}

export default UseNavigation