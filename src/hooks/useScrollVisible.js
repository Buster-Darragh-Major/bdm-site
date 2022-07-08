import {useState, useEffect} from 'react';

export default function useScrollVisible(scrollElementId = "root", elementsElementid = "root") {
    const [visible, setVisible] = useState(0);  
    
    useEffect(() => {
        const scrollElement = document.getElementById(scrollElementId);
        const elementsElement = document.getElementById(elementsElementid);
        const childElements = elementsElement.children;    
        function onScroll() {
            var curVisible = 0;
            for (var i = 0; i < childElements.length; i++) {
                const rect = childElements[i].getBoundingClientRect();
                const elemTop = rect.top;
                curVisible = (elemTop >= 0) ? i : curVisible;
            }
            console.log(curVisible);
            setVisible(curVisible);
        }

        scrollElement.addEventListener("scroll", onScroll);
        return () => {
            scrollElement.removeEventListener("scroll", onScroll);
        };
    });

    return visible;
}