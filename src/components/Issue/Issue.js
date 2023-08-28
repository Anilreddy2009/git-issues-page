import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Issue.scss'
import { NavLink } from 'react-router-dom';

export const Issue = (props) => {

  return (
    
    <div className='Issue'>
        <div className='header'>
            <span className='isOpen'>
                {props.isOpen ? (<FontAwesomeIcon icon={faCheckCircle} className='fa-check-circle' />) : (<FontAwesomeIcon icon={faTimesCircle} className='fa-times-circle' />) }
            </span>
           
            <nav>
                <NavLink to={`/render/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><h4 className='title'>{props.text}</h4></NavLink>
            </nav>
           
            
            <span className='Badges'>
                {props.badges.map(badge=>{
                    return (
                        <span key={props.id} className='Badge' style={{backgroundColor:badge.color}}>
                            {badge.text}
                        </span>
                    )
                })}
            </span>
        </div>
        <p>{props.number}</p>
    </div>
    
  )
}
