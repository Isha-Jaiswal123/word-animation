let text = document.querySelector(".sec-text");

function textload() {
  setTimeout(() => {
    text.textContent = "Coder";
  }, 0);
  setTimeout(() => {
    text.textContent = "Software-Engineer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "intern";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Student";
  }, 12000);
}
textload();
setInterval(textload, 16000);
