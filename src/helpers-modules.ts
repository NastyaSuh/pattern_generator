export function loadDataToJSON(prompt: string, background_colour: string, flag_erase_background: any, flag_make_pattern: any): string
{
    let promptData = {
        prompt: prompt,
        background_colour: background_colour,
        flag_erase_background: flag_erase_background,
        flag_make_pattern: flag_make_pattern 
    }

    return JSON.stringify(promptData);
}