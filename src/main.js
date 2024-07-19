const slideButtons = document.querySelectorAll('.slider-wrapper .slider-button');
const imageList = document.querySelector('.slider-wrapper .image-list');
const images = document.querySelectorAll("[data-img-url]");
const likes = document.querySelectorAll('#heart');
const faqItems = document.querySelectorAll('.faq-question');

images.forEach((div) => {
        div.style.backgroundImage = `url(./${div.getAttribute('data-img-url')})`;
  });


slideButtons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.id === "prev" ? -1:1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({left: scrollAmount,behavior:"smooth"});
    })
});

likes.forEach(like => {
    like.addEventListener('click', function() {
        like.classList.toggle('fa-heart-o');
        like.classList.toggle('fa-heart');
        like.classList.toggle('black-heart');
    })
})

function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

faqItems.forEach(item => item.addEventListener('click', toggleAccordion));

