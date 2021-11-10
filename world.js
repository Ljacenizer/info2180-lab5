document.addEventListener('DOMContentLoaded', function(){

  document.getElementById("lookup").addEventListener('click',(event) => {
        event.preventDefault();
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
          document.getElementById("result").innerHTML = xhr.responseText;
        }
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 404){
          alert("ERROR: " + xhr.status);
        }
      }
          xhr.open("GET","http://localhost/info2180-lab5/world.php?country="+(document.getElementById("country").value), true);
          xhr.send();
  });

  document.getElementById("lookupCities").addEventListener('click',(event) => {
      event.preventDefault();
      xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function(){
        if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
          document.getElementById("result").innerHTML=xhr.responseText;
        }
        if( xhr.readyState===XMLHttpRequest.DONE && xhr.status===404){
          alert("ERROR: " + xhr.status);
        }
      }
      xhr.open("GET","http://localhost/info2180-lab5/world.php?country="+(document.getElementById("country").value)+"&context=cities", true);
        xhr.send();
  });
}, false);