import {useState, useEffect} from 'react';

export default function useScrollVisible(elementId = "root", threshold = 0.5) {
    const [visible, setVisible] = useState(0);  
    
    useEffect(() => {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const element = entry.target;
                    const parent = element.parentNode;                    
                    const index = Array.prototype.indexOf.call(parent.children, element);
                    setVisible(index);
                }
            });
        }, { threshold: [threshold] });
        
        const elementsElement = document.getElementById(elementId);
        const childElements = elementsElement.children;
        for (let i = 0; i < childElements.length; i++) {
            observer.observe(childElements[i]);
        }
        return () => {
            for (let i = 0; i < childElements.length; i++) {
                observer.disconnect(childElements[i]);
            }
        };
    });

    return visible;
}