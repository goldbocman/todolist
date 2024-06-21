import React, { FC, useEffect, useState } from "react";
import { ItemBlock } from "./components/items_block";
import { SearchField } from "./components/search";


const items = [
    { name: "foo", isFavorite: false },
    { name: "bar", isFavorite: false },
    { name: "test", isFavorite: false },
    { name: "milk", isFavorite: true },
    { name: "pie", isFavorite: true },
]


export const TodoList = () => {

    const [itemsList, setItemsList] = useState(items)
    const [search, setSearch] = useState()

    const favoriteItems = itemsList.filter(item => item.isFavorite)
    const notFavoriteItems = itemsList.filter(item => !item.isFavorite)

    const onClickButtonItem = (item) => {
        item.isFavorite = !item.isFavorite

        const newItemsList = itemsList.filter(_item => _item.name !== item.name)
        newItemsList.push(item)
        setItemsList(newItemsList)
    }

    const onSearchFieldChanged = (searchText) => {
        console.log(searchText)
        setSearch(searchText)
    }

    useEffect(() => {
        window.sessionStorage.setItem("items", JSON.stringify(itemsList));
    }, [itemsList])

    useEffect(() => {
        let stringItems = window.sessionStorage.getItem("items")
        console.log(stringItems)
        if (stringItems) {
            setItemsList(JSON.parse(stringItems))
        } 
    }, [])

    return (
        <div>
            <SearchField onChangeMethod={onSearchFieldChanged} />
            <ItemBlock title={"Favorites"} items={favoriteItems} onClickButtonItem={onClickButtonItem} search={search} />
            <ItemBlock title={"Popular"} items={notFavoriteItems} onClickButtonItem={onClickButtonItem}  search={search} />
        </div>
    )
}