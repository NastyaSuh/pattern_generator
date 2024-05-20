import { loadDataToJSON } from "./helpers-modules"

figma.showUI(__html__);
figma.ui.resize(443, 320);

figma.ui.onmessage = (pluginMessage) => {
    console.log(loadDataToJSON(pluginMessage.prompt, pluginMessage.bgColourItem, 
        pluginMessage.eraseBgFlag, pluginMessage.makePatternFlag));
}