import React, { useState, useEffect } from 'react';
import NavMobile from './NavMobile';
import { TiThMenu } from 'react-icons/ti';


function MobileComponent(props) {
    const [isActive, setIsActive] = useState(false);
    const [navMobile, setNavMobile] = useState(false);

    // scroll event
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
        });
    });


    return (
        <header className={`${isActive ? 'h-[50px] lg:h-[55px] shadow-lg' : 'h-[120px] lg:h-[150px]'} bg-transparent fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}>

            <div
                onClick={() => setNavMobile(!navMobile)}
                className='xl:hidden absolute right-[5%] top-[10%] p-2 rounded-md cursor-pointer'
            >
                <TiThMenu className='text-3xl text-black' />
            </div>

            {/* nav mobile - is showing by default - hidden on desktop mode */}
            <div
                className= 
                {`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'}
                    
                ${isActive
                        ? 'top-[150px] lg:top-[110px]'
                        : 'top-[0px] lg:top-[150px]'
                    } 
                     py-0 fixed left-0 -z-10 w-full h-[70%] bg-white transition-all duration-300`}
            >

                <NavMobile />
            </div>

        </header>
    );
}

export default MobileComponent;