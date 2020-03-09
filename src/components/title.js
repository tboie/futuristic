import React, { useContext } from 'react';
import { ThemeContext } from '../App.js';
import './style.css';

export default function Title(props){
    const theme = useContext(ThemeContext);
    return (
        <div className='divTitle' style={{color: theme.primary, borderBottom: '4px solid ' + theme.primary }}>
            <label className="lblTitle">{props.title}</label>
            <div className='divTitleStatus'/>
        </div>
    )
}