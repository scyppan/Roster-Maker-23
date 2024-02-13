function getfifabirthdateval(rawdate){
    return Math.trunc((rawdate/86400000)+141428);
}

function getposition(positionstring){
  let pos = positions().find(x=>x.position==positionstring);
  if(pos){return pos.id;}else{return -1;}
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

  function calculateovr(pos1, attr){
    
    let pos=setmap(pos1);
      switch (pos) {
          case 0:
              return Math.round(attr.reactions * 0.11 + attr.gkdiving * 0.21 + attr.gkhandling * 0.21 + attr.gkkicking * 0.05 + attr.gkpositioning * 0.21 + attr.gkreflexes * 0.21);
          case 2:
              return Math.round(attr.crossing * 0.12 + attr.shortpassing * 0.10 + attr.defensiveawareness * 0.07 + attr.standingtackle * 0.08 + attr.slidingtackle * 0.11 + attr.dribbling * 0.04 + attr.ballcontrol * 0.08 + attr.stamina * 0.1 + attr.acceleration * 0.04 + attr.sprintspeed * 0.06 + attr.reactions * 0.08 + attr.interceptions * 0.12);
          case 3:
              return Math.round(attr.crossing * 0.09 + attr.headingaccuracy * 0.04 + attr.shortpassing * 0.07 + attr.defensiveawareness * 0.08 + attr.standingtackle * 0.11 + attr.slidingtackle * 0.14 + attr.ballcontrol * 0.07 + attr.stamina * 0.08 + attr.acceleration * 0.05 + attr.sprintspeed * 0.07 + attr.reactions * 0.08 + attr.interceptions * 0.12);
          case 5:
              return Math.round(attr.headingaccuracy * 0.10 + attr.shortpassing * 0.05 + attr.defensiveawareness * 0.14 + attr.standingtackle * 0.17 + attr.slidingtackle * 0.10 + attr.ballcontrol * 0.04 + attr.jumping * 0.03 + attr.strength * 0.10 + attr.sprintspeed * 0.02 + attr.reactions * 0.05 + attr.aggression * 0.07 + attr.interceptions * 0.13);
          case 10:
              return Math.round(attr.shortpassing * 0.14 + attr.defensiveawareness * 0.09 + attr.standingtackle * 0.12 + attr.slidingtackle * 0.05 + attr.longpassing * 0.10 + attr.ballcontrol * 0.10 + attr.stamina * 0.06 + attr.strength * 0.04 + attr.reactions * 0.07 + attr.aggression * 0.10 + attr.interceptions * 0.13 + attr.vision * 0.08);
          case 12:
              return Math.round(attr.crossing * 0.12 + attr.finishing * 0.12 + attr.shortpassing * 0.10 + attr.dribbling * 0.12 + attr.longpassing * 0.10 + attr.ballcontrol * 0.10 + attr.stamina * 0.06 + attr.acceleration * 0.04 + attr.sprintspeed * 0.06 + attr.reactions * 0.08 + attr.positioning * 0.12 + attr.vision * 0.08);
          case 14:
              return Math.round(attr.finishing * 0.12 + attr.shortpassing * 0.10 + attr.standingtackle * 0.12 + attr.dribbling * 0.12 + attr.longpassing * 0.10 + attr.ballcontrol * 0.10 + attr.stamina * 0.06 + attr.longshots * 0.12 + attr.reactions * 0.08 + attr.interceptions * 0.12 + attr.positioning * 0.12 + attr.vision * 0.08);
          case 18:
              return Math.round(attr.finishing * 0.12 + attr.shortpassing * 0.10 + attr.dribbling * 0.12 + attr.longpassing * 0.10 + attr.ballcontrol * 0.10 + attr.longshots * 0.12 + attr.acceleration * 0.04 + attr.sprintspeed * 0.06 + attr.agility * 0.08 + attr.reactions * 0.08 + attr.positioning * 0.12 + attr.vision * 0.08);
          case 21:
              return Math.round(attr.finishing * 0.12 + attr.headingaccuracy * 0.12 + attr.shortpassing * 0.10 + attr.volleys * 0.12 + attr.dribbling * 0.12 + attr.ballcontrol * 0.10 + attr.shotpower * 0.12 + attr.acceleration * 0.04 + attr.sprintspeed * 0.06 + attr.reactions * 0.08 + attr.positioning * 0.12 + attr.vision * 0.08);
          case 23:
              return Math.round(attr.crossing * 0.12 + attr.finishing * 0.12 + attr.shortpassing * 0.10 + attr.dribbling * 0.12 + attr.ballcontrol * 0.10 + attr.longshots * 0.12 + attr.acceleration * 0.04 + attr.sprintspeed * 0.06 + attr.agility * 0.08 + attr.reactions * 0.08 + attr.positioning * 0.12 + attr.vision * 0.08);
          case 25:
              return Math.round(attr.finishing * 0.12 + attr.headingaccuracy * 0.12 + attr.shortpassing * 0.10 + attr.volleys * 0.12 + attr.dribbling * 0.12 + attr.ballcontrol * 0.10 + attr.shotpower * 0.12 + attr.strength * 0.12 + attr.longshots * 0.12 + attr.acceleration * 0.04 + attr.sprintspeed * 0.06 + attr.reactions * 0.08 + attr.positioning * 0.12 + attr.vision * 0.08);
      }


  }   


function rectifyovr(pos1, attr, targetovr){
  
  for(let i=0;i<1000;i++){ //1000 iterations should be enough to get the calculated ovr to match the target
      let calculatedovr=calculateovr(pos1, attr); 
      if(calculatedovr==targetovr){
        return attr;
      }else if(calculatedovr>targetovr){
        attr=adjustsingleattrval(attr, pos1, -1); 
      }else if(calculatedovr<targetovr){
        attr=adjustsingleattrval(attr, pos1, 1); 
      }
  }
}

function getroughage(rawbirthdate){
  const dayssincestartof1970 = Date.parse(rawbirthdate)/86400000;
  const startdate = Date.parse('2022-08-01')/86400000;
  const roughage = Math.round((startdate-dayssincestartof1970)/365,0);
  return roughage;
}

function getpotential(age, ovr, pos1, pos2, pos3, pos4){
	
  let gk=false;
  if(pos1==0||pos2==0||pos3==0||pos4==0){gk=true;}
  
  //based on Legend's procedure
  let functionalage = age;
  if(gk){functionalage--;}
  if(functionalage<16){functionalage=16;}
  
  switch(functionalage){
  	case 16: return randbetween(ovr+21,ovr+22);
    case 17: return randbetween(ovr+19,ovr+20);
    case 18: return randbetween(ovr+17,ovr+18);
    case 19: return randbetween(ovr+15,ovr+16);
    case 20: return randbetween(ovr+13,ovr+14);
    case 21: return randbetween(ovr+11,ovr+12);
    case 22: return randbetween(ovr+8,ovr+10);
    case 23: return randbetween(ovr+6,ovr+7);
    case 24: return randbetween(ovr+4,ovr+5);
    case 25: return randbetween(ovr+2,ovr+3);
    case 26: return ovr+1;
    default: return ovr;
  }
}
