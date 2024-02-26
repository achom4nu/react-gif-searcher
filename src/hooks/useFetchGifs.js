import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    //useEffect debe de devolver una función
    useEffect(() => {
        getGifs(category)
            .then(newImages => setImages(newImages))
        setIsLoading(false);
    }, []);

    return{
        images: images,
        isLoading: isLoading
    }
}
