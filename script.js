window.addEventListener('load', function() {
    const slider = document.getElementById('slider');
    const imageA = document.getElementById('imageA');
    const imageB = document.getElementById('imageB');

    function updateSliderWidth() {
        slider.style.width = `${imageA.clientWidth}px`;
    }

    // Update slider width on load
    updateSliderWidth();

    // Update slider width on window resize
    window.addEventListener('resize', updateSliderWidth);

    slider.addEventListener('input', (event) => {
        const value = event.target.value;
        imageA.style.opacity = 1 - value / 100;
        imageB.style.opacity = value / 100;
    });
});