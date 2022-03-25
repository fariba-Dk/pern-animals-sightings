import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <h1 className='h1'>I Spot An ...!👁‍🗨</h1>
      <div className='app'>
        <h4 className='a'> | 🐢 🦃 🦅 🐅 🦁 🐘 🐒 🦃 🦖 </h4>
      </div>
      <Link to='/zoo'>
Enter here ...
      </Link>
    </>
  );
}

