import { loadDataToJSON } from "./load-data-to-JSON";
import { postData } from "./handle-user-data";

figma.showUI(__html__);
figma.ui.resize(443, 320);

figma.ui.onmessage = async (pluginMessage) => {

    let jsonData = await loadDataToJSON(pluginMessage.prompt, pluginMessage.bgColourItem, 
        pluginMessage.eraseBgFlag, pluginMessage.makePatternFlag);
    
    const apiURL = "http://127.0.0.1:8000/generate"; 
    
    // postData(jsonData, apiURL);
    
    console.log(jsonData);
}