import React from "react";

export const ButtonSquareSimple = ({className, text}) =>{
    return(
        <button className={`${className} bg-neutral-secondary-120 p-4 sm:p-6 text-white`}>
            {text}
        </button>
    )
}