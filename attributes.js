let global="";

function buildplayerattributes(pos1, pos2, pos3, pos4, ovr){
	let attr=setinitialatttributes(ovr);
	attr = gkadjustment(pos1, pos2, pos3, pos4, ovr, attr);
	attr = getattributesforpos(pos4, ovr, attr);
	attr = getattributesforpos(pos3, ovr, attr);
	attr = getattributesforpos(pos2, ovr, attr);
	attr = getattributesforpos(pos1, ovr, attr);
	
    attr = rectifyovr(pos1, attr, ovr); 

	return attr;
}

function setinitialatttributes(ovr){
	let attributes={
	curve: baseval(ovr),
	agility: baseval(ovr),
	positioning: baseval(ovr),
	standingtackle: baseval(ovr),
	longpassing: baseval(ovr),
	penalties: baseval(ovr),
	longshots: baseval(ovr),
	gkdiving: baseval(ovr),
	interceptions: baseval(ovr),
	crossing: baseval(ovr),
	gkreflexes: baseval(ovr),
	reactions: baseval(ovr),
	composure: baseval(ovr),
	vision: baseval(ovr),
	finishing: baseval(ovr),
	dribbling: baseval(ovr),
	slidingtackle: baseval(ovr),
	sprintspeed: baseval(ovr),
	strength: baseval(ovr),
	ballcontrol: baseval(ovr),
	shotpower: baseval(ovr),
	balance: baseval(ovr),
	gkkicking: baseval(ovr),
	shortpassing: baseval(ovr),
	freekickaccuracy: baseval(ovr),
	aggression: baseval(ovr),
	acceleration: baseval(ovr),
	headingaccuracy: baseval(ovr),
	gkhandling: baseval(ovr),
	jumping: baseval(ovr),
	stamina: baseval(ovr),
	gkpositioning: baseval(ovr),
	defensiveawareness: baseval(ovr),
	volleys: baseval(ovr)
	}
	
	return attributes;
}

function gkadjustment(pos1, pos2, pos3, pos4, ovr, attr){

	if(pos1==0||pos2==0||pos3==0||pos4==0){
		attr.reactions = getattributevalue(ovr);
		attr.gkdiving = getattributevalue(ovr);
		attr.gkreflexes = getattributevalue(ovr);
		attr.gkhandling = getattributevalue(ovr);
		attr.gkpositioning = getattributevalue(ovr);
	}else if(pos1>0||pos2>0||pos3>0||pos4>0){
		attr.curve= basefieldval(ovr),
		attr.agility= basefieldval(ovr),
		attr.positioning= basefieldval(ovr),
		attr.standingtackle= basefieldval(ovr),
		attr.longpassing= basefieldval(ovr),
		attr.penalties= basefieldval(ovr),
		attr.longshots= basefieldval(ovr),
		attr.interceptions= basefieldval(ovr),
		attr.crossing= basefieldval(ovr),
		attr.reactions= basefieldval(ovr),
		attr.composure= basefieldval(ovr),
		attr.vision= basefieldval(ovr),
		attr.finishing= basefieldval(ovr),
		attr.dribbling= basefieldval(ovr),
		attr.slidingtackle= basefieldval(ovr),
		attr.sprintspeed= basefieldval(ovr),
		attr.strength= basefieldval(ovr),
		attr.ballcontrol= basefieldval(ovr),
		attr.shotpower= basefieldval(ovr),
		attr.balance= basefieldval(ovr),
		attr.gkkicking= basefieldval(ovr),
		attr.shortpassing= basefieldval(ovr),
		attr.freekickaccuracy= basefieldval(ovr),
		attr.aggression= basefieldval(ovr),
		attr.acceleration= basefieldval(ovr),
		attr.headingaccuracy= basefieldval(ovr),
		attr.jumping= basefieldval(ovr),
		attr.stamina= basefieldval(ovr),
		attr.defensiveawareness= basefieldval(ovr),
		attr.volleys= basefieldval(ovr)
	}
	
	return attr;
}

