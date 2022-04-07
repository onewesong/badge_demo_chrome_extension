'use strict';

var count = 0;

document.getElementById('add-btn').addEventListener('click', function() {
    count = count + 1;
    console.log(`clicked ${count} times`)
    chrome.browserAction.setBadgeText({ text: count.toString()})
})

document.getElementById('reset-btn').addEventListener('click', function () {
    count = 0;
    chrome.browserAction.setBadgeText({ text: count.toString() })
    console.log(`reset count`)
})