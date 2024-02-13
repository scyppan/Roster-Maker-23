let newplayers = [];
let oldplayers=[];
let defaultplayersdata; // This will be assigned the fetched data
let finalizedplayers=[];

function defaultentrytgl(table) {
  switch(table){
    case "players":
      document.getElementById("uploadplayertblcontainer").style.display = document.getElementById("usedefaultplayers").checked ? "none" : "block";
    break;
    case "playernames":
      document.getElementById("uploadplayernamestblcontainer").style.display = document.getElementById("usedefaultplayernames").checked ? "none" : "block";
    break;
    case "dcplayernames":
      document.getElementById("uploaddcplayernamestblcontainer").style.display = document.getElementById("usedefaultdcplayernames").checked ? "none" : "block";
    break;
  }
}

function loadtemplate(){
	loggerupdate("• loading template");
	
	let file = document.getElementById("uploadtemplate").files[0];
  
	let reader = new FileReader();
	reader.readAsText(file);
	reader.onload=function(){
		
		let players = reader.result;
	  
	  loggerupdate("• parsing lines");
	  let lines = players.split('\n');
	  lines.shift();

	  lines.forEach(line=>{
		let thislinearray = line.split("\t");
		
		if(thislinearray[0]){
			loggerupdate("• attempting to read " + thislinearray[1] + " " + thislinearray[2] + (thislinearray[4] ? " (aka " + thislinearray[4] + ")" : ''));
	
      let gender=0;
      if(!document.getElementById("genderelection").checked){gender=1;}

			let player={
				nat: thislinearray[0],
				given: thislinearray[1] || "",
				sur: thislinearray[2] || "",
				jersey: thislinearray[3] || "",
				nick: thislinearray[4] || "",
				trnsfr: thislinearray[5] || "{Ignore}",
				ovr: parseInt(thislinearray[6]) || 65,
				pos1: getposition(thislinearray[7]) || 14,
				pos2: getposition(thislinearray[8]) || -1,
				pos3: getposition(thislinearray[9]) || -1,
				pos4: getposition(thislinearray[10]) || -1,
				foot: thislinearray[11] || "Right",
				weak: thislinearray[12] || "Bad",
				birthdate: Date.parse(thislinearray[13]) || Date.parse("01/01/2000"),
        roughage: getroughage(Date.parse(thislinearray[13])) || Date.parse("01/01/2000"),
				height: parseInt(thislinearray[14]) || 180,
				weight: parseInt(thislinearray[15]) || 75,
				attwrk: parseInt(thislinearray[16]) || 1,
				defwrk: parseInt(thislinearray[17]) || 1,
				skillmoves: parseInt(thislinearray[18]) || 1,
				playerid: parseInt(thislinearray[19]) || -1,
        gender: gender
        
			}

			if(player.nat && player.pos1 && player.pos2 && player.pos3 && player.pos4 && player.trnsfr && player.ovr){
				newplayers.push(player);
				loggerupdate("• successfully loaded " + thislinearray[1] + " " + thislinearray[2] + (thislinearray[4] ? " (aka " + thislinearray[4] + ")" : ''));
			}else{
				loggerupdate("• FAILED to load" + thislinearray[1] + " " + thislinearray[2] + (thislinearray[4] ? thislinearray[4] : ''));
			}
		}	
	  });
	  	loggerupdate("• " + newplayers.length + " players loaded");
      document.getElementById("chkreqbtn").disabled = false;
	}   
}

function makeplayers(){
    
    loggerupdate("• making players");
    finalizedplayers=[];

    newplayers.forEach(player=>{
      loggerupdate("• loading player demographics for " + player.given + " " + player.sur + (player.nick ? " (aka " + player.nick + ")" : ''));

      let nation=nations().find(x=>x.nation==player.nat) || nations().find(x=>x.nationid==140);

      //demo
      let demo=builddemographics(nation, player.height, player.weight, player.birthdate, player.ovr, player.id,player.given, player.sur, player.jersey, player.nick, player.foot, player.weak, player.gender, player.pos1, player.pos2, player.pos3, player.pos4, player.roughage, player.weak);
      
      //appr
      let attr=buildplayerattributes(player.pos1, player.pos2, player.pos3, player.pos4, player.ovr);

      //attr
      let appr=buildplayerappearances(player.gender, nation);

      //othr
      let othr=buildothervars(player.attwrk, player.defwrk, player.skillmoves);

      finalizedplayers.push({
        [player.nick ? player.nick : player.given + " " + player.sur]: { // Dynamically choose the property name
            demo,
            attr,
            appr,
            othr
        }
      });

      });  
      
      console.log(finalizedplayers);
      buildonlynewfile();

      //generate tables
      //generate a playertable
      //generate a editedplayernametable
}

