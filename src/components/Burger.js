import React, {useState} from 'react';

const Burger = () => {
    const [open, setOpen] = useState(false);
    return (
        <div open={open} onClick={() => setOpen(!open)} className="burger">
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default Burger;
