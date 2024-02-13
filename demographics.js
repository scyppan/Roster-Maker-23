function builddemographics(nation, height, weight, birthdate, ovr, playerid, givenname, surname, nickname, jerseyname, foot, weakfoot, gender, pos1, pos2, pos3, pos4, roughage, weakfoot){
    
    let demo={
        nationalityid: nation.nationid || 140,
        contractvaliduntil: randbetween(2024,2028) || 2026,
        height: height || 180,
        weight: weight || 75,
        birthdate: getfifabirthdateval(birthdate) || 141428,
        internationalrep: getinternationalrep(ovr) || 1 ,
        foot: getfoot(foot) || 1,
        personality: randbetween(1,5) || 3,
        playerid: getplayerid(playerid),
        firstnameid: findnameid(givenname) || 0,
        lastnameid: findnameid(surname) || 0,
        jerseynameid: findnameid(nickname) || 0,
        commonnameid: findnameid(jerseyname) || 0,
        weakfootabilitytypecode: weakfoot || 2,
        personality: randbetween(1,5) || 3,
        gender: gender || 0,
        preferredposition1: pos1 || 14,
        preferredposition2: pos2 || 0,
        preferredposition3: pos3 || 0,
        preferredposition4: pos4 || 0,
        overallrating: ovr || 60,
        potential: getpotential(roughage, ovr, pos1, pos2, pos3, pos4) || 60,
        weakfootabilitytypecode: getweakfoot(weakfoot) || 2

    };

    return demo;

}

function getinternationalrep(ovr){
    let internationalrep = 1;
    if(ovr>70){internationalrep=2}
    if(ovr>78){internationalrep=3}
    if(ovr>82){internationalrep=4}
    if(ovr>88){internationalrep=5}

    return internationalrep;
}

function getfoot(foottext){
    switch(foottext){
        case "Right" ||"right" || "r" || "R": 
            return 1;
        case "Left" || "left" || "l" ||"L": 
            return 2;
        default: 
            return 1;
    }
}

function getplayerid(playerid){

    let idarray=[];

    if(document.getElementById("usedefaultplayers").checked){
        players().forEach(entry=>{
            idarray.push(entry.playerid);
        });
    }else{
        oldplayers.forEach(entry=>{
            idarray.push(entry[100]);
        });
    }
        
        finalizedplayers.forEach(entry=>{
            idarray.push(entry[Object.keys(entry)[0]].demo.playerid);
     
    });

    if(playerid>0 && checkiffreeid(playerid)){
        return playerid;
    }else{
        let id = getfreeid(idarray); console.log("assignedid:" + id);
        return id;
    }
}

function findnameid(name){
    
    let pn = playernames().find(x=>x.name==name);
    if(pn){return pn.nameid;}

    let dcpn=dcplayernames().find(x=>x.name==name);
    if(dcpn){return dcpn.nameid;}

    return 0;
    
}

function knownofflimitids(){
    return []; //as we find IDs with conflicts, we can list them here. It'll quickly check this list before issuing the ID.
}

function getweakfoot(weakfoot){
    switch(weakfoot){
        case "Terrible": return 1;
        case "Bad": return 2;
        case "Average": return 3;
        case "Good": return 4;
        case "Excellent": return 5;
    }
}

function getposition(positionstring){
    let pos = positions().find(x=>x.position==positionstring);
    if(pos){return pos.id;}else{return -1;}
}