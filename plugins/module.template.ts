let loadModuleMap = new Map<string, Promise<any>>();
/** 加载时的map */
let loadingMap = new Map<string, Function>();
function getDefaultModuleName(name = '') {
  return name
    .split(/(\/|\\)/g)
    .pop()
    .split('.')[0];
}
/** 载入远程模块,项目中使用 */
function loadRemoteModule(url: string, moduleName: string): Promise<any> {
  !moduleName && (moduleName = getDefaultModuleName(url));
  if (loadModuleMap.has(moduleName)) {
    return loadModuleMap.get(moduleName);
  }
  let resolve: Function;
  let reject: Function;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  loadModuleMap.set(moduleName, promise);
  // todo moduleName设置默认名
  loadingMap.set(moduleName, resolve);
  requireEnsure(url, reject);
  return promise;
}
/** 远程模块加载后调用 */
function loadRemoteModuleJsonpCallBack(
  name: string,
  module: { [name: string]: any }
) {
  if (loadModuleMap.has(name)) {
    loadingMap.get(name)(module);
    loadingMap.delete(name);
  }
}
// tslint:disable-next-line: no-string-literal
window['loadRemoteModule'] = loadRemoteModule;
// tslint:disable-next-line: no-string-literal
window['loadRemoteModuleJsonpCallBack'] = loadRemoteModuleJsonpCallBack;
/** 请求资源 */
function requireEnsure(url, rej) {
  const script = document.createElement('script');
  let onScriptComplete;
  script.charset = 'utf-8';
  (script as any).timeout = 120;
  script.src = url;
  // var error = new Error();
  onScriptComplete = function(event) {
    console.log('完成/失败', event);
    script.onerror = script.onload = null;
    clearTimeout(timeout);
    if (event.type === 'timout') {
      rej({
        type: event.type,
        message: 'timeout',
      });
    } else if (event.type === 'error') {
      rej({
        type: event.type,
        message: `${url}`,
      });
    }
    // var chunk = installedChunks[url];
    // if (chunk !== 0) {
    //   if (chunk) {
    //     var errorType = event && (event.type === 'load' ? 'missing' : event.type);
    //     var realSrc = event && event.target && event.target.src;
    //     error.message = 'Loading chunk ' + url + ' failed.\n(' + errorType + ': ' + realSrc + ')';
    //     error.name = 'ChunkLoadError';
    //     error.type = errorType;
    //     error.request = realSrc;
    //     chunk[1](error);
    //   }
    //   installedChunks[url] = undefined;
    // }
  };
  // 超时状态
  const timeout = setTimeout(function() {
    onScriptComplete({ type: 'timeout', target: script });
  }, 120000);
  script.onerror = script.onload = onScriptComplete;
  document.head.appendChild(script);
}
