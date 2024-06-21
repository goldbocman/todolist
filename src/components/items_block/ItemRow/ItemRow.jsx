import React, { FC } from "react";
import './style.css'

const getHighlightedText = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, 'gi')
    const parts = text.split(regex);
    console.log(parts)

    return (
        <span>
            { 
                parts.map((part, i) => 
                    <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { fontStyle: 'italic', color: "rgb(73, 50, 243)", fontWeight: "bold" } : {} }>
                        { part }
                    </span>
            )}
        </span>
    )
    
}


export const ItemRow = ({ item, onClickButton, search }) => {
    const { name, isFavorite } = item;

    const buttonTitle = isFavorite ? "Remove" : "Like";
    
    const titleHighlighted = search ? getHighlightedText(name, search) : name

    const onClickHandler = () => onClickButton && onClickButton(item)
    return <ul>
        <li>
            <div className="item-block-row__row">
                <div className="item-block-row__button" onClick={onClickHandler}>{buttonTitle}</div>
                <div className="item-block-row__title">
                    {titleHighlighted}
                </div>
            </div>
        </li>
    </ul>
}