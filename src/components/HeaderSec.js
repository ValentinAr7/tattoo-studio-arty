import React, { useState, useEffect } from 'react';
import DesktopComponent from './DesktopComponent';
import MobileComponent from './MobileComponent';
const HeaderSec = () => {
 

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    return (
        <div>
            {screenWidth < 768 ? <MobileComponent /> : <DesktopComponent />}
        </div>
    );

}

export default HeaderSec;
