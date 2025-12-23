import { useState, useEffect } from 'react';

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 640);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 640px)');

        const handleChange = (e) => setIsMobile(e.matches);

        // Escucha cambios en el tamaño
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup al desmontar
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isMobile;
};
