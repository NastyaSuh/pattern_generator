import { createFrame } from "./create-frame"

export async function handleData(apiURL: string, data: string)
{   
    const options = 
    {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: data
    };

    try
    {
        const response = await fetch(apiURL, options);
        const result = await response.text();
        const obj = JSON.parse(result);
        return obj;
    } 
    catch (error)
    {
        console.error(error);
    }

  }
