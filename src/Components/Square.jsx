import React from "react";

const Square = ({value, onSqureClick}) => {

    return (
        <>
            <button className="w-[100px] h-[100px] rounded-lg shadow-md" onClick={onSqureClick}>{value}</button>
        </>
    )
}

export default Square;