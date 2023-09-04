export class IntersectObserver {
    constructor(callback, targets = [], options = {}) {
       this.callback = callback;
       this.options = options;
       this.targets = targets
    }
   init = () => {
     const observer =  new IntersectionObserver(this.callback, this.options);  
       this.targets.forEach(target => {
            observer.observe(target);
        });
    }
}