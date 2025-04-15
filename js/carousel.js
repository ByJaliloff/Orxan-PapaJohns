const slides = document.getElementById("carousel-slides");
        const dots = document.querySelectorAll(".dot");
        let currentIndex = 0;

        function goToSlide(index) {
          slides.style.transform = `translateX(-${index * 100}%)`;
          dots.forEach(dot => dot.classList.remove("bg-white", "scale-125"));
          dots[index].classList.add("bg-white", "scale-125");
          currentIndex = index;
        }

        dots.forEach(dot => {
          dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-slide"));
            goToSlide(index);
          });
        });

        setInterval(() => {
          currentIndex = (currentIndex + 1) % dots.length; 
          goToSlide(currentIndex);
        }, 3000); 
      
        goToSlide(0);