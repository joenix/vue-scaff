// Use `uni.request`

// Global Ext
const ext = {
  headers: {
    'Content-Type': 'application/json',
  },
  data: {},
  request: (data, headers) => ({}),
  response: (data) => data,
};

// Classic
class HTTP {
  constructor() {
    // Method Mode
    this.methods = ['get', 'post', 'put', 'delete', 'connect', 'head', 'options', 'trace'];

    // Export APIs
    return this.init();
  }

  init() {
    // Set Scope for Interceptor
    const scope = (api, option) => {
      // Set Modules
      const modules = {};

      // Traversal
      this.methods.forEach((method) => {
        // Set Func by Method
        modules[method] = (param, conf) => this.send(option, method, api, param, conf);
      });

      // Export Modules
      return modules;
    };

    return (scope.interceptor = this.interceptor), scope;
  }

  interceptor(custom = {}) {
    // Get Headers and Data
    const { headers, data } = custom.request(ext.data, ext.headers);

    // Tolerant Headers and Data
    ext.headers = headers || ext.headers;
    ext.data = data || ext.data;

    // Bind Request & Response on Ext
    ext.request = custom.request || ext.request;
    ext.response = custom.response || ext.response;
  }

  send(option = {}, method = 'get', api = '', param = {}, conf = {}) {

    // Request Interceptor First
    this.interceptor(ext);

    // Use Promise for ES7
    return new Promise((resolve, reject) =>
      // Send
      uni.request({
        // Conf
        ...ext,
        // Method
        method,
        // Headers
        header: {
          ...ext.headers,
          ...(conf.headers || {}),
        },
        // Param
        data: {
          ...ext.data,
          ...param,
        },
        // Request Address
        url: api,
        // Call Success
        success: ({ data }) => resolve(ext.response(data)),
        // Call Error
        fail: reject,
        // Extension of Option for Highest
        ...option,
      }),
    );
  }

  response() {}
}

export default new HTTP();
