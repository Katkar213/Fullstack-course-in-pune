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



