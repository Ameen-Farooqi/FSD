// Mini Photo Editor Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Image selection
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-image');
    const imageText = document.getElementById('image-text');
    let selectedThumb = thumbnails[0];
    if (selectedThumb) selectedThumb.classList.add('selected');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            if (selectedThumb) selectedThumb.classList.remove('selected');
            mainImage.src = this.src;
            selectedThumb = this;
            this.classList.add('selected');
        });
    });

    // Font controls
    const fontFamily = document.getElementById('font-family');
    const fontSize = document.getElementById('font-size');
    const fontAlign = document.getElementById('font-align');

    // Image effects
    const sepia = document.getElementById('sepia');
    const grayscale = document.getElementById('grayscale');
    const blur = document.getElementById('blur');

    // Buttons
    const applyBtn = document.getElementById('apply-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Default text style
    const defaultTextStyle = {
        fontFamily: 'Arial',
        fontSize: '20px',
        textAlign: 'right',
    };

    // Default image filter
    const defaultFilter = '';

    function applyEffects() {
        // Font effects
        if (fontFamily.value) imageText.style.fontFamily = fontFamily.value;
        else imageText.style.fontFamily = defaultTextStyle.fontFamily;

        imageText.style.fontSize = fontSize.value ? fontSize.value + 'px' : defaultTextStyle.fontSize;

        // Remove previous alignment classes
        imageText.classList.remove('align-left', 'align-center', 'align-right');
        if (fontAlign.value === 'left') {
            imageText.classList.add('align-left');
        } else if (fontAlign.value === 'center') {
            imageText.classList.add('align-center');
        } else if (fontAlign.value === 'right') {
            imageText.classList.add('align-right');
        } else {
            imageText.classList.add('align-right'); // default
        }

        // Image effects
        let filters = [];
        if (sepia.checked) filters.push('sepia(1)');
        if (grayscale.checked) filters.push('grayscale(1)');
        if (blur.checked) filters.push('blur(4px)');
        mainImage.style.filter = filters.join(' ');
    }

    function resetEffects() {
        // Reset font
        fontFamily.value = '';
        fontSize.value = 20;
        fontAlign.value = '';
        imageText.style.fontFamily = defaultTextStyle.fontFamily;
        imageText.style.fontSize = defaultTextStyle.fontSize;
        imageText.classList.remove('align-left', 'align-center', 'align-right');
        imageText.classList.add('align-right');
        // Reset image
        sepia.checked = false;
        grayscale.checked = false;
        blur.checked = false;
        mainImage.style.filter = defaultFilter;
    }

    applyBtn.addEventListener('click', applyEffects);
    resetBtn.addEventListener('click', resetEffects);

    // Set initial state
    resetEffects();
});
