

function builddemographics(nationality, height, weight, birthdate, ovr, foot){
    
    console.log(nationality);
    
    nations().find(x=>x.nation==nationality);
    let demo={
        nationalityid: nations().find(x=>x.nation==nationality).nationalityid || 140,
        contractvaliduntil: randbetween(2024,2028) || 2026,
        height: height || 180,
        weight: weight || 75,
        birthdate: getfifabirthdateval(birthdate) || 141428,
        internationalrep: getinternationalrep(ovr) || 1 ,
        foot: getfoot(foot) || 1,
        personality: randbetween(1,5) || 3,
        
    }

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