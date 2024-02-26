export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=cRw35tmkF00op1w89wMTMdjv7B2iMjnC&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;

}