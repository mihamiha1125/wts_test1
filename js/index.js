
function toggleMenu() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.classList.toggle('active');
}

// スライドイン
document.addEventListener("DOMContentLoaded", function() {
    const thoughtItems = document.querySelectorAll(".thought-item");
    thoughtItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 500);
    });
})

// slickjs

$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.slick-slider');
//     const slides = slider.children;
//     let currentIndex = 0;
//     const slideCount = slides.length;

//     function showSlide(index) {
//         currentIndex = (index + slideCount) % slideCount;
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // document.querySelector('.prev').addEventListener('click', function() {
//     //     showSlide(currentIndex - 1);
//     // });

//     // document.querySelector('.next').addEventListener('click', function() {
//     //     showSlide(currentIndex + 1);
//     // });

//     setInterval(function() {
//         showSlide(currentIndex + 1);
//     }, 6000); // 6秒ごとにスライドを切り替え
// });


// 思いアニメーション
document.addEventListener('DOMContentLoaded', function() {
    const thoughtItems = document.querySelectorAll('.thought-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    thoughtItems.forEach(item => {
        observer.observe(item);
    });
});