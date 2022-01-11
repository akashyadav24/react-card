import React from 'react'
import './Cards.css'

export default function Cards({title, imageUrl, body}) {
    return (
        <div className='card-container' >
            <div className='image-container'>
                <img src = {imageUrl} art = '' />
            </div>
            <div className='card-content' >
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-body'>
                    <p>{body}</p>
                </div>
                <div className='btn'>
                    <button>
                        <a>
                            
                            Add more
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
