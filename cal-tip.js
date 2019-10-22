
function result(){
    var bil=document.querySelector('.tbil').value;
    var radios=document.getElementsByName("service")
    var no=document.querySelector('.on').value;
    
    var tip;
    if(radios[0].checked)
     tip=0.15*bil;
    
    
     else if(radios[1].checked)
      tip=0.10*bil;

      else if(radios[2].checked)
      tip=0.05*bil;
  
      
      
      var ttip=tip/no;
      
      document.querySelector('.res').innerHTML='Total Tip = '+ttip;
     

}

document.querySelector('.btn').addEventListener('click',result);