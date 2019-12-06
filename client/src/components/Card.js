import React from 'react';

export default function Card(props) {
    console.log('rendering Card component', props);
    return (
        <div>
            {props.players.map(players => (
                <div key={players.id}>
                        <h2>Player</h2>
                        <h2>{players.name}</h2>
                        <h4>{players.country}</h4>
                </div>
            ))}
        </div>
    )
}