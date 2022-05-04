/**
 * Copy text to clipboard on any device
 * Works in edge cases: when Document not in the focus, on iOS, and other mobile devices
 * @function copyToClipboard
 * @param {String} newClipText - Plain-text string to copy
 * @param {Boolean} [fallback] — Use old-school API creating textarea, selecting its value, and executing document.execCommand('copy') method
 * @returns {void 0}
 */

export function copyToClipboard (newClipText, fallback = false) {
  if (fallback === false && 'clipboard' in navigator) {
    navigator.clipboard.writeText(newClipText).then(() => {
      // ALL GOOD STRING SUCCESSFULLY COPIED TO CLIPBOARD
    }).catch(() => {
      // DOCUMENT NOT IN THE FOCUS OR SIMILAR EXCEPTION IS THROWN
      // FALLBACK TO OLD-SCHOOL METHOD
      copyToClipboard(newClipText, true);
    });
  } else {
    const element = document.createElement('textarea');
    element.style.position = 'absolute';
    element.style.top = '-999px';
    element.style.left = '-999px';
    element.value = newClipText;
    document.body.appendChild(element);

    // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
    if (navigator.userAgent.match(/ipad|iphone/i)) {
      const range = document.createRange();
      range.selectNodeContents(element);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      element.setSelectionRange(0, newClipText.length + 1);
    } else {
      element.select();
    }

    document.execCommand('copy');
    element.remove();
  }
}
