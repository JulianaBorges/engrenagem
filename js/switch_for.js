for (let i = 0; i < 11; i++){
    setTimeout(()=>{
      console.log(i);
    },1000);
   
  }

  const animal = "dog"

  switch (animal) {
    case "cat":
      console.log("Gato")
      break;
    case "dog":
      console.log("Cachorro")
      break;
    case "shark":
      console.log("peixe")
      break; 
    default:
      console.log("nenhum aminal declarado")
      break;
  }


  // a pergunta é: pq o bloco switch executou primeiro que o for?