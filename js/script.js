let arr = [
    "Diploma in Full Stack Development With University Certificate",
    "Corporate Training",
    "On Job Training With Live Projects",
    "100% Placement with submission of live project"
  ];
  let i = 0;
  setInterval(function() {
    document.getElementById("detail-box").innerText = arr[i];
    i = (i + 1) % arr.length;
  }, 2000);

  
// navbar color changing....

document.addEventListener("scroll",()=>{
  const header=document.getElementsByClassName("header_section");
  const list=document.getElementsByClassName("navbar-nav");
  const hamberger=document.getElementsByClassName("navbar-toggler");
  
  if(window.scrollY>0){
    header[0].classList.add("scrolled");
    list[0].classList.add("list-scroll");
    hamberger[0].classList.add("navbar-color");
  }
  else{
    header[0].classList.remove("scrolled");
    list[0].classList.remove("list-scroll");
    hamberger[0].classList.add("navbar-color");
  }
  })



  // slick slider...................
  $(document).ready(function(){
    $('.customer-logos').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 4,
      autoplay:true,
      autoplaySpeed:2000,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  



