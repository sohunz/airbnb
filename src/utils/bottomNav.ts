import { SetStateAction, useRef, useState } from "react";

const bottomNav = () => {
    const [activeTab, setActiveTab] = useState(0);
    const navRef = useRef(null);

    const handleTabClick = (index: SetStateAction<number>) => {
        setActiveTab(index);
    };

    const scrollLeft = () => {
        const nav: any = navRef.current;
        const scrollAmount = -1000;
        const targetScroll = nav.scrollLeft + scrollAmount;
        smoothScroll(nav, targetScroll);
    };

    const scrollRight = () => {
        const nav: any = navRef.current;
        const scrollAmount = 1000;
        const targetScroll = nav.scrollLeft + scrollAmount;
        smoothScroll(nav, targetScroll);
    };

    const smoothScroll = (
        element: { scrollLeft: number } | null,
        targetScroll: number
    ) => {
        const startTime = performance.now();
        const duration = 1000;

        const scroll = () => {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = easeOutQuad(progress);
            element.scrollLeft =
                element.scrollLeft +
                (targetScroll - element.scrollLeft) * easedProgress;

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        };

        scroll();
    };
    const easeOutQuad = (t: number) => {
        return t * (2 - t);
    };

    return { handleTabClick, scrollLeft, scrollRight, activeTab, navRef };
};

export default bottomNav;
