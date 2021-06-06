import React from 'react'

export default function Pagination(props) {
    console.log(props);
    return (
        <div>
            {props.gotoPrevPage && <button onClick={props.gotoPrevPage}>Previous </button>}
            {props.gotoNextPage && <button onClick={props.gotoNextPage}>Next </button>}
        </div>
    )
};