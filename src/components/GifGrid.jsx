import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    //Custom hook
    const {images, isLoading} = useFetchGifs(category)
    
    return (
    <>
        <h3>{ category }</h3>
        { /*Con ternario: isLoading ? <h2>Cargando...</h2> : null*/
            //If corto
            isLoading && <h2>Cargando...</h2>
            //HAcen lo mismo
        }
        <div className="card-grid">
            {images.map((image) =>
            (
                <GifItem 
                key={image.id} 
                {...image} //Esto esparce las propiedes de la imagen
                />
            )
            )}
        </div>
    </>
  )
}
