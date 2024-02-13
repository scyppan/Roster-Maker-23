
function buildplayerappearances(gender, nation){
	let skintone = getskintone(nation);

	let appearance = {
		skintonecode: skintone,
		haircolorcode: gethaircolor(skintone, nation),
		facialhairtypecode: getfacialhairtype(gender),
		headtypecode: getheadtypecode(nation),
		hairtypecode: gethairtypecode(),
		shoe: getshoe(),
		gkglove: getgkglove(),
    skintypecode: 0,
    sideburnscode: 0,
    eyebrowcode: geteyebrowcode()||0,
    eyecolorcode: geteyecolorcode(skintone)||8
	}

	return appearance;
}

function getskintone(nation){
  
    let rand = randbetween(0,100);
    let tone = 3;
    
    let lightthresh = nation.lt;
    let medthresh = lightthresh + nation.md;
    let darkthresh = medthresh + nation.dk;
    
    if(rand<lightthresh){tone=randbetween(1,3);}
    if(rand>lightthresh && rand<medthresh){tone=randbetween(3,7);}
    if(rand>medthresh && rand<darkthresh){tone=randbetween(7,10);}
    
    if(tone===undefined){tone=3;}
    
      return tone;
  }
  
  function gethaircolor(skintone, nation){
  
      if(nation.light<50){
        if(skintone>=7){return 1;}
      if(skintone>=4){
          let tonearrays = [1,3];
        return tonearrays[randbetween(0,1)];    
      }else{
          let tonearrays = [1,3,5,6];
        return tonearrays[randbetween(0,3)];
      }
    }
  
      let temphairtone = 5
    
      switch(skintone){
        case 1: temphairtone = randbetween(0,5); break;
        case 2: temphairtone = randbetween(0,5); break;
        case 3: temphairtone = randbetween(0,5); break;
        case 4: temphairtone = randbetween(0,4); break;
        case 5: temphairtone = randbetween(0,4); break;
        case 6: temphairtone = randbetween(0,3); break;
        case 7: temphairtone = randbetween(0,2); break;
        case 8: temphairtone = randbetween(0,1); break;
        case 9: temphairtone = 0; break;
        case 10: temphairtone = 0; break;
      
    }
    
    //the temphairtone above is not the correct FIFA ID for the shade of darkness intended. Must be converted. 
     let hairtone = 1;
    switch(temphairtone){
        case 0: hairtone=1; break;
      case 1: hairtone=3; break;
      case 2: hairtone=6; break;
      case 3: hairtone=5; break;
      case 4: hairtone=2; break;
      case 5: hairtone=4; break;
    }
    return hairtone;
  }
  
  function getfacialhairtype(gender){
      if(gender==2||randbetween(1,100)<85){
        return 0
    }else{
        let typernd = randbetween(1,20);
      if(typernd==19){return 28;}else{
      return typernd;
      }
    }
  }
  
  function getheadtypecode(nation){
    
    if(nation.asian==1){
      let asianheadcodes = [500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,565,566,567,600,601,602];
        return asianheadcodes[randbetween(0,asianheadcodes.length-1)];
    }else{
      let nonasianheadcodes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,68,69,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1019,1021,1023,1024,1028,1029,1030,1031,1033,1035,1036,1037,1038,1039,1040,1041,1042,1043,1044,1045,1049,1050,1500,1501,1502,1503,1505,1506,1507,1508,1509,1510,1511,1512,1514,1515,1516,1517,1518,1519,1520,1521,1522,1523,1526,1528,1529,1530,1531,1532,1533,1534,1535,1536,1537,1538,1539,1540,1541,1542,1543,1545,1546,1547,1548,1549,1550,1551,1552,1553,1554,1555,1556,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2012,2013,2014,2015,2016,2017,2019,2020,2021,2022,2027,2030,2031,2032,2500,2500,2501,2501,2502,2502,2503,2503,2504,2504,2505,2505,2506,2506,2507,2507,2508,2508,2510,2510,2511,2511,2512,2512,2515,2515,2516,2516,2517,2517,2518,2518,2519,2519,2520,2520,2521,2521,2522,2522,603,603,604,604,605,605,606,606,607,607,608,608,3000,3001,3002,3003,3004,3005,3500,3501,3502,3503,3504,3505,3506,3507,3508,3509,3510,3512,3513,3514,3515,3516,3517,3518,3519,4000,4001,4002,4003,4004,4005,4006,4007,4008,4009,4010,4011,4012,4013,4014,4015,4016,4017,4018,4019,4020,4021,4022,4024,4500,4501,4502,4525,5000,5001,5002,5003]
        return nonasianheadcodes[randbetween(0,nonasianheadcodes.length-1)];
    }
    
    return headid;
  }
  
  function gethairtypecode(){
      let hairtypecodes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,204,205,206,207,208,209,211,212,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,250,257,263,264,265,267,268,273,274,275,276,277,278,279,280,281,283,284,285,286,289,290,291,292,293,294,295,296,297,298,299,376,386,390,394,419,432,433,434,435,436,437,445,446,450,451,452,460,461,500,501,502,503,504,505,506,507,508,510,511,512,513,515,517,518,519,520,522,524,525,526,527,528,530,531,532,533,534,535,536,537,538,539,540,543,544,546,547,548,549,550,551,552,553,554,555,556,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,586,587,596,597,599,600,601,603,607,612,614,615,616,617,619,620,621,624,625,627,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,659,660,661,662,664,665,666,667,668,673,677,683,685,688,691,692,693,694,695,816,901,902,909,915,916,923,924,925];
      return hairtypecodes[randbetween(0,hairtypecodes.length-1)];
    }

  function geteyebrowcode(){
    let eyebrowcode = randbetween(0,6);
    if(eyebrowcode==2){eyebrowcode=0;}
    return eyebrowcode;
  }

  function geteyecolorcode(skintone){
    let eyecolorcode = 8;
    if(skintone<5){eyecolorcode=randbetween(0,9);}
    return eyecolorcode;
  }