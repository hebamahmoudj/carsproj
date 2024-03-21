(function () {
    var cardConatiner = [
        {
            "id": 1,
            "imageSrc": "../assets/Picture1.png",
            "title": "سيارة مجهزة ونش مرور"
        },
        {
            "id": 2,
            "imageSrc": "../assets/Picture2.jpg",
            "title": "سيارة مجهزة اطفاء"
        },
        {
            "id": 3,
            "imageSrc": "./assets/Picture3.jpg",
            "title": "سيارة مجهزة لسحب الرواسب "
        },
        {
            "id": 4,
            "imageSrc": "./assets/Picture4.jpg",
            "title": "سيارة مجهزة لانقاذ السيارات"
        },
        {
            "id": 5,
            "imageSrc": "./assets/Picture5.jpg",
            "title": "سيارة مجهزة لجمع وكبس القمامة"
        },
        {
            "id": 6,
            "imageSrc": "./assets/Picture6.jpg",
            "title": "سيارة مجهزة لكنس الشوارع"
        },
        {
            "id": 7,
            "imageSrc": "./assets/Picture7.png",
            "title": "سيارة مجهزة انقاذ بونش."
        },
        {
            "id": 8,
            "imageSrc": "./assets/Picture8.jpg",
            "title": "سيارة مجهزة بونش تلسكوبى"
        },
        {
            "id": 9,
            "imageSrc": "./assets/Picture9.jpg",
            "title": "سيارة مجهزة نافورى"
        },
        {
            "id": 10,
            "imageSrc": "./assets/Picture10.jpg",
            "title": "سيارة مجهزة بصندوق وونش "
        },
        {
            "id": 11,
            "imageSrc": "./assets/Picture11.png",
            "title": "سيارة مجهزة بحزان لنقل السوائل"
        },
        {
            "id": 12,
            "imageSrc": "./assets/Picture12.jpg",
            "title": "سيارة مجهزة بسلة"
        },
        {
            "id": 13,
            "imageSrc": "./assets/Picture13.jpg",
            "title": "سيارة مجهزة اسعاف"
        },
        {
            "id": 14,
            "imageSrc": "./assets/Picture14.jpg",
            "title": "سيارة مجهزة قلاب "
        },
        {
            "id": 15,
            "imageSrc": "./assets/Picture15.jpg",
            "title": "سيارة مجهزة بصندوق"
        },
        {
            "id": 16,
            "imageSrc": "./assets/Picture16.jpg",
            "title": "مقطورة قلاب"
        },
        {
            "id": 17,
            "imageSrc": "./assets/Picture17.jpg",
            "title": "كلايشة مرور"
        },
        {
            "id": 18,
            "imageSrc": "./assets/Picture18.jpg",
            "title": "حاجز مرور"
        }
    ];
    var cardConatiner2 = [
        {
            "id": 1,
            "imageSrc": ["../assets/Picture33.jpg", "../assets/Picture34.jpg", "../assets/Picture35.jpg"],
            "title": "تصنيع و تركيب وصيانة الابواب المتحركة العادية والكهربائية والاسوار المعدنية"
        },
        {
            "id": 2,
            "imageSrc": ["./assets/Picture21.jpg", "./assets/Picture22.jpg", "./assets/Picture23.jpg"],
            "title": "تصنيع وصيانة الكرفانات الثابتة والمحمولة مختلفة الاشكال والاحجام "
        },
        {
            "id": 3,
            "imageSrc": ["./assets/Picture24.jpg", "./assets/Picture25.jpg", "./assets/Picture26.jpg"],
            "title": "تصنيع وصيانة السلالم الثابتة والمحمولة المناسبة لجميع التطبيقات والاستخدامات"
        },
        {
            "id": 4,
            "imageSrc": ["./assets/Picture27.jpg", "./assets/Picture28.jpg"],
            "title": "تصنيع وتركيب محطات انتظار السيارات والركاب "
        },
        {
            "id": 5,
            "imageSrc": ["./assets/Picture19.jpg", "./assets/Picture20.jpg"],
            "title": "تصنيع وصيانة وتركيب الجمالونات مختلفة الاشكال والاحجام وصيانتها"
        },
        {
            "id": 6,
            "imageSrc": ["./assets/Picture30.jpg", "./assets/Picture31.jpg"],
            "title": "تصنيع وتركيب الخزانات بمختلف أنواعها وأحجامها (الافقية والرأسية ) مضغوطة وغير مضغوطة"
        },
        {
            "id": 7,
            "imageSrc": ["./assets/Picture29.jpg"],
            "title": "تصنيع وتركيب وصيانة يافطات الدعايةوالاعلان"
        },
        {
            "id": 8,
            "imageSrc": ["./assets/Picture32.jpg",],
            "title": "تصنيع وصيانة رامبات للتحميل على الترلات والسيارات "
        }
    ];
    // ///////// end second word  data ///////////////
    $(window).on('scroll', function () {
        var navbar = document.getElementById('containerr');
        var scrollY = $(this).scrollTop();
        if (scrollY >= 45) {
            $('nav').addClass('fixed-top');
            navbar.classList.add('w-50');
        }
        else {
            $('nav').removeClass('fixed-top');
            navbar.classList.remove('w-50');
            $('header').removeClass('d-none');
        }
    });
    //   ///////////////////////////////header/////////////////////////////////
    // gallery
    var gallery = document.getElementById('cards-container');
    var loadMoreCardsButton = document.getElementById('load-more-cards-btn');
    var cardtitle = document.getElementById('cardtitle');
    var searchInput = document.getElementById('searchInput');
    var gallary2 = document.getElementById('cards-container2');
    function display(filteredCards, filteredCards2) {
        var cardsToDisplay = filteredCards || cardConatiner;
        var cardsToDisplay2 = filteredCards2 || cardConatiner2;
        if (!cardsToDisplay)
            return;
        if (!cardsToDisplay2)
            return;
        var startIndex = gallery ? gallery.childElementCount : 0;
        var startIndex2 = gallary2 ? gallary2 === null || gallary2 === void 0 ? void 0 : gallary2.childElementCount : 0;
        var endIndex = Math.min(startIndex + 8, cardsToDisplay.length);
        var endIndex2 = Math.min(startIndex2 + 3, cardsToDisplay2.length);
        var cards = "";
        var cards2 = "";
        for (var i = startIndex; i < endIndex; i++) {
            cards +=
                "\n          <div class=\"col-md-3\">\n              <div class=\"card-body text-center\">\n                  <div class=\"card-img overflow-hidden d-block\">\n                      <img src=\"".concat(cardsToDisplay[i].imageSrc, "\"   alt=\"").concat(cardsToDisplay[i].title, "\" class=\"img-fluid rounded\">\n                  </div>\n                  <div class=\"card-content\">\n                      <p class=\"text-muted\">").concat(cardsToDisplay[i].title, "</p>\n                  </div>\n              </div>\n          </div>\n      ");
        }
        // let html = '';
        for (var i = startIndex2; i < endIndex2; i++) {
            cards2 += "\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2 class=\"fs-1x text-muted h5\">".concat(cardsToDisplay2[i].title, "</h2>\n            </div>\n        </div>\n        <div class=\"row\">");
            // عرض كل الصور في الكارت الحالي في صف واحد
            for (var _i = 0, _a = cardsToDisplay2[i].imageSrc; _i < _a.length; _i++) {
                var imageSrc = _a[_i];
                cards2 += "\n            <div class=\"col-md-".concat(12 / cardsToDisplay2[i].imageSrc.length, "\">\n                <div class=\"card-body text-center\">\n                    <div class=\"card-img overflow-hidden d-block\">\n                        <img src=\"").concat(imageSrc, "\" alt=\"").concat(cardsToDisplay2[i].title, "\" class=\"img-fluid rounded\">\n                    </div>\n                </div>\n            </div>\n        ");
            }
            cards2 += "</div>";
        }
        // عرض HTML في الصفحة
        if (gallery || gallary2) {
            gallery.innerHTML += cards;
            gallary2.innerHTML += cards2;
        }
        if (endIndex > cardsToDisplay.length && loadMoreCardsButton) {
            if (cardsToDisplay.length < 8) {
                loadMoreCardsButton.textContent = "";
            }
        }
        if (endIndex == cardsToDisplay.length && loadMoreCardsButton) {
            if (loadMoreCardsButton.textContent == "المزيد") {
                if (cardsToDisplay.length == endIndex) {
                    cardtitle.classList.add('d-block');
                    cardtitle.classList.add('d-md-block');
                }
            }
            if (cardsToDisplay2.length < 2) {
                loadMoreCardsButton.textContent = "";
            }
            cardtitle.classList.add('d-block');
            cardtitle.classList.add('d-md-block');
            gallary2.classList.add("d-flex");
            gallary2.classList.add("d-md-flex");
            if (endIndex2 == cardsToDisplay2.length && loadMoreCardsButton) {
                loadMoreCardsButton.textContent = "أقل";
                cardtitle.classList.add('d-none');
                cardtitle.classList.add('d-md-none');
            }
        }
    }
    display();
    if (loadMoreCardsButton) {
        loadMoreCardsButton.addEventListener("click", function () {
            if (loadMoreCardsButton.textContent === "أقل") {
                if (gallary2) {
                    //   gallery!.innerHTML = "";
                    gallary2.innerHTML = "";
                    cardtitle.classList.add('d-block');
                    cardtitle.classList.add('d-md-block');
                }
                loadMoreCardsButton.textContent = "المزيد";
            }
            else {
                display();
            }
        });
    }
    function searchCars(query) {
        var filteredCards = cardConatiner.filter(function (card) { return card.title.includes(query); });
        var filteredCards2 = cardConatiner2.filter(function (card2) { return card2.title.includes(query); });
        if (gallery) {
            gallery.innerHTML = ""; // Clear the current display
            gallary2.innerHTML = "";
            loadMoreCardsButton === null || loadMoreCardsButton === void 0 ? void 0 : loadMoreCardsButton.classList.add('d-none');
            display(filteredCards, filteredCards2); // Display filtered cards
        }
    }
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            var query = searchInput.value.trim();
            if (query === "") {
                if (gallery || gallary2) {
                    gallery.innerHTML = ""; // Clear the current display
                    gallary2.innerHTML = "";
                    display(); // Display all cards
                }
            }
            else {
                searchCars(query); // Search and display filtered cards
            }
        });
    }
    //   button to scroll top 
    document.addEventListener("DOMContentLoaded", function () {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        window.addEventListener("scroll", function () {
            if (window.pageYOffset > 100) {
                // Show the button when pageYOffset is greater than 100 pixels
                scrollToTopBtn.style.display = "block";
            }
            else {
                // Hide the button when pageYOffset is less than or equal to 100 pixels
                scrollToTopBtn.style.display = "none";
            }
        });
        scrollToTopBtn.addEventListener("click", function () {
            // Scroll to the top of the page smoothly
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });
    // ////////////////////slider
    document.addEventListener("DOMContentLoaded", function () {
        var filmtripimgs = document.querySelectorAll('.filmtripimg');
        var largeImage = document.getElementById('largeImg');
        filmtripimgs.forEach(function (filmtripimg) {
            filmtripimg.addEventListener('click', function () {
                largeImage.src = filmtripimg.src;
            });
        });
    });
})();
