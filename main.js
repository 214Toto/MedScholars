//scroll navbar background

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0);
});



//show olo hide faq answer

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //change icon 
    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-plus') {
        icon.className = 'uil uil-minus';
     } else {
      icon.className = "uil uil-plus"
     }
  });
})

const bton = document.querySelectorAll('.bton');

bton.forEach(bton => {
  bton.addEventListener('click', () =>{
    bton.classList.toggle('open');
  });
});


  //dropdown menu 
  const menu = document.querySelector(".nav__menu");
  const menubtn = document.querySelector("#open-menu-btn");
  const closebtn = document.querySelector("#close-menu-btn");
 

  menubtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
  });


  const closenav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
  };

  closebtn.addEventListener('click', closenav);


  //trying out terms shit

//   const course = document.querySelector(".bton")
//   const term = document.querySelector(".terms")



//   course.addEventListener('click', () => {
//     term.classList.toggle = ('open')
//   });



// document.getElementById("bton").addEventListener("click", function() {
//   var mainbutton = document.getElementById("bton");
//   var hiddenbonus = document.getElementById("terms");

//   mainbutton.addEventListener("click", function() {
//     if (hiddenbonus.style.display === "none") {
//       hiddenbonus.style.display = "block";
//     } else {
//       hiddenbonus.style.display = "none"
//     }
//   });
// });