let loadedRemoteModuleMap: { [name: string]: Promise<any> } = {};
/** 加载时的map */
let loadingRemoteModuleMap: { [name: string]: (param) => void } = {};
function getDefaultModuleName(name = ''): string {
  return name.split(/(\/|\\)/g).pop();
}
/** 载入远程模块,项目中使用 */
function loadRemoteModule(url: string, moduleName?: string): Promise<any> {
  !moduleName && (moduleName = getDefaultModuleName(url));
  if (loadedRemoteModuleMap[moduleName]) {
    return loadedRemoteModuleMap[moduleName];
  }
  let resolve: (param) => void;
  let reject: (param) => void;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  loadedRemoteModuleMap[moduleName] = promise;
  // todo moduleName设置默认名
  loadingRemoteModuleMap[moduleName] = resolve;
  requireEnsure(url, reject, moduleName);
  return promise;
}
/** 远程模块加载后调用 */
function loadRemoteModuleJsonpCallback(
  name: string,
  module: { [name: string]: any }
): void {
  if (loadingRemoteModuleMap[name]) {
    loadingRemoteModuleMap[name](module);
    delete loadingRemoteModuleMap[name];
  }
}
window.loadRemoteModule = loadRemoteModule;
window.loadRemoteModuleJsonpCallback = loadRemoteModuleJsonpCallback;
/** 请求资源 */
function requireEnsure(url, rej, name) {
  const script = document.createElement('script');
  let onScriptComplete;
  script.charset = 'utf-8';
  (script as any).timeout = 120;
  script.src = url;
  onScriptComplete = (event) => {
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
        message: `Loading remote module [${name}]:[${url}] failed`,
      });
    }
  };
  // 超时状态
  const timeout = setTimeout(() => {
    onScriptComplete({ type: 'timeout', target: script });
  }, 120000);
  script.onerror = onScriptComplete;
  document.head.appendChild(script);
}
