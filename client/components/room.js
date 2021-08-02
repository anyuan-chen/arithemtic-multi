import React from 'react'

export default function room(props) {
    return (
        <div>
            <div>
                <h1>{props.name}</h1>
                <p>{props.id}</p>
            </div>
            <div>
                <h2>{props.number} online</h2>
                <button>Join</button>
            </div>
        </div>
    )
}
