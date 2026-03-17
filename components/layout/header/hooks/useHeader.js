import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

function useHeader() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const header = document.getElementById("site-header");

        if (header) {
            document.documentElement.style.setProperty(
                "--header-height",
                `${header.offsetHeight}px`
            );
        }

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isSticky = scrolled || pathname !== "/" || pathname !== "/signin";

    // handle open drawer 
    const handleDrawer = () => {
        setOpen(!open)
    }

    return {
        handleDrawer , isSticky , scrolled , setOpen , open
    }
}

export default useHeader