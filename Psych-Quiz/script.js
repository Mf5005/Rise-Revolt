<script>
    const productWrapper = document.querySelector('.product-wrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    const totalProducts = document.querySelectorAll('.product-tile').length;

    function updateSlider() {
        const translateX = -currentIndex * 100; // Move to the current index
        productWrapper.style.transform = `translateX(${translateX}%)`;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalProducts - 1; // Loop to last
        updateSlider();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < totalProducts - 1) ? currentIndex + 1 : 0; // Loop to first
        updateSlider();
    });
</script>

