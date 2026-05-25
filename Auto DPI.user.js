// ==UserScript==
// @name         Auto DPI
// @version      2026-05-25
// @description  automatically set page css zoom to 1.25x if on a large monitor
// @author       Perska
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const threshold = 2500
    let latch = false
    let latchSet = false
    let original = Object.getOwnPropertyDescriptor(window, "devicePixelRatio")
    let getDpr = original.get.bind(window)
    let dpr = 1
    Object.defineProperty(window, "devicePixelRatio", {
        get() {
            return getDpr() * (Number(document.body.style.zoom) || 1)
        },
        configurable: true,
        enumerable: true
    })
    function setZoom() {
        dpr = getDpr()
        if (dpr < 1 && !latchSet) {
            latch = !latch
        }
        latchSet = dpr < 1
        document.body.style.zoom = ((dpr * window.innerWidth) > threshold && !latch) ? "1.25" : "1"
    }
    setZoom()
    setInterval(setZoom, 100)
})();
