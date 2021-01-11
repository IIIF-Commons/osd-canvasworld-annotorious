import "./styles.css";

// https://github.com/UniversalViewer/universalviewer/blob/canvasworld/src/modules/uv-openseadragoncenterpanel-module/OpenSeadragonCenterPanel.ts

(async () => {
  const json = await manifesto.loadManifest(
    "http://wellcomelibrary.org/iiif/b18035723/manifest"
  );
  
  const manifest = manifesto.parseManifest(json);
  const sequence = manifest.getSequenceByIndex(0);
  const canvases = sequence.getCanvases();
  
  let images = await getExternalResources(resources);
  
  const layers = [];
  
  const viewingDirection = "left-to-right";
  
  for (let i = 0; i < images.length; i++) {
    const data = images[i];
  
    let tileSource;
  
    if (data.hasServiceDescriptor) {
      tileSource = data;
    } else {
      tileSource = {
        type: "image",
        url: data.id,
        buildPyramid: false
      };
    }
  }
  
  var canvasWorld = new manifesto.CanvasWorld(canvases, layers, viewingDirection);
  
})();



function getPagePositions(resources) {
  const leftPage = resources[0];
  leftPage.x = 0;
  const rightPage = resources[1];
  rightPage.x = leftPage.width;
  return resources;
}