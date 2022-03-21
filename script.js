alert("hello")

var p=document.getElementsByClassName("like");
  for (let i=0;i<p.length;i++)
  { 
    let jaime= p[i];

    jaime.addEventListener("click", function()
    {
      if(jaime.style.color=="red")
       {
       jaime.style.color="whit";
       }
      else
      {
       jaime.style.color="red";
      }
    })
  
  }
 

 var r=document.getElementsByClassName("quantity");
 var ba=document.getElementsByClassName("minus-btn");
    for(let i=0; i<r.length; i++)
    {
       let h=r[i];
       ba[i].addEventListener("click", function()
         {
            if(h.value>1)
               { h.value-=1;}
             else
               {h.value=1;} 
               
   
             })
             
  }
  var p=document.getElementsByClassName("quantity");
  var a=document.getElementsByClassName("plus-btn");
     for(let i=0; i<p.length; i++)
     {
    
        a[i].addEventListener("click", function()
          {
           p[i].value = parseInt((p[i].value),10)+1;
        
          })
 
   }
  
  












