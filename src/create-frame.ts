export function createFrame(imageURL: string): FrameNode
{
    var node: FrameNode;
    figma.createImageAsync(imageURL)
    .then( async (image: Image) => {
        node = figma.createFrame();
        const {width, height} = await image.getSizeAsync();
        node.resize(width, height);

        node.fills = [
            {
                type: "IMAGE",
                imageHash: image.hash,
                scaleMode: "FILL"
            }
        ]
    } )
    .catch( error =>  
    {
        console.error(Error);
    })

    return node!;
}