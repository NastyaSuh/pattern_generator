import { generateSessionId } from './generate-session';

export async function loadDataToJSON(prompt: string, background_colour: string, flag_erase_background: any, flag_make_pattern: any): Promise<string>
{
    let jsonData;
    let sessionId = await figma.clientStorage.getAsync("sessionId");

    if (!sessionId)
    {
        sessionId = generateSessionId();
        figma.clientStorage.setAsync("sessionId", sessionId);
    }

    jsonData = {
        user_id: sessionId.toString(),
        input: prompt,
        bg_сolor: background_colour,
        is_transparent: flag_erase_background,
        is_pattern: flag_make_pattern 
    }

    // console.log(await figma.clientStorage.getAsync("imageItems")); — показ всех сгенерированных изображений

    return JSON.stringify(jsonData);
}

async function loadDataToStorage(prompt: string, background_colour: string, flag_erase_background: any, flag_make_pattern: any, image_id: string)
{
    let images = await figma.clientStorage.getAsync("imageItems");
    let image;

    images = [];
    image = {
        id: image_id,
        input: prompt,
        bg_сolor: background_colour,
        is_transparent: flag_erase_background,
        is_pattern: flag_make_pattern 
    }
    images.push(image);
    figma.clientStorage.setAsync("imageItems", images);
}