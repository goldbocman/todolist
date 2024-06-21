import React, { FC } from "react";
import { ItemRow } from ".";
import './style.css'


export const ItemBlock = ({ title, items, onClickButtonItem, search }) => {


    return <div className="item-block-container">
        <div className="item-block-title">{title}</div>
        <div className="item-block-list">
            {items.map(item => {
                return <ItemRow key={item.name} item={item} onClickButton={onClickButtonItem} search={search} />;
            })
            }
        </div>
    </div>
}