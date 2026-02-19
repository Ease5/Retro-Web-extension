chrome.storage.local.get(['enabled'], (result) => {
  // If 'enabled' hasn't been set yet, we assume it's ON
  const isEnabled = result.enabled !== false;

  if (isEnabled) {
    const link = document.createElement('link');
    link.href = chrome.runtime.getURL('retro.css');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = 'nokia-theme';
    document.head.appendChild(link);
  }
});