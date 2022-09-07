var number = function(busStops){
    let pplIn = 0;
    let pplOut = 0;
    let pplCur = 0;
    let k = 0;
    let t = 1;
    
    for (let i = 0; i <= busStops.length-1; i ++){
    pplIn += busStops[i][k];
    pplOut += busStops[i][t];
  }
    return pplCur = pplIn-pplOut;
  }