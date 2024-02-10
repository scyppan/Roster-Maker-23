

function builddemographics(nationality){
  
  nations().find(x=>x.nation==nationality);
    let demo={
        nationalityid: nations().find(x=>x.nation==nationality).nationalityid || 140,
    }

    return demo;

}