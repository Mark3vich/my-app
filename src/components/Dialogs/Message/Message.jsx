import React from 'react';
import classes from '../../components_css/Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


export default Message;