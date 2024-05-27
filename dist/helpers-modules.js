export function loadDataToJSON(prompt, background_colour, flag_erase_background, flag_make_pattern) {
    let promptData = {
        input: prompt,
        bg_сolor: background_colour,
        is_transparent: flag_erase_background,
        is_pattern: flag_make_pattern
    };
    return JSON.stringify(promptData);
}
// export function generateSessionID()
// {
// }
