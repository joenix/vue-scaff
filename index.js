// Use Vue
import Vue from 'vue';

// Use Promise
import promise from 'promise-super';

/**
 * @inject  - Pipes Use
 * @ext     - Extentions
 * @conf    - Configure of Vue
 * @store   - Store by Vuex
 * @filters - Data Filters
 * @utils   - Tools
 * @apis    - APIs Mapping
 * @http    - Request Fetch
 * @styles  - Sheet of Styles
 * ========== ========== ==========
 */
import { inject, ext, conf, store, filters, utils, apis, http, styles } from './src';

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
    return new promise(resolve => resolve({ app, Vue }));
  }
}

// Export Class
export default Scaff;