function getattributesforpos(pos, ovr, attr){

    switch(setmap(pos)){
		
		case 2:
            attr.crossing = Math.max(attr.crossing, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.defensiveawareness = Math.max(attr.defensiveawareness, getattributevalue(ovr));
            attr.standingtackle = Math.max(attr.standingtackle, getattributevalue(ovr));
            attr.slidingtackle = Math.max(attr.slidingtackle, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.stamina = Math.max(attr.stamina, getwideplayerphysicalskills(ovr));
            attr.acceleration = Math.max(attr.acceleration, getwideplayerphysicalskills(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getwideplayerphysicalskills(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.interceptions = Math.max(attr.interceptions, getattributevalue(ovr));
            break;
        case 3:
            attr.crossing = Math.max(attr.crossing, getattributevalue(ovr));
            attr.headingaccuracy = Math.max(attr.headingaccuracy, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.defensiveawareness = Math.max(attr.defensiveawareness, getattributevalue(ovr));
            attr.standingtackle = Math.max(attr.standingtackle, getattributevalue(ovr));
            attr.slidingtackle = Math.max(attr.slidingtackle, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.stamina = Math.max(attr.stamina, getwideplayerphysicalskills(ovr));
            attr.acceleration = Math.max(attr.acceleration, getwideplayerphysicalskills(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getwideplayerphysicalskills(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.interceptions = Math.max(attr.interceptions, getattributevalue(ovr));
            break;
		case 5:
            attr.headingaccuracy = Math.max(attr.headingaccuracy, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.defensiveawareness = Math.max(attr.defensiveawareness, getattributevalue(ovr));
            attr.standingtackle = Math.max(attr.standingtackle, getattributevalue(ovr));
            attr.slidingtackle = Math.max(attr.slidingtackle, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.jumping = Math.max(attr.jumping, getattributevalue(ovr));
            attr.strength = Math.max(attr.strength, getattributevalue(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getattributevalue(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.aggression = Math.max(attr.aggression, getattributevalue(ovr));
            attr.interceptions = Math.max(attr.interceptions, getattributevalue(ovr));
            break;

        case 10:
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.defensiveawareness = Math.max(attr.defensiveawareness, getattributevalue(ovr));
            attr.standingtackle = Math.max(attr.standingtackle, getattributevalue(ovr));
            attr.slidingtackle = Math.max(attr.slidingtackle, getattributevalue(ovr));
            attr.longpassing = Math.max(attr.longpassing, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.stamina = Math.max(attr.stamina, getattributevalue(ovr));
            attr.strength = Math.max(attr.strength, getattributevalue(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.aggression = Math.max(attr.aggression, getattributevalue(ovr));
            attr.interceptions = Math.max(attr.interceptions, getattributevalue(ovr));
            attr.vision = Math.max(attr.vision, getattributevalue(ovr));
            break;

        case 12:
            attr.crossing = Math.max(attr.crossing, getattributevalue(ovr));
            attr.finishing = Math.max(attr.finishing, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.longpassing = Math.max(attr.longpassing, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.stamina = Math.max(attr.stamina, getwideplayerphysicalskills(ovr));
            attr.acceleration = Math.max(attr.acceleration, getwideplayerphysicalskills(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getwideplayerphysicalskills(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.positioning = Math.max(attr.positioning, getattributevalue(ovr));
            attr.vision = Math.max(attr.vision, getattributevalue(ovr));
            break;
						case 14:
            attr.finishing = Math.max(attr.finishing, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.standingtackle = Math.max(attr.standingtackle, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.longpassing = Math.max(attr.longpassing, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.stamina = Math.max(attr.stamina, getattributevalue(ovr));
            attr.longshots = Math.max(attr.longshots, getattributevalue(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.interceptions = Math.max(attr.interceptions, getattributevalue(ovr));
            attr.positioning = Math.max(attr.positioning, getattributevalue(ovr));
            attr.vision = Math.max(attr.vision, getattributevalue(ovr));
            break;

        case 18:
            attr.finishing = Math.max(attr.finishing, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.longpassing = Math.max(attr.longpassing, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.longshots = Math.max(attr.longshots, getattributevalue(ovr));
            attr.acceleration = Math.max(attr.acceleration, getattributevalue(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getattributevalue(ovr));
            attr.agility = Math.max(attr.agility, getattributevalue(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.positioning = Math.max(attr.positioning, getattributevalue(ovr));
            attr.vision = Math.max(attr.vision, getattributevalue(ovr));
            break;

        case 21:
            attr.finishing = Math.max(attr.finishing, getattributevalue(ovr));
            attr.headingaccuracy = Math.max(attr.headingaccuracy, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.shotpower = Math.max(attr.shotpower, getattributevalue(ovr));
            attr.longshots = Math.max(attr.longshots, getattributevalue(ovr));
            attr.acceleration = Math.max(attr.acceleration, getattributevalue(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getattributevalue(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.positioning = Math.max(attr.positioning, getattributevalue(ovr));
            attr.vision = Math.max(attr.vision, getattributevalue(ovr));
            break;
						case 23:
            attr.crossing = Math.max(attr.crossing, getattributevalue(ovr));
            attr.finishing = Math.max(attr.finishing, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.longshots = Math.max(attr.longshots, getattributevalue(ovr));
            attr.acceleration = Math.max(attr.acceleration, getwideplayerphysicalskills(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getwideplayerphysicalskills(ovr));
            attr.agility = Math.max(attr.agility, getwideplayerphysicalskills(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.positioning = Math.max(attr.positioning, getattributevalue(ovr));
            attr.vision = Math.max(attr.vision, getattributevalue(ovr));
            break;

        case 25:
            attr.finishing = Math.max(attr.finishing, getattributevalue(ovr));
            attr.headingaccuracy = Math.max(attr.headingaccuracy, getattributevalue(ovr));
            attr.shortpassing = Math.max(attr.shortpassing, getattributevalue(ovr));
            attr.volleys = Math.max(attr.volleys, getattributevalue(ovr));
            attr.dribbling = Math.max(attr.dribbling, getattributevalue(ovr));
            attr.ballcontrol = Math.max(attr.ballcontrol, getattributevalue(ovr));
            attr.shotpower = Math.max(attr.shotpower, getattributevalue(ovr));
            attr.strength = Math.max(attr.strength, getattributevalue(ovr));
            attr.longshots = Math.max(attr.longshots, getattributevalue(ovr));
            attr.acceleration = Math.max(attr.acceleration, getattributevalue(ovr));
            attr.sprintspeed = Math.max(attr.sprintspeed, getattributevalue(ovr));
            attr.reactions = Math.max(attr.reactions, getattributevalue(ovr));
            attr.positioning = Math.max(attr.positioning, getattributevalue(ovr));
            break;
		}	
		
		return attr;
}

function setmap(pos){
	const positionMapping = {
  1: 5, 4: 5, 6: 5, // Map positions 1, 4, and 6 to 5
  8: 2, // Map position 8 to 2
  7: 3, // Map position 7 to 3
  9: 10, 11: 10, // Map positions 9 and 11 to 10
  16: 12, // Map position 16 to 12
  14: 14, 15: 14, // Keep positions 14 as is, and map 15 to 14
  17: 18, 19: 18, // Map positions 17 and 19 to 18
  20: 21, 22: 21, // Map positions 20 and 22 to 21
  27: 23, // Map position 27 to 23
  24: 25, 26: 25, // Map positions 24 and 26 to 25
};

// Simplify position based on the mapping
pos = positionMapping[pos] || pos; 
return pos;	
}

function baseval(ovr){
	let lo= 20;
  	let hi= 39;

	if(ovr<59){lo=15;hi=35;}
    if(ovr<49){lo=10;hi=25;}
    if(ovr<39){lo=5;hi=15;}
    if(ovr<29){lo=1;hi=10;}
    if(ovr<19){lo=1;hi=8;}
    if(ovr<9){lo=1;hi=5;}

	let rnd = randbetween(lo,hi);
  	return returninrange(1,99,rnd);
}

function basefieldval(ovr){
	
	let lo= 40;
  	let hi= 60;

	if(ovr<69){lo=38;hi=48;}
	if(ovr<59){lo=28;hi=38;}
    if(ovr<49){lo=18;hi=28;}
    if(ovr<39){lo=13;hi=23;}
    if(ovr<29){lo=8;hi=12;}
    if(ovr<19){lo=5;hi=9;}
    if(ovr<9){lo=1;hi=5;}

	let rnd = randbetween(lo,hi);
  	return returninrange(1,99,rnd);

}

function getwideplayerphysicalskills(ovr){
	let lo= Math.round(ovr*0.975,0);
  	let hi= Math.round(ovr*1.250,0);
	let rnd = randbetween(lo,hi);
  	return returninrange(1,99,rnd);
}

function getattributevalue(ovr){
    let lo= Math.round(ovr*0.90,0);
    let hi= Math.round(ovr*1.05,0);
    let rnd = randbetween(lo,hi);
    return returninrange(1,99,rnd);
}

function adjustsingleattrval(attr, pos1, mod) {

    // Get the key attributes for the given position
    let attributesOfImportance = attributesbyposition(pos1);

    // Randomly select one attribute to adjust
    let rndIndex = Math.floor(Math.random() * attributesOfImportance.length);
    let attrToAdjust = attributesOfImportance[rndIndex];
    
    //let oldValue = attr[attrToAdjust];

    // Ensure the modification does not exceed the attribute bounds
    let newValue = Math.max(1, Math.min(99, attr[attrToAdjust] + mod));

    // Apply the adjustment
    attr[attrToAdjust] = newValue;

    return attr; // Return the modified attributes object
}

function attributesbyposition(pos1){
    let pos=setmap(pos1);
    switch(pos){
        case 0: return ["reactions", "gkdiving","gkhandling","gkkicking","gkpositioning","gkreflexes"];
        case 2: return ["crossing","shortpassing","defensiveawareness","standingtackle","slidingtackle","dribbling","ballcontrol","stamina","acceleration","sprintspeed","reactions","interceptions"];
        case 3: return ["crossing","headingaccuracy","shortpassing","defensiveawareness","standingtackle","slidingtackle","ballcontrol","stamina","acceleration","sprintspeed","reactions","interceptions"];
        case 5: return ["headingaccuracy","shortpassing","defensiveawareness","standingtackle","slidingtackle","ballcontrol","jumping","strength","sprintspeed","reactions","aggression","interceptions"];
        case 10: return ["shortpassing","defensiveawareness","standingtackle","slidingtackle","longpassing","ballcontrol","stamina","strength","reactions","aggression","interceptions","vision"];
        case 12: return ["crossing","finishing","shortpassing","dribbling","longpassing","ballcontrol","stamina","acceleration","sprintspeed","reactions","positioning","vision"];
        case 14: return ["finishing","shortpassing","standingtackle","dribbling","longpassing","ballcontrol","stamina","longshots","reactions","interceptions","positioning","vision"];
        case 18: return ["finishing","shortpassing","dribbling","longpassing","ballcontrol","longshots","acceleration","sprintspeed","agility","reactions","positioning","vision"];
        case 21: return ["finishing","headingaccuracy","shortpassing","volleys","dribbling","ballcontrol","shotpower","acceleration","sprintspeed","reactions","positioning","vision"];
        case 23: return ["crossing","finishing","shortpassing","dribbling","ballcontrol","longshots","acceleration","sprintspeed","agility","reactions","positioning","vision"];
        case 25: return ["finishing","headingaccuracy","shortpassing","volleys","dribbling","ballcontrol","shotpower","strength","longshots","acceleration","sprintspeed","reactions","positioning","vision"];
    }
}



