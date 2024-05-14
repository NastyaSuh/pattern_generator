export function loadDataToJSON(prompt, background_colour, flag_erase_background, flag_make_pattern) {
    let promptData = {
        prompt: prompt,
        background_colour: background_colour,
        flag_erase_background: flag_erase_background,
        flag_make_pattern: flag_make_pattern
    };
    return JSON.stringify(promptData);
}
