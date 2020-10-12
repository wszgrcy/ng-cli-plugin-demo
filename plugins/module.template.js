var loadedRemoteModuleMap = {};
/** 加载时的map */
var loadingRemoteModuleMap = {};
function getDefaultModuleName(name) {
    if (name === void 0) { name = ''; }
    return name.split(/(\/|\\)/g).pop();
}
/** 载入远程模块,项目中使用 */
function loadRemoteModule(url, moduleName) {
    !moduleName && (moduleName = getDefaultModuleName(url));
    console.log(moduleName);
    if (loadedRemoteModuleMap[moduleName]) {
        return loadedRemoteModuleMap[moduleName];
    }
    var resolve;
    var reject;
    var promise = new Promise(function (res, rej) {
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
function loadRemoteModuleJsonpCallback(name, module) {
    if (loadingRemoteModuleMap[name]) {
        loadingRemoteModuleMap[name](module);
        delete loadingRemoteModuleMap[name];
    }
}
window.loadRemoteModule = loadRemoteModule;
window.loadRemoteModuleJsonpCallback = loadRemoteModuleJsonpCallback;
/** 请求资源 */
function requireEnsure(url, rej, name) {
    var script = document.createElement('script');
    var onScriptComplete;
    script.charset = 'utf-8';
    script.timeout = 120;
    script.src = url;
    // var error = new Error();
    onScriptComplete = function (event) {
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        if (event.type === 'timout') {
            rej({
                type: event.type,
                message: 'timeout'
            });
        }
        else if (event.type === 'error') {
            rej({
                type: event.type,
                message: "Loading remote module " + name + ":" + url + " failed"
            });
        }
    };
    // 超时状态
    var timeout = setTimeout(function () {
        onScriptComplete({ type: 'timeout', target: script });
    }, 120000);
    script.onerror = script.onload = onScriptComplete;
    document.head.appendChild(script);
}
