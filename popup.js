// popup.js
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, {action: "getDate"}, (response) => {
    document.getElementById('date-display').innerText = response.date || "Unknown";
  });
});
