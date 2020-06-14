import React from 'react';

const Burger = ({open}) => {
    return (
        <div onClick={() => open()} className="burger">
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default Burger;
