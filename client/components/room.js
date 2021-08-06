import React from 'react'

export default function Room(props) {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                
            </div>
            <div>
                <button>Join</button>
            </div>
        </div>
    )
}
