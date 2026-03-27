import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsbyQuery } from "./get-gifs-by-query.action";
import MockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../tests/mocks/giphy.response.data";



describe('get-gifs-by-query',()=>{ 
     let mock = new MockAdapter(giphyApi)

    beforeEach(()=>{
        // mock.reset();
        mock = new MockAdapter(giphyApi)

    })



//     test('Shoul return a list of gifs',async()=>{

//         const [gif1] = gifsmock
//         console.log(gif1)

//         expect(gif1).toStrictEqual({
//              id: expect.any(String),
//                title: expect.any(String),
//             url: expect.any(String),
//             width: expect.any(Number),
//             height: expect.any(Number)
//         })
//     })

    test('Should return a list of gifs',async ()=>{
      
        mock.onGet('/search').reply(200,giphySearchResponseMock)

        const gifs = await getGifsbyQuery('goku')

        expect(gifs.length).toBe(5)

        gifs.forEach(gif =>{
            expect(typeof gif.id).toBe('string')
        });


    });

    
    test('Should return a empty list of gifs if query is empty',async ()=>{
      
        mock.onGet('/search').reply(200,{data:[]});
        

        //mock.restore();

        const gifs = await getGifsbyQuery('')
        console.log(gifs)

        expect(gifs.length).toBe(0)


    })

    test('Should handle error when the API returns an error',async ()=>{

        const consoleErrorSpy = vi.spyOn(console,'error').mockImplementation(()=>{
            console.log('yes it pass the test')
        })




        mock.onGet('/search').reply(400,{
            data:{
                message:'Bad Request'
            }
        });

        const gifs = await getGifsbyQuery('goku')

        // console.log(gifs)
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    })

}) 
