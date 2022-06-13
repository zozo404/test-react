import React from 'react';

const Logo = () => {
    return (
        <div className="logo">

            {/* Les images importées depusi la balise img sont accessbiles dans 'public' */}
            <img src='./logo192.png' alt='logo react'></img>
            <h3>zozo 404's world</h3>
        </div>
    );
};

export default Logo;