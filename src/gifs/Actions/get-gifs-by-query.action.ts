import axios from 'axios'
import type { GiphyResponse } from '../interfaces/giphy.response'
import type { Gif } from '../interfaces/gif.interfaces';


export const getGifsbyQuery= async(query: string):Promise<Gif[]> =>{

    const response = await axios.get<GiphyResponse>(`https://api.giphy.com/v1/gifs/search`,{params:{
        q:query,
        limit:10,
        lang:'es',
        api_key:'XHPmcIkyhFqI5XhFXnZ6ruTGoIot7NAH'
    }
    })

    console.log(response.data);

    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=XHPmcIkyhFqI5XhFXnZ6ruTGoIot7NAH&q=${query}&limit=25&offset=0&rating=pg-13&lang=es&bundle=messaging_non_clips`)
    
    return response.data.data.map((gif) => ({ 
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
}