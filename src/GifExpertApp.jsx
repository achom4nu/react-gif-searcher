import { useState } from "react";
import { AddCategory } from "./components/AddCAtegory";
import { GifGrid } from "./components/GifGrid";

export function GifExpertApp() {

    const [categories, setCategories] = useState(["One Piece"]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        /*El operador de propagación (...) en JavaScript se utiliza para descomponer 
        (o "desempaquetar") elementos de una estructura, como un array o un objeto. 
        En el contexto de tu código, se utiliza para crear una nueva copia del array 
        categories al agregar un nuevo elemento. */
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/*Título*/}
            <h1>Gif Searcher</h1>

            {/*Barra de búsqueda*/}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {/*Listado de Gif*/}

            {categories.map(category =>
            (
                <GifGrid key={category} category={category} />
            )
            )}

            {/*Gif Item*/}
        </>


    )
}
