import React from "react";

export const ButtonRoundedSimple = ({name, className,onClick, text}) =>{
    return(
        <button onClick={onClick} name={name} className={`${className} bg-neutral-secondary-100 text-white rounded-xl`}>
            {text}
        </button>
    )
}