import { loadDataToJSON } from "./load-data-to-JSON";
import { handleData } from "./handle-user-data";
import { createFrame } from "./create-frame"

figma.showUI(__html__);
figma.ui.resize(443, 320);
var node: FrameNode;

figma.ui.onmessage = async (pluginMessage) => {

    const apiURL = "http://127.0.0.1:8000/generate"; 

    let jsonData = await loadDataToJSON(pluginMessage.prompt, pluginMessage.bgColourItem, 
        pluginMessage.eraseBgFlag, pluginMessage.makePatternFlag);
    
    let imageData = await handleData(jsonData, apiURL);    
    const imageUrl = imageData.imageURL;
    
    node = createFrame(imageUrl);
}



