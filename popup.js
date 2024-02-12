let isHidden = false;

document.getElementById("toggleButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("toggleButton").innerText = "Show\u00a0Hidden Banner";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "executeCode" });
            document.getElementById("toggleButton").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
});
