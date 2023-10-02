loadDoc = () =>{
    const xhttp = new XMLHttpRequest();
  const readyState= 
    xhttp.onreadystatechange = function(){
    if (this.readyState ==1){
  
      document.getElementById("text").innerHTML ="Server connection established";
     }
     else if(this.readyState ==2)
     {
      document.getElementById("text").innerHTML ="Request Received";
     }
     else if(this.readyState ==4)
     {
  
      document.getElementById("text").innerHTML ="<img src='load.gif'>";
     }
    else if(this.readyState ==3 && this.status == 200)
      {
  
        document.getElementById("text").innerHTML =this.responseText;
      }
      else{
        document.getElementById("text").innerHTML ="Response Not Found";
      }
    };
   xhttp.open("GET", "content.txt",true);
   xhttp.send();
  }