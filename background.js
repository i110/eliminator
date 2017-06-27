chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({
        url: [
            "*://www.google.co.jp/*",
            "*://stackoverflow.com/*",
            "*://www.amazon.co.jp/*"
        ]
    }, function(tabs) {
        tabs.forEach(function(tab) {
            chrome.tabs.remove(tab.id);
        });
    });
});