function buildplayertablerow(player){
  
  let demo=player[Object.keys(player)[0]].demo;
  let appr=player[Object.keys(player)[0]].appr;
  let attr=player[Object.keys(player)[0]].attr;
  let othr=player[Object.keys(player)[0]].othr;

    let stringline = 
  + "\t" + demo.firstnameid //firstnameid
  + "\t" + demo.lastnameid //lastnameid
  + "\t" + demo.jerseynameid //jerseynameid
  + "\t" + demo.commonnameid //nicknameid
  + "\t" + appr.skintypecode
  + "\t" + othr.trait2 //trait2
  + "\t" + appr.haircolorcode //haircolorcode
  + "\t" + appr.facialhairtypecode //facialhairtypecode
  + "\t" + attr.curve
  + "\t" + othr.jerseystylecode //jerseystylecode
  + "\t" + attr.agility
  + "\t" + othr.tattooback //tattooback
  + "\t" + othr.accessorycode4 //accessorycode4
  + "\t" + othr.gksavetype //gksavetype
  + "\t" + attr.positioning
  + "\t" + othr.tattooleftarm //tattooleftarm
  + "\t" + appr.hairtypecode
  + "\t" + attr.standingtackle
  + "\t" + demo.preferredposition3
  + "\t" + attr.longpassing
  + "\t" + attr.penalties
  + "\t" + othr.animpenaltiesstartposcode //animpenaltiesstartposcode
  + "\t" + othr.isretiring //isretiring
  + "\t" + attr.longshots
  + "\t" + attr.gkdiving
  + "\t" + attr.interceptions
  + "\t" + othr.shoecolorcode2 //shoecolorcode2
  + "\t" + attr.crossing
  + "\t" + demo.potential
  + "\t" + attr.gkreflexes
  + "\t" + othr.finishingcode1 //finishingcode1
  + "\t" + attr.reactions
  + "\t" + attr.composure
  + "\t" + attr.vision
  + "\t" + demo.contractvaliduntil
  + "\t" + attr.finishing
  + "\t" + attr.dribbling
  + "\t" + attr.slidingtackle
  + "\t" + othr.accessorycode3 //accessorycode3
  + "\t" + othr.accessorycolourcode1 //accessorycolourcode1
  + "\t" + appr.headtypecode
  + "\t" + othr.driref // driref
  + "\t" + attr.sprintspeed
  + "\t" + demo.height
  + "\t" + othr.hasseasonaljersey //hasseasonaljersey
  + "\t" + othr.tattoohead // tattoohead
  + "\t" + demo.preferredposition2
  + "\t" + attr.strength
  + "\t" + othr.shoetypecode
  + "\t" + demo.birthdate
  + "\t" + demo.preferredposition1
  + "\t" + othr.tattooleftleg // tattooleftleg
  + "\t" + attr.ballcontrol
  + "\t" + othr.phypos // phypos
  + "\t" + attr.shotpower
  + "\t" + othr.trait1 // trait1
  + "\t" + othr.socklengthcode
  + "\t" + demo.weight
  + "\t" + othr.hashighqualityhead // hashighqualityhead
  + "\t" + othr.gkglovetypecode
  + "\t" + othr.tattoorightarm // tattoorightarm
  + "\t" + attr.balance
  + "\t" + demo.gender // gender
  + "\t" + othr.headassetid //headassetid
  + "\t" + attr.gkkicking
  + "\t" + othr.defspe //defspe
  + "\t" + demo.internationalrep
  + "\t" + attr.shortpassing
  + "\t" + attr.freekickaccuracy
  + "\t" + othr.skillmoves
  + "\t" + othr.faceposerpreset
  + "\t" + othr.usercaneditname //usercaneditname
  + "\t" + othr.avatarpomid //avatarpomid
  + "\t" + othr.attackingworkrate
  + "\t" + othr.finishingcode2 //finishingcode2
  + "\t" + attr.aggression
  + "\t" + attr.acceleration
  + "\t" + othr.paskic //paskic
  + "\t" + attr.headingaccuracy
  + "\t" + othr.iscustomized //iscustomized
  + "\t" + appr.eyebrowcode
  + "\t" + othr.runningcode2 //runningcode2
  + "\t" + othr.modifier //modifier
  + "\t" + attr.gkhandling
  + "\t" + appr.eyecolorcode
  + "\t" + othr.jerseysleevelengthcode //jerseysleevelengthcode
  + "\t" + othr.accessorycolourcode3 //accessorycolourcode3
  + "\t" + othr.accessorycode1 //accessorycode1
  + "\t" + othr.playerjointeamdate //playerjointeamdate
  + "\t" + othr.headclasscode //headclasscode
  + "\t" + othr.defensiveworkrate
  + "\t" + othr.tattoofront //tattoofront
  + "\t" + demo.nationalityid
  + "\t" + demo.foot
  + "\t" + appr.sideburnscode //sideburnscode
  + "\t" + demo.weakfootabilitytypecode
  + "\t" + attr.jumping
  + "\t" + demo.personality
  + "\t" + othr.gkkickstyle //gkkickstyle
  + "\t" + attr.stamina
  + "\t" + demo.playerid
  + "\t" + othr.accessorycolourcode4 //accessorycolourcode4
  + "\t" + attr.gkpositioning
  + "\t" + othr.headvariation //headvariation
  + "\t" + othr.skillmoveslikelihood //skillmoveslikelihood
  + "\t" + othr.shohan //shohan
  + "\t" + appr.skintonecode
  + "\t" + othr.shortstyle //shortstyle
  + "\t" + demo.overallrating
  + "\t" + othr.smallsidedshoetypecode //smallsidedshoetypecode
  + "\t" + othr.emotion //emotion
  + "\t" + othr.runstylecode //runstylecode
  + "\t" + othr.jerseyfit //jerseyfit
  + "\t" + othr.accessorycode2 //accessorycode2
  + "\t" + othr.shoedesigncode //shoedesigncode
  + "\t" + othr.shoecolorcode1 //shoecolorcode1
  + "\t" + othr.hairstylecode //hairstylecode
  + "\t" + othr.bodytypecode //bodytypecode
  + "\t" + othr.animpenaltiesstartposcode //animpenaltiesstartposcode
  + "\t" + othr.pacdiv //pacdiv
  + "\t" + attr.defensiveawareness
  + "\t" + othr.runningcode1 //runningcode1
  + "\t" + demo.preferredposition4
  + "\t" + attr.volleys
  + "\t" + othr.accessorycolourcode2 //accessorycolourcode2
  + "\t" + othr.tattoorightleg //tattoorightleg
  + "\t" + appr.haircolorcode // facialhaircolorcode
  ;
  
  return stringline;
}

