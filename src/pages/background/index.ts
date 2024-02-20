chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse({ success: true, message: 'Hello World' });
});
