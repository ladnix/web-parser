// ==== Function Tap ====
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}

function fTap(idTapSelector, startRangeX, endRangeX, startRangeY, endRangeY, minPressTime,
maxPressTime) {
    let tapElement = document.querySelector(idTapSelector);
    if (!tapElement || !isElementInViewport(tapElement)) return Promise.resolve();
    let x = Math.floor(Math.random() * (endRangeX - startRangeX + 1)) + startRangeX;
    let y = Math.floor(Math.random() * (endRangeY - startRangeY + 1)) + startRangeY;
    let pressTime = Math.floor(Math.random() * (maxPressTime - minPressTime + 1)) + minPressTime;

    return new Promise(resolve => {
        let touchStart = new TouchEvent("touchstart", {
            bubbles: true,
            cancelable: true,
            touches: [new Touch({
                identifier: 1,
                target: tapElement,
                clientX: x,
                clientY: y,
            })]
        });
        let touchEnd = new TouchEvent("touchend", {
            bubbles: true,
            cancelable: true,
            touches: []
        });
        tapElement.dispatchEvent(touchStart);
        setTimeout(() => {
            tapElement.dispatchEvent(touchEnd);
            tapElement.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
            resolve();
        }, pressTime);
    });
}

// ==== Settings ====
async function wwwGoogleCom() {
    await fTap(
        idTapSelector = "#L2AGLb",
        startRangeX = 45,
        endRangeX = 270,
        startRangeY = 430,
        endRangeY = 460,
        minPressTime = 100,
        maxPressTime = 500);

    alert("All actions completed.");

// ==== Run ====
wwwGoogleCom();

