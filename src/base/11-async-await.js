
export const getImagen = async() => {

    try {

        const apiKey = 'GEr0C7r05WHPNRYPMqUDelFj8MCBAx8k';
        // const apiKey = 'GEr0C7r05WHPNRYPMqUDbdbcbcvelFj8MCBAx8k';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch ( error ) {
        // manejo del error
        return 'No existe';
    }
        
}

