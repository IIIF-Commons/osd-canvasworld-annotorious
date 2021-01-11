import "./styles.css";

// https://github.com/UniversalViewer/universalviewer/blob/canvasworld/src/modules/uv-openseadragoncenterpanel-module/OpenSeadragonCenterPanel.ts

(async () => {
  const json = await manifesto.loadManifest(
    "http://wellcomelibrary.org/iiif/b18035723/manifest"
  );
  
  const manifest = manifesto.parseManifest(json);
  const sequence = manifest.getSequenceByIndex(0);
  const canvases = sequence.getCanvases();

  const layers = [];
  
  const viewingDirection = "left-to-right";

  const canvasWorld = new manifesto.CanvasWorld(canvases, layers, viewingDirection);

  console.log(canvasWorld);

  // let images = await getExternalResources(resources);

  // for (let i = 0; i < images.length; i++) {
  //   const data = images[i];
  
  //   let tileSource;
  
  //   if (data.hasServiceDescriptor) {
  //     tileSource = data;
  //   } else {
  //     tileSource = {
  //       type: "image",
  //       url: data.id,
  //       buildPyramid: false
  //     };
  //   }
  // }
  
})();



function getPagePositions(resources) {
  const leftPage = resources[0];
  leftPage.x = 0;
  const rightPage = resources[1];
  rightPage.x = leftPage.width;
  return resources;
}