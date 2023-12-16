// Ищем по классу typewriter
const paragraphs = document.querySelectorAll('.typewriter');  

paragraphs.forEach(paragraph => {
  const cursor = document.querySelectorAll('.cursor'); 
  const textSpan = paragraph.querySelector('.text');

  const text = textSpan.innerText;
  
  let i = 0;

  const printText = () => {
   if(i < text.length) {
      textSpan.innerText = text.substring(0, i+1);
      

      i++;
      setTimeout(printText, 10); 
    }
      showHiddenElements();
  }

  printText();
  

});

