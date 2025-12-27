function findLastModified() {
  // 1. Check for specific meta tags often used by articles
  const metaDate = document.querySelector('meta[property="article:modified_time"]') || 
                   document.querySelector('meta[name="last-modified"]') ||
                   document.querySelector('meta[name="revised"]');
  
  if (metaDate) return metaDate.content;

  // 2. Fallback to the browser's lastModified property
  // Note: This often returns the current time for dynamic sites
  return document.lastModified;
}

// Listen for the popup to ask for the date
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getDate") {
    sendResponse({ date: findLastModified() });
  }
});
