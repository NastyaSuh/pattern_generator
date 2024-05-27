import { loadDataToJSON } from "./load-data-to-JSON";

figma.showUI(__html__);
figma.ui.resize(443, 320);

figma.ui.onmessage = async (pluginMessage) => {

    let jsonData = await loadDataToJSON(pluginMessage.prompt, pluginMessage.bgColourItem, 
        pluginMessage.eraseBgFlag, pluginMessage.makePatternFlag);
    
    console.log(jsonData);
}