function buildothervars(attwrk, defwrk, skillmoves){
    return {
    attackingworkrate: attwrk,
    defensiveworkrate: defwrk,
    skillmoves: skillmoves,
    trait2: 0,
    jerseystylecode: randbetween(0,1),
    tattooback: 0,
    accessorycode4: 0,
    gksavetype: randbetween(0,1),
    tattooleftarm: 0,
    animpenaltiesstartposcode:0,
    isretiring: 0,
    shoecolorcode2: 31,
    socklengthcode: randbetween(0,2),
    finishingcode1: 0,
    accessorycode3: 0,
    accessorycolourcode1: 0,
    driref: 66,
    hasseasonaljersey: 0,
    shoetypecode: getshoe(),
    tattoohead: 0,
    tattooleftleg: 0,
    phypos: 66,
    trait1: 0,
    hashighqualityhead: 0,
    tattoorightarm: 0,
    headassetid: 267277,
    defspe: 62,
    usercaneditname: 1,
    avatarpomid: 0,
    finishingcode2: 0,
    paskic: 66,
    iscustomized: 1,
    runningcode2: 0,
    modifier: 0,
    jerseysleevelengthcode: 1,
    accessorycolourcode3: 0, 
    accessorycode1: 0,
    playerjointeamdate: 160273,
    headclasscode: 1,
    tattoofront: 0,
    gkkickstyle: 0,
    accessorycolourcode4: 0,
    headvariation: 0,
    skillmoveslikelihood: 2,
    shohan: 60,
    shortstyle: 0,
    smallsidedshoetypecode: 503,
    emotion: 2,
    runstylecode: 0,
    jerseyfit: 0,
    accessorycode2: 0,
    shoedesigncode: 0,
    shoedesigncode:0,
    shoecolorcode1: 30,
    hairstylecode: 0,
    bodytypecode: 0,
    animpenaltiesstartposcode: 0,
    pacdiv: 60,
    runningcode1: 0,
    accessorycolourcode2: 0,
    tattoorightleg: 0,
    gkglovetypecode: getgkglove(),
    faceposerpreset: randbetween(0,4)
    }
}

function getshoe(){
  let arr = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,95,96,97,98,99,100,101,102,103,104,105,106,107,108,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315];
  let shoe = arr[randbetween(0,arr.length-1)];
  return shoe;
}

function getgkglove(){
  let arr = [73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,100,102,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,126];
  let glove = arr[randbetween(0,arr.length-1)];
  return glove;
}