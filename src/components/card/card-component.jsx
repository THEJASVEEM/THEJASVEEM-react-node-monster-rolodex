import React from 'react';
import './card.styles.css'
export const Card = (props) => {
    return (<div className='card-container'>
        <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}/>
        <h1 key={props.user.id}>{props.user.name}</h1>
        <h2 >{props.user.email}</h2>
    </div> )
}