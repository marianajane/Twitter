function agregarTextos() {
    var nuevo_espacio=document.createElement("p");
    var espacio=document.getElementById("newText");
    espacio.appendChild(nuevo_espacio);
	var articulo=document.getElementById("articulo").value;
	var autor=document.getElementById("autor").value
	var textos=articulo + "<br>" + autor;
	nuevo_espacio.innerHTML+=textos;
  }

/*nuevo_espacio.id="id_tweets";
	document.body.appendChild(nuevo_espacio);
	var tweets=document.getElementById("id_tweets");*/

function contar() { 
     var max = "140"; 
     var cadena = document.getElementById("articulo").value; 
     var longitud = cadena.length; 
             
          if(longitud <= max) { 
          document.getElementById("contador").value = max-longitud; 
          } else { 
          document.getElementById("articulo").value = cadena.substr(0, max);
          } 
    }