function randbetween(min, max) { // min and max included 
    var val = Math.floor(Math.random() * (max - min + 1) + min);
    return val;
  }
  
function returninrange(lo, hi, val){

      if(val>hi){return hi;}
      if(val<lo){return lo;}else{
      return val;
      }
  }

  function downloadtxt(txt,filename){

    var link = window.document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(txt));
    link.setAttribute("download", filename);
    link.click();
  }

  function castarrayasint(array){
    let result = array.map(function (x) { 
        return parseInt(x, 10); 
      });
      
    return result;
  }

  function getfreeid(array){
	
    array=array.sort(function(a, b){return a-b});

    for(let i=0;i<10;i++){
      console.log("idarray("+i+")="+array[i]);
  }

    for (let i=1;i<array.length;i++){
      if(array.includes(i,0)){}else{return i;}
    }
    
    return array.length;
  }

  function checkiffreeid(id, array){
    return !array.includes(id);
  }