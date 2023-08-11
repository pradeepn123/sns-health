import lazysizes from 'lazysizes';
import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';
lazysizes.cfg.loadMode = 1;

import headerEvents from 'JsComponents/header';
import handleClick from 'JsComponents/handleClick';
import registerCustomElements from 'JsComponents/registerCustomElements';

document.addEventListener('DOMContentLoaded', () => {
  headerEvents();
  handleClick();
  registerCustomElements();
})

