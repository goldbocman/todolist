import React, { FC, useEffect, useState } from "react";
import { ItemRow } from ".";
import './style.css'


export const SearchField = ({ onChangeMethod }) => {
    const [search, setSearch] = useState("")

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        onChangeMethod && onChangeMethod(e.target.value)
    }

    return (
        <div className="search-field-container">
            <input type="text" placeholder="Search" value={search} onChange={onChangeHandler} />
        </div>
    )
}