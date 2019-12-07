import React from 'react';

export default function Card(props) {
    console.log('rendering Card component', props);
    return (
        <div>
        <div>
            <h1>Player List</h1>
        </div>
        <div>
            {props.player.map(player => (
                <div key={player.id}>
                        <h2>{player.name}</h2>
                        <h4>{player.country}</h4>
                </div>
            ))}
        </div>
        </div>
    )
}