     //Search
     const search = document.querySelector('#search');
     const searchInput = document.querySelector('#searchInput');
     search.addEventListener('click',()=>{
       searchInput.classList.toggle('active');
       console.log('click');
       
     })

     //
     const inspirationItem = document.querySelectorAll('.inspirationItem');
     function open(){
       this.classList.toggle('open');
     }
     function close(){
       this.classList.remove('open')
     }
     inspirationItem.forEach(ins => ins.addEventListener('mouseover',open));
     inspirationItem.forEach(ins => ins.addEventListener('mouseleave',close));

         /* Banner area */
         $('.slider').slick({
            autoplay: false
         });
         //service
         $('.serviceArea').slick({
           slidesToShow: 3,
           slidesToScroll: 1,
           autoplay: true,
           responsive: [
             {
               breakpoint: 991,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: true
               }
             },
             {
               breakpoint: 600,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1
               }
             },
           ]
         })
           /* Client feedback */

         //reivew
        $('.reviewBoxArea').slick({
               slidesToShow: 3,
               slidesToScroll: 1,
               autoplay: false,
               responsive: [
                 {
                   breakpoint: 991,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 700,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 },
               ]
             })
          //Product 
          $('.productShow').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.productShow',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '30px'
          });

          //partner
          $('.all-partner').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });