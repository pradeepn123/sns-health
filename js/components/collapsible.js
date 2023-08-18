console.log("----------------------------")
export const collapsible = ()=> {
    document.querySelectorAll('[data-test]')?.forEach(triggerel  =>{
          triggerel.addEventListener("click", (ev)=>{
              const container = ev.target.closest('[data-container]');
              const target_half = container?.querySelector('[data-content-half]');
              const target_full = container?.querySelector('[data-content-full]');
              if(target_half.classList.contains('text-wrap__description--hidden')){
                  target_half.style.display ="none";
                  target_full.style.display ="block";
              }
              else{
                  target_half.style.display ="block";
                  target_full.style.display ="none"; 
              }
          })
      })
    }
  
