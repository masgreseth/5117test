let slideIndex = 0;
        showSlides();

        // Automatic slideshow function
        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            // for (let i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            // }
            slides[slideIndex - 1].style.display = "block";  
            // dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 3 seconds
        }

        // Manual control: next/previous
        function plusSlides(n) {
            showSpecificSlide(slideIndex += n);
        }

        // Manual control: dot click
        function currentSlide(n) {
            showSpecificSlide(slideIndex = n);
        }

        function showSpecificSlide(n) {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";  
            dots[slideIndex - 1].className += " active";
        }