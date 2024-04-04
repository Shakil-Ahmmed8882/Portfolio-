import { useEffect } from "react";

export const useScrollIntoView = ({reference, active}) => {
    

useEffect(() => {
    if (!active && reference.current && reference.current) {
        const element = reference.current
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}, [active]);


};
