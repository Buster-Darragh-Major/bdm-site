import {useState, useEffect} from 'react';

// https://lo-victoria.com/a-look-at-react-hooks-usescrollposition-for-parallax-scrolling-effects
export default function useScrollPosition(scrollFactor = 0) {
    const [position, setPosition] = useState(0);  

    function onScroll() {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return position * scrollFactor;
}