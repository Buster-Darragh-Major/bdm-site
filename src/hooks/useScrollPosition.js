import {useState, useEffect} from 'react';

// https://lo-victoria.com/a-look-at-react-hooks-usescrollposition-for-parallax-scrolling-effects
export default function useScrollPosition(elementId = "root", scrollFactor = 0) {
    const [position, setPosition] = useState(0);  

    useEffect(() => {
        var element = document.getElementById(elementId);
        function onScroll() {
            setPosition(element.scrollTop * -1);
        }

        element.addEventListener("scroll", onScroll);
        return () => {
            element.removeEventListener("scroll", onScroll);
        };
    }, [elementId, scrollFactor]);

    return position * scrollFactor;
}