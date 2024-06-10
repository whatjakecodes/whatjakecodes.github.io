
// if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
//     // Mobile device style: fill the whole browser client area with the game canvas:
//     var meta = document.createElement('meta');
//     meta.name = 'viewport';
//     meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
//     document.getElementsByTagName('head')[0].appendChild(meta);
//
//     var canvas = document.querySelector("#unity-canvas");
//     canvas.style.width = "100%";
//     canvas.style.height = "100%";
//     canvas.style.position = "fixed";
//
//     document.body.style.textAlign = "left";
// }

createUnityInstance(document.querySelector("#unity-canvas"), {
    dataUrl: "../../assets/campfire/Build/campfire3.data.unityweb",
    frameworkUrl: "../../assets/campfire/Build/campfire3.framework.js.unityweb",
    codeUrl: "../../assets/campfire/Build/campfire3.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "campfire",
    productVersion: "1.0",
    // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
    // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
});

// *** BEGIN fix scroll isues **

// this forwards scroll events into the WebGL canvas, 
// even if the mouse is not above the canvas
const canvas = document.getElementById('unity-canvas');
document.addEventListener('wheel', function(event) {
    if (event.target === canvas) {
        return;
    }

    const newEvent = new WheelEvent('wheel', event);
    canvas.dispatchEvent(newEvent);
});


// this converts touch scroll events into wheel events
let previousTouchY;
document.addEventListener('touchstart', function(event) {
    previousTouchY = event.touches[0].clientY;
}, false);

document.addEventListener('touchmove', function(event) {
    let currentTouchY = event.touches[0].clientY;
    let deltaY = previousTouchY - currentTouchY;

    let newEvent = new WheelEvent('wheel', {deltaY: deltaY * 10}); // You can adjust multiplier to suit your scroll speed preference
    canvas.dispatchEvent(newEvent);

    previousTouchY = currentTouchY; //Store the current Y-coordinate for next comparison
}, false);

// *** END fix scroll isues **
