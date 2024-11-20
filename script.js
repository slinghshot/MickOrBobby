window.addEventListener('load', function () {
  const slider = document.getElementById('slider');
  const imageA = document.getElementById('imageA');
  const imageB = document.getElementById('imageB');
  const background = document.getElementById('background');
  let audio = new Audio('MickOrBobby.ogg');
  let audioImagine = new Audio('imagein.ogg');
  let enableSecond = false;

  function updateSliderWidth() {
    // slider.style.width = `${background.clientWidth}px`;
    slider.style.width = '1000px';
  }

  // Update slider width on load
  updateSliderWidth();

  // Update slider width on window resize
  window.addEventListener('resize', updateSliderWidth);

  slider.addEventListener('input', (event) => {
    const value = event.target.value;
    imageA.style.opacity = 1 - value / 100;
    imageB.style.opacity = value / 100;
    if (value == 100) {
      audio.volume = 0.5;
      audio.play();
      enableSecond = true;
    }
    if (enableSecond && value == 0) {
      audioImagine.volume = 0.8;
      audioImagine.play();
    }
  });

  slider.addEventListener('mouseover', () => {
    slider.style.setProperty('--thumb-image', 'url(SliderMick.png)');
  });

  slider.addEventListener('mouseout', () => {
    slider.style.setProperty('--thumb-image', '#4CAF50');
  });
});