function buildonlynewfile(){

  let lines = [playertableheaderrow()];

  finalizedplayers.forEach(player=>{
    lines.push(buildplayertablerow(player));
  });

  const now = new Date();
  const datetimeString = `${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;

  let txtcontent = lines.join("\n");
  let blob = new Blob([txtcontent], {type: "text/plain;charset=utf-8"});

  downloadtxt(txtcontent,`rm23output-players-${datetimeString}.txt`);

  //q: how can I add a date time stamp to the file name? Write syntax

  //a: You can use the Date object to get the current date and time, and then use the toLocaleString method to format it. Here's an example:
  //a:
  
}

function checkrequirements(){
  let issue=false;

  if(document.getElementById("usedefaultplayers").checked){
    loggerupdate("• Using default player table");

  }else{
    if(!document.getElementById("uploadplayertbl").files[0]){
      loggerupdate("• No player table file selected");
      issue=true;
    }
  }

  if(document.getElementById("usedefaultplayernames").checked){
    loggerupdate("• Using default playernames table");

  }else{
    if(!document.getElementById("uploadplayertbl").files[0]){
      loggerupdate("• No playernames table file selected");
      issue=true;
    }
  }

  if(document.getElementById("usedefaultdcplayernames").checked){
    loggerupdate("• Using default dcplayernames table");

  }else{
    if(!document.getElementById("uploadplayertbl").files[0]){
      loggerupdate("• No dcplayer table file selected");
      issue=true;
    }
  }

  if(!document.getElementById("uploadtemplate").files[0]){
    loggerupdate("• No template provided");
    issue=true;
  }
  
  if(!issue){
    loggerupdate("• No issues found!");
    document.getElementById("mkplybtn").disabled = false;
  }

}

function loggerupdate(newtext){
	let oldtext = document.getElementById("logger").value;
	document.getElementById("logger").value = newtext + "\n" + oldtext.trim() ;
}