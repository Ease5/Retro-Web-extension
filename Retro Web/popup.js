document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('powerToggle');

  // Load the current state (default to ON)
  chrome.storage.local.get(['enabled'], (result) => {
    toggle.checked = result.enabled !== false;
  });

  // When user clicks the toggle
  toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;
    chrome.storage.local.set({ enabled: isEnabled });

    // Tell the website to refresh or update the style immediately
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});