function getfifabirthdateval(rawdate){
    return Math.trunc((rawdate/86400000)+141428);
}

function calculateovr(pos1, attr){

}

function readplayertable(file) {
  console.log(file);
  let reader = new FileReader();
  
  
  reader.readAsText(file);

  reader.onload=function(){
  	let playersresult = reader.result;
    
    let lines = playersresult.split('\n');
    let theseplayers = [];
    
    for(let i=1;i<lines.length;i++){
    	let thislinestring = lines[i].split("\t");
      let thisline = castarrayasint(thislinestring);
      if(thisline[100]!=0){//ensures that the player has an ID
      	if(Number.isNaN(thisline[0])){}else{
      		theseplayers.push(thisline);
          
        }
      }
    }
    return theseplayers;
  }
    
  }

  function readdefaultplayertable(txt){
    
  }



