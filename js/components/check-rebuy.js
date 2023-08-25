export default  (callback) => {
  let rebuyStatus = setInterval(() => {
     if(typeof(window.Rebuy) != undefined && window.Rebuy?.SmartCart ) {
        clearInterval(rebuyStatus);
        rebuyStatus = false;
        callback();
     } 
  },500) 
  setTimeout( () => {
    if(rebuyStatus) {
        clearInterval(rebuyStatus);
    }
 },10000)
}