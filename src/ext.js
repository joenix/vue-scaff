import { ext, debug, extAppid } from '@/ext.json';

ext.appId = extAppid;

ext.debug = debug === undefined ? true : debug;

export default ext;

// export default uni.getExtConfigSync ? uni.getExtConfigSync() : {};
