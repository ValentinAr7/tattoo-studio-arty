import React, { useState, useEffect } from 'react';
import {HeaderPC} from './HeaderPC';
import {HeaderPhone} from './HeaderPhone';

const ScreenDif = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMenu(width > 700 ? <HeaderPC /> : <HeaderPhone />);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{menu}</div>;
};

export default ScreenDif;