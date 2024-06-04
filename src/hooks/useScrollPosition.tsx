import {useState, useEffect} from 'react';

// https://lo-victoria.com/a-look-at-react-hooks-usescrollposition-for-parallax-scrolling-effects
export default function useScrollPosition(elementId = "root", scrollFactor = 0) {
    const [position, setPosition] = useState(0);  

    useEffect(() => {
        const element = document.getElementById(elementId);
        function onScroll() {
            const newPos = JSON.stringify({
                position: element.scrollTop * -1 * scrollFactor,
                isTop: element.scrollTop === 0,
                isBottom: element.scrollHeight - element.scrollTop === element.clientHeight
            });
            setPosition(newPos);
        }

        element.addEventListener("scroll", onScroll);
        return () => {
            element.removeEventListener("scroll", onScroll);
        };
    }, [elementId, scrollFactor]);

    return JSON.parse(position);
}