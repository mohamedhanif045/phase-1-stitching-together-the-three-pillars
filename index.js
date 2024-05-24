/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}

const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock server communication
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// Step 3: Add event listeners to each heart
for (const glyph of articleHearts) {
    glyph.addEventListener("click", handleLike);
  }
  
  function handleLike(e) {
    const heart = e.target;
    mimicServerCall()
      .then(function(serverMessage){
        heart.innerText = heart.innerText === "♡" ? "♥" : "♡";
        heart.classList.toggle("activated-heart");
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  }
  