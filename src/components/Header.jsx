import React from 'react';
import classes from './components_css/Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png' className={classes['header img']} />
        </header>
    );
};

export default Header;