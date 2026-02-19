chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.enabled) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  }
});