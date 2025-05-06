// ==== Function Swipe ====
function fSwipe(idScrollSelector, idLastScrollSelector, minSwipeStep, maxSwipeStep, minSwipeDelay, maxSwipeDelay) {
    let swipeElement = document.querySelector(idScrollSelector);
    let stopElement = document.querySelector(idLastScrollSelector);
    if (!swipeElement || !stopElement) return Promise.resolve();
    let stopRect = stopElement.getBoundingClientRect();
    if (stopRect.top <= window.innerHeight) return Promise.resolve();

    return new Promise(resolve => {
        function swipeStep() {
            let scrollPos = window.scrollY + window.innerHeight;
            if (stopElement.getBoundingClientRect().top <= window.innerHeight) return resolve();
            let scrollAmount = Math.floor(Math.random() * (maxSwipeStep - minSwipeStep + 1)) + minSwipeStep;
            let delay = Math.floor(Math.random() * (maxSwipeDelay - minSwipeDelay + 1)) + minSwipeDelay;
            let touchX = Math.floor(Math.random() * window.innerWidth);
            let touchY = Math.floor(Math.random() * window.innerHeight);
            let touchEvent = new TouchEvent("touchmove", {
                touches: [new Touch({ identifier: 1, target: swipeElement, clientX: touchX, clientY: touchY })]
            });
            swipeElement.dispatchEvent(touchEvent);
            swipeElement.scrollBy({ top: scrollAmount, behavior: "smooth" });
            setTimeout(swipeStep, delay);
        }
        swipeStep();
    });
}

// ==== Settings ====
async function wwwGoogleCom() {
    await fSwipe(
        idScrollSelector = "#jYfXMb",
        idLastScrollSelector = "#HQ1lb",
        minSwipeStep = 50,
        maxSwipeStep = 150,
        minSwipeDelay = 500,
        maxSwipeDelay = 1500);

    alert("All actions completed.");

// ==== Run ====
wwwGoogleCom();

