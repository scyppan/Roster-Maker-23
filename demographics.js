function builddemographics(nationality){
  
  nations().find(x=>x.nation==nationality);
    let demo={
        nationalityid: nations().find(x=>x.nation==nationality).id || 140,
    }

}