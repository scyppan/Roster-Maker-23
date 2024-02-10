let uploadedplayers = [];

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
	
			let player={
				nat: thislinearray[0],
				given: thislinearray[1] || "",
				sur: thislinearray[2] || "",
				jersey: thislinearray[3] || "",
				nick: thislinearray[4] || "",
				trnsfr: thislinearray[5] || "{Ignore}",
				ovr: parseInt(thislinearray[6]) || 65,
				pos1: thislinearray[7] || "CM",
				pos2: thislinearray[8] || "{none}",
				pos3: thislinearray[9] || "{none}",
				pos4: thislinearray[10] || "{none}",
				foot: thislinearray[11] || "Right",
				weak: thislinearray[12] || "Bad",
				birthdate: Date.parse(thislinearray[13]) || Date.parse("01/01/2000"),
				height: parseInt(thislinearray[14]) || 180,
				weight: parseInt(thislinearray[15]) || 75,
				attwrk: parseInt(thislinearray[16]) || 1,
				defwrk: parseInt(thislinearray[17]) || 1,
				skillmoves: parseInt(thislinearray[18]) || 1,
				playerid: parseInt(thislinearray[19]) || -1
			}

			if(player.nat && player.pos1 && player.pos2 && player.pos3 && player.pos4 && player.trnsfr && player.ovr){
				uploadedplayers.push(player);
				loggerupdate("• successfully loaded " + thislinearray[1] + " " + thislinearray[2] + (thislinearray[4] ? " (aka " + thislinearray[4] + ")" : ''));
			}else{
				loggerupdate("• FAILED to load" + thislinearray[1] + " " + thislinearray[2] + (thislinearray[4] ? thislinearray[4] : ''));
			}
		}	
	  });
	  	loggerupdate("• " + uploadedplayers.length + " players loaded");
        makeplayers();
	}   
}

function makeplayers(){
    loggerupdate("• Beginning to make players");
    
    //demo
    builddemographics()

    //appr

    //attr
}

function buildrow(givenname, surname, demo, appr, attr){
        
    let stringline = 
  + "\t" + givenname //firstnameid
  + "\t" + surname //lastnameid
  + "\t" + "NULL" //jerseynameid
  + "\t" + "NULL" //nicknameid
  + "\t" + 0 //skintypecode
  + "\t" + 0 //trait2
  + "\t" + appr.haircolorcode
  + "\t" + appr.facialhairtypecode
  + "\t" + attr.curve
  + "\t" + randbetween(0,1) //jerseystylecode
  + "\t" + attr.agility
  + "\t" + 0 //tattooback
  + "\t" + 0 //accessorycode4
  + "\t" + randbetween(0,1) //gksavetype
  + "\t" + attr.positioning
  + "\t" + 0 //tattooleftarm
  + "\t" + appr.hairtypecode
  + "\t" + attr.standingtackle
  + "\t" + attr.pos3
  + "\t" + attr.longpassing
  + "\t" + attr.penalties
  + "\t" + 0 //animpenaltiesstartposcode
  + "\t" + 0 //isretiring
  + "\t" + attr.longshots
  + "\t" + attr.gkdiving
  + "\t" + attr.interceptions
  + "\t" + 31 //shoecolorcode2
  + "\t" + attr.crossing
  + "\t" + attr.potential
  + "\t" + attr.gkreflexes
  + "\t" + 0 //finishingcode1
  + "\t" + attr.reactions
  + "\t" + attr.composure
  + "\t" + attr.vision
  + "\t" + demo.contractvaliduntil
  + "\t" + attr.finishing
  + "\t" + attr.dribbling
  + "\t" + attr.slidingtackle
  + "\t" + 0 //accessorycode3
  + "\t" + 0 //accessorycolourcode1
  + "\t" + appr.headtypecode
  + "\t" + 66 // driref
  + "\t" + attr.sprintspeed
  + "\t" + demo.height
  + "\t" + 0 //hasseasonaljersey
  + "\t" + 0 // tattoohead
  + "\t" + attr.pos2
  + "\t" + attr.strength
  + "\t" + appr.shoetypecode
  + "\t" + demo.birthdate
  + "\t" + appr.pos1
  + "\t" + 0 // tattooleftleg
  + "\t" + attr.ballcontrol
  + "\t" + 66 // phypos
  + "\t" + attr.shotpower
  + "\t" + 0 // trait1
  + "\t" + appr.socklength
  + "\t" + demo.weight
  + "\t" + 0 // hashighqualityhead
  + "\t" + appr.gkglovetypecode
  + "\t" + 0 // tattoorightarm
  + "\t" + attr.balance
  + "\t" + 0 // gender
  + "\t" + 267277 //headassetid
  + "\t" + attr.gkkicking
  + "\t" + 62 //defspe
  + "\t" + demo.internationalrep
  + "\t" + attr.shortpassing
  + "\t" + attr.freekickaccuracy
  + "\t" + attr.skillmoves
  + "\t" + appr.faceposerpreset
  + "\t" + 1 //usercaneditname
  + "\t" + 0 //avatarpomid
  + "\t" + attr.attackingworkrate
  + "\t" + 0 //finishingcode2
  + "\t" + attr.aggression
  + "\t" + attr.acceleration
  + "\t" + 66 //paskic
  + "\t" + attr.headingaccuracy
  + "\t" + 1 //iscustomized
  + "\t" + appr.eyebrowcode
  + "\t" + 0 //runningcode2
  + "\t" + 0 //modifier
  + "\t" + attr.gkhandling
  + "\t" + appr.eyecolorcode
  + "\t" + 1 //jerseysleevelengthcode
  + "\t" + 0 //accessorycolourcode3
  + "\t" + 0 //accessorycode1
  + "\t" + 160273 //playerjointeamdate
  + "\t" + 1 //headclasscode
  + "\t" + attr.defensiveworkrate
  + "\t" + 0 //tattoofront
  + "\t" + demo.natid
  + "\t" + demo.foot
  + "\t" + 0 //sideburnscode
  + "\t" + demo.weakfoot
  + "\t" + attr.jumping
  + "\t" + demo.personality
  + "\t" + 0 //gkkickstyle
  + "\t" + attr.stamina
  + "\t" + demo.playerid
  + "\t" + 0 //accessorycolourcode4
  + "\t" + attr.gkpositioning
  + "\t" + 0 //headvariation
  + "\t" + 2 //skillmoveslikelihood
  + "\t" + 60 //shohan
  + "\t" + appr.skintone
  + "\t" + 0 //shortstyle
  + "\t" + attr.ovr
  + "\t" + 503 //smallsidedshoetypecode
  + "\t" + 2 //emotion
  + "\t" + 0 //runstylecode
  + "\t" + 0 //jerseyfit
  + "\t" + 0 //accessorycode2
  + "\t" + 0 //shoedesigncode
  + "\t" + 30 //shoecolorcode1
  + "\t" + 0 //hairstylecode
  + "\t" + 0 //bodytypecode
  + "\t" + 0 //animpenaltiesstartposcode
  + "\t" + 60 //pacdiv
  + "\t" + attr.defensiveawareness
  + "\t" + 0 //runningcode1
  + "\t" + attr.pos4
  + "\t" + attr.volleys
  + "\t" + 0 //accessorycolourcode2
  + "\t" + 0 //tattoorightleg
  + "\t" + appr.haircolorcode // facialhaircolorcode
 	  
  ;
  
  return stringline;
}

function loggerupdate(newtext){
	let oldtext = document.getElementById("logger").value;
	document.getElementById("logger").value = newtext + "\n" + oldtext.trim() ;
}