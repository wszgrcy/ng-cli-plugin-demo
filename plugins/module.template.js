var loadModuleMap = new Map();
/** 加载时的map */
var loadingMap = new Map();
function getDefaultModuleName(name) {
    if (name === void 0) { name = ''; }
    return name
        .split(/(\/|\\)/g)
        .pop()
        .split('.')[0];
}
/** 载入远程模块,项目中使用 */
function loadRemoteModule(url, moduleName) {
    !moduleName && (moduleName = getDefaultModuleName(url));
    if (loadModuleMap.has(moduleName)) {
        return loadModuleMap.get(moduleName);
    }
    var resolve;
    var reject;
    var promise = new Promise(function (res, rej) {
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
function loadRemoteModuleJsonpCallBack(name, module) {
    if (loadModuleMap.has(name)) {
        loadingMap.get(name)(module);
        loadingMap["delete"](name);
    }
}
// tslint:disable-next-line: no-string-literal
window['loadRemoteModule'] = loadRemoteModule;
// tslint:disable-next-line: no-string-literal
window['loadRemoteModuleJsonpCallBack'] = loadRemoteModuleJsonpCallBack;
/** 请求资源 */
function requireEnsure(url, rej) {
    var script = document.createElement('script');
    var onScriptComplete;
    script.charset = 'utf-8';
    script.timeout = 120;
    script.src = url;
    // var error = new Error();
    onScriptComplete = function (event) {
        console.log('完成/失败', event);
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        if (event.type == 'timout') {
            rej({
                type: event.type,
                message: 'timeout'
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
    var timeout = setTimeout(function () {
        onScriptComplete({ type: 'timeout', target: script });
    }, 120000);
    script.onerror = script.onload = onScriptComplete;
    document.head.appendChild(script);
}
