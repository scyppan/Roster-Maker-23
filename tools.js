function getfifabirthdateval(rawdate){
    return Math.trunc((rawdate/86400000)+141428);
}

function calculateovr(pos1, attr){

}

function readplayertable(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        let players = reader.result;
        let lines = players.split('\n');
        let foundplayers = [];
        for (let i = 1; i < lines.length; i++) {
          let thislinestring = lines[i].split("\t");
          let thisline = castarrayasint(thislinestring);
          if (thisline[100] != 0 && !Number.isNaN(thisline[0])) {
            foundplayers.push(thisline);
          }
        }
        resolve(foundplayers);
      };
      reader.onerror = (error) => reject(error);
    });
  }



