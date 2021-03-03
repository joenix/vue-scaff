// Use Vue
import Vue from 'vue';

// Use Promise
import promise from 'promise-super';

// Use Extend
import inject from './src/inject';

// Use Config
import conf from './src/conf';

// Use Store
import store from './src/store';

// Use Filters
import filters from './src/filters';

// Use Utils
import utils from './src/utils';

// Use Apis
import apis from './src/apis';

// Use Http
import http from './src/http';

// Use Ext
import ext from './src/ext';

// Use Style
import styles from './src/style';

// Use App
import App from '@/App';

// Set Scaff Class
class Scaff {
  // Create Scaff
  constructor() {
    // Set myType of App
    App.mpType = 'app';

    // Set Conf
    Vue.use(conf);

    // Registry Filters
    Vue.use(filters);

    // Extend Any
    Vue.use(inject, { appId: ext.appId, utils, styles, apis, http, ext });

    // Init App
    const app = new Vue({
      ...App,
      store,
    });

    // Use Promise for Sugar
    return new promise((resolve) => resolve(app));
  }
}

// Export Class
export default Scaff;
