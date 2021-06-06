import React from 'react'

export default function NumberList(props) {
    const names = props.namess;
    return (
        <div>
            {
                names.map(k => (
                    <div key={k}>{k}</div>
                )
                )
            }
        </div>
    )
}

