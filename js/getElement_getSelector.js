    // diferenças entre Element e Elements
    const gentee = document.getElementById("texto");
    const foi    = document.getElementsByTagName("p"); 
    const peixe  = document.getElementById("peixe")
    const ave    = document.getElementsByClassName("ave")
    const frutas = document.querySelector(".banana")
    const blue   = document.querySelectorAll("li")

    for (let i = 0; i < blue.length; i++){
        blue[i].style.color = "blue";}


   gentee.textContent = "Fooooi!!"
   peixe.innerText = "Agora Foi!"
   frutas.innerHTML = "Banana com Mel"

   console.log(foi)