


(function () {
// start first word for Car equipment - metal structures - hydraulic services - supplies - maintenance
//////  
  interface Car {
    id: number;
    imageSrc: string;
    title: string;
   
  }

const cardConatiner: Car[] =[
    
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
          "imageSrc": "../assets/Picture3.jpg",
          "title": "سيارة مجهزة لسحب الرواسب "
      },
      {
          "id": 4,
          "imageSrc": "../assets/Picture4.jpg",
          "title": "سيارة مجهزة لانقاذ السيارات"
      },
      {
          "id": 5,
          "imageSrc": "../assets/Picture5.jpg",
          "title": "سيارة مجهزة لجمع وكبس القمامة"
      },
      {
          "id": 6,
          "imageSrc": "../assets/Picture6.jpg",
          "title": "سيارة مجهزة لكنس الشوارع"
      },
      {
          "id": 7,
          "imageSrc": "../assets/Picture7.png",
          "title": "سيارة مجهزة انقاذ بونش."
      },
      {
          "id": 8,
          "imageSrc": "../assets/Picture8.jpg",
          "title": "سيارة مجهزة بونش تلسكوبى"
      },
      {
          "id": 9,
          "imageSrc": "../assets/Picture9.jpg",
          "title": "سيارة مجهزة نافورى"
      },
      {
          "id": 10,
          "imageSrc": "../assets/Picture10.jpg",
          "title": "سيارة مجهزة بصندوق وونش "
      },
      {
          "id": 11,
          "imageSrc": "../assets/Picture11.png",
          "title": "سيارة مجهزة بحزان لنقل السوائل"
      },
      {
          "id": 12,
          "imageSrc": "../assets/Picture12.jpg",
          "title": "سيارة مجهزة بسلة"
      },
      {
          "id": 13,
          "imageSrc": "../assets/Picture13.jpg",
          "title": "سيارة مجهزة اسعاف"
      },
      {
          "id": 14,
          "imageSrc": "../assets/Picture14.jpg",
          "title": "سيارة مجهزة قلاب "
      },
      {
          "id": 15,
          "imageSrc": "../assets/Picture15.jpg",
          "title": "سيارة مجهزة بصندوق"
      },
      {
          "id": 16,
          "imageSrc": "../assets/Picture16.jpg",
          "title": "مقطورة قلاب"
      },
      {
          "id": 17,
          "imageSrc": "../assets/Picture17.jpg",
          "title": "كلايشة مرور"
      },
      {
          "id": 18,
          "imageSrc": "../assets/Picture18.jpg",
          "title": "حاجز مرور"
      }
  ]

  ////////////////// end first word for Car equipment//////  

  
//////// start  second word  for Metal structure equipment - supplies - maintenance//////////////
  interface Car2 {
    id: number;
    imageSrc:string[];
    title: string;
   
  }
  const cardConatiner2: Car2[] =[
    
  
    {
        "id": 1,
        "imageSrc": ["../assets/Picture33.jpg","../assets/Picture34.jpg","../assets/Picture35.jpg"],
        "title": "تصنيع و تركيب وصيانة الابواب المتحركة العادية والكهربائية والاسوار المعدنية"
    },
    {
        "id": 2,
        "imageSrc": ["../assets/Picture21.jpg","../assets/Picture22.jpg","../assets/Picture23.jpg"],
        "title": "تصنيع وصيانة الكرفانات الثابتة والمحمولة مختلفة الاشكال والاحجام "
    },
    {
        "id": 3,
        "imageSrc": ["../assets/Picture24.jpg","../assets/Picture25.jpg","../assets/Picture26.jpg"],
        "title": "تصنيع وصيانة السلالم الثابتة والمحمولة المناسبة لجميع التطبيقات والاستخدامات"
    },
    {
        "id": 4,
        "imageSrc": ["../assets/Picture27.jpg","../assets/Picture28.jpg"],
        "title": "تصنيع وتركيب محطات انتظار السيارات والركاب "
    },
    {
        "id": 5,
        "imageSrc":[ "../assets/Picture19.jpg","../assets/Picture20.jpg"],
        "title": "تصنيع وصيانة وتركيب الجمالونات مختلفة الاشكال والاحجام وصيانتها"
    },
    {
        "id": 6,
        "imageSrc":[ "../assets/Picture30.jpg","../assets/Picture31.jpg"],
        "title": "تصنيع وتركيب الخزانات بمختلف أنواعها وأحجامها (الافقية والرأسية ) مضغوطة وغير مضغوطة"
    },
   
    {
        "id": 7,
        "imageSrc": ["../assets/Picture29.jpg"],
        "title": "تصنيع وتركيب وصيانة يافطات الدعايةوالاعلان"
    },
    {
        "id": 8,
        "imageSrc": ["../assets/Picture32.jpg",],
        "title": "تصنيع وصيانة رامبات للتحميل على الترلات والسيارات "
    }
]


// ///////// end second word  data ///////////////

  $(window).on('scroll', function () {
    const navbar = document.getElementById('containerr');

    var scrollY: any = $(this).scrollTop();
    if (scrollY >= 45) {
      $('nav').addClass('fixed-top');
      navbar!.classList.add('w-50');

    } else {
      $('nav').removeClass('fixed-top');
      navbar!.classList.remove('w-50');

      $('header').removeClass('d-none');
    }
  });


//   ///////////////////////////////header/////////////////////////////////


  // gallery
  const gallery: HTMLElement | null = document.getElementById('cards-container');
  const loadMoreCardsButton: HTMLElement | null = document.getElementById('load-more-cards-btn');
  const cardtitle: HTMLElement | null = document.getElementById('cardtitle');
  const searchInput: HTMLInputElement | null = document.getElementById('searchInput') as HTMLInputElement;
const gallary2:HTMLElement|null =document.getElementById('cards-container2');
  function display(filteredCards?: Car[] ,filteredCards2?: any): void {
    const cardsToDisplay = filteredCards || cardConatiner;
    const cardsToDisplay2 =filteredCards2||cardConatiner2

      if (!cardsToDisplay) return;
      if (!cardsToDisplay2) return;


      const startIndex: number = gallery ? gallery.childElementCount : 0 
      const startIndex2:number =gallary2!?gallary2?.childElementCount: 0;
      const endIndex: number = Math.min(startIndex + 8, cardsToDisplay.length);
      const endIndex2: number = Math.min(startIndex2 + 3, cardsToDisplay2.length);

      let cards: string = ``;
      let cards2: string = ``;

      for (let i: number = startIndex; i < endIndex; i++) {
        
          cards +=
              `
          <div class="col-md-3">
              <div class="card-body text-center">
                  <div class="card-img overflow-hidden d-block">
                      <img src="${cardsToDisplay[i].imageSrc}"   alt="${cardsToDisplay[i].title}" class="img-fluid rounded">
                  </div>
                  <div class="card-content">
                      <p class="text-muted">${cardsToDisplay[i].title}</p>
                  </div>
              </div>
          </div>
      `;
      }


    
        // let html = '';
for (let i = startIndex2; i < endIndex2; i++) {
    cards2 += `
        <div class="row">
            <div class="col-md-12">
                <h2 class="fs-1x text-muted h5">${cardsToDisplay2[i].title}</h2>
            </div>
        </div>
        <div class="row">`;

    // عرض كل الصور في الكارت الحالي في صف واحد
    for (const imageSrc of cardsToDisplay2[i].imageSrc) {
       cards2 += `
            <div class="col-md-${12 / cardsToDisplay2[i].imageSrc.length}">
                <div class="card-body text-center">
                    <div class="card-img overflow-hidden d-block">
                        <img src="${imageSrc}" alt="${cardsToDisplay2[i].title}" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        `;
    }

    cards2 += `</div>`;
}

// عرض HTML في الصفحة
    
      if (gallery || gallary2) {

          gallery!.innerHTML += cards;
          gallary2!.innerHTML += cards2;

      }

      if (endIndex > cardsToDisplay.length && loadMoreCardsButton) {

        if(cardsToDisplay.length<8){ loadMoreCardsButton.textContent = "";
        
    
        }
            }

      if(endIndex == cardsToDisplay.length && loadMoreCardsButton ){ 

        if(loadMoreCardsButton!.textContent == "المزيد"){
          
       if(cardsToDisplay.length == endIndex){
        cardtitle!.classList.add('d-block')
        cardtitle!.classList.add('d-md-block')
       }

        }
        if(cardsToDisplay2.length<2){ loadMoreCardsButton.textContent = ""}

        cardtitle!.classList.add('d-block')
        cardtitle!.classList.add('d-md-block')  
        gallary2!.classList.add("d-flex");
        gallary2!.classList.add("d-md-flex");
        

        if(endIndex2 == cardsToDisplay2.length && loadMoreCardsButton ){
            loadMoreCardsButton!.textContent = "أقل";

            cardtitle!.classList.add('d-none')
            cardtitle!.classList.add('d-md-none')
        }
       
      }
      
      
   
  }

  display();

  if (loadMoreCardsButton) {
      loadMoreCardsButton.addEventListener("click", function (): void {
          if (loadMoreCardsButton.textContent === "أقل") {
              if (gallary2) {
                //   gallery!.innerHTML = "";
                  gallary2!.innerHTML = "";
                  cardtitle!.classList.add('d-block')
           cardtitle!.classList.add('d-md-block') 

              }
      
              loadMoreCardsButton.textContent = "المزيد";
              
             
              
          }
           else {
              display();
              
           }
           
      });
  }

  function searchCars(query: string): void {
      const filteredCards =cardConatiner.filter(card => card.title.includes(query));
      const filteredCards2 =cardConatiner2.filter(card2 => card2.title.includes(query));

      if (gallery ) {
          gallery!.innerHTML = ""; // Clear the current display
          gallary2!.innerHTML = "";
          loadMoreCardsButton?.classList.add('d-none')
          display(filteredCards,filteredCards2 ); // Display filtered cards
          
      }
     
  }

  if (searchInput) {
      searchInput.addEventListener("input", function (): void {
          const query = searchInput.value.trim();
          if (query === "") {
              if (gallery || gallary2) {
                  gallery!.innerHTML = ""; // Clear the current display
                  gallary2!.innerHTML = "";

                  display(); // Display all cards
              }
          } else {
              searchCars(query); // Search and display filtered cards
              
             
          }
      });
  }



//   button to scroll top 

document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        // Show the button when pageYOffset is greater than 100 pixels
        scrollToTopBtn!.style.display = "block";
      } else {
        // Hide the button when pageYOffset is less than or equal to 100 pixels
        scrollToTopBtn!.style.display = "none";
      }
    });
  
    scrollToTopBtn!.addEventListener("click", function() {
      // Scroll to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

// ////////////////////slider


document.addEventListener("DOMContentLoaded", function() {
    const filmtripimgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('.filmtripimg');
    const largeImage: HTMLImageElement = document.getElementById('largeImg') as HTMLImageElement;
  
    filmtripimgs.forEach(filmtripimg => {
      filmtripimg.addEventListener('click', function() {
        largeImage.src = filmtripimg.src;
      });
    });
  });

})();

