 //auto-text
 const typedTextSpan = document.querySelector(".auto");
 const cursor = document.querySelector(".auto2");
 
 const words = ["Programmer", "Developer", "Desiner"];
 const typingDelay = 200;
 const erasingDelay = 200;
 const newLetterDelay = 20;
 let index = 0;
 let charIndex = 0;
 
 document.addEventListener("DOMContentLoaded", () => {
   if (words.length) {
     setTimeout(type, newLetterDelay);
   }
 });
 
 function type() {
   if (charIndex < words[index].length) {
     typedTextSpan.textContent += words[index].charAt(charIndex);
     charIndex++;
     setTimeout(type, typingDelay);
   } else {
     setTimeout(erase, newLetterDelay);
   }
 }
 
 function erase() {
   if (charIndex > 0) {
     typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
     charIndex--;
     setTimeout(erase, erasingDelay);
   } else {
     index++;
     if (index >= words.length) {
       index = 0;
     }
     setTimeout(type, typingDelay + 100);
   }
 }
 function classToggle() {
   const navs = document.querySelectorAll('.nav')
   
   navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
 }
 
 document.querySelector('.nav')
   .addEventListener('click', classToggle);
 
 