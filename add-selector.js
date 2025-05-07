(function () {
    // Clear previous selector data from localStorage
    localStorage.removeItem('selector_data');
    let lastHighlighted = null;

    // Generates a unique CSS selector for a given element
    function getElementSelector(el) {
        let path = [];
        while (el && el.nodeType === Node.ELEMENT_NODE) {
            let selector = el.nodeName.toLowerCase();
            if (el.id) {
                selector += `#${el.id}`; // Use ID if available for specificity
                pfth.unshift(selector);
                break;
            } else {
                let sibling = el, nth = 1;
                while (sibling.previousElementSibling) {
                    sibling = sibling.previousElementSibling;
                    if (sibling.nodeName.toLowerCase() === el.nodeName.toLowerCase()) nth++;
                }
                if (nth > 1) selector += `:nth-of-type(${nth})`; // Position among siblings
            }
            path.unshift(selector);
            el = el.parentNode;
        }
        return path.join(' > ');
    }

    // Detects the type of content in the element (image, video or text)
    function detectType(el) {
        const tag = el.tagName.toLowerCase();
        if (tag === 'img' && el.src) return 'image';
        if (tag === 'video' && el.src) return 'video';
        if (['p', 'span', 'div', 'textarea'].includes(tag) && el.textContent.trim()) return 'text';
        return null;
    }

    // Saves selector and type to localStorage if not already present
    function saveToLocal(selector, type) {
        const entry = `${selector}|${type}`;
        let data = JSON.parse(localStorage.getItem('selector_data') || '[]');

        if (!data.includes(entry)) {
            data.push(entry);
            localStorage.setItem('selector_data', JSON.stringify(data));
        }
    }

    // Downloads the stored selector data as a plain text file
    function downloadFile() {
        const data = JSON.parse(localStorage.getItem('selector_data') || '[]');
        if (data.length === 0) return;
        const blob = new Blob([data.join('\n')], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'selectors.txt';  // File selectors.txt
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Highlights the element currently under the mouse cursor
    document.addEventListener('mousemove', function (event) {
        const el = event.target;
        if (lastHighlighted && lastHighlighted !== el) {
            lastHighlighted.style.outline = '';
        }
        el.style.outline = '1px solid red'; // Visual indication
        lastHighlighted = el;
    });

    // On click, collects selector and type if the element is valid
    document.addEventListener('click', function (event) {
        const el = event.target;
        const selector = getElementSelector(el);
        const type = detectType(el);
        if (type) {
            saveToLocal(selector, type);
            event.preventDefault(); // Prevent default action (following links)
            event.stopImmediatePropagation(); // Stop other handlers from firing
        }
    }, true);

    // Downloads data when Alt key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Alt') {
            downloadFile();
        }
    });
})();

