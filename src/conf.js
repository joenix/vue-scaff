// Use Exp
import { debug } from './ext';

export default {
  // For Use
  install(Vue) {
    // 取消 Vue 所有的日志与警告
    Vue.config.silent = false;

    // 务必在加载 Vue 之后，立即同步设置以下内容
    Vue.config.devtools = true;

    // 性能追踪
    Vue.config.performance = true;

    // 设置为 false 以阻止 vue 在启动时生成生产提示
    Vue.config.productionTip = false;

    // Vue 模块错误
    Vue.config.errorHandler = (err, vm, info) => {
      return debug ? console.log(err, vm, info) : {};
    };

    // Vue 模块警告
    Vue.config.warnHandler = (err, vm, info) => {
      return debug ? console.log(err, vm, info) : {};
    };
  },
};
