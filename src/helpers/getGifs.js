export const getGif = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=RIAdocp8fT65Dr6zLc2IXaPbsfu0MVN0&q=${category}&limit=20`

    const resp = await fetch(URL) 
    const {data} = await resp.json()

    const gifs = data.map(({id, title, images}) => ({
        id,
        title,
        url: images.downsized_medium.url
    }))
   // console.log(gifs)
    return gifs;
};