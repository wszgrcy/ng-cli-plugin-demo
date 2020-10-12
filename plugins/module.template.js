let loadedRemoteModuleMap = {};
let loadingRemoteModuleMap = {};
function getDefaultModuleName(name = '') {
    return name.split(/(\/|\\)/g).pop();
}
function loadRemoteModule(url, moduleName) {
    !moduleName && (moduleName = getDefaultModuleName(url));
    if (loadedRemoteModuleMap[moduleName]) {
        return loadedRemoteModuleMap[moduleName];
    }
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    loadedRemoteModuleMap[moduleName] = promise;
    loadingRemoteModuleMap[moduleName] = resolve;
    requireEnsure(url, reject, moduleName);
    return promise;
}
function loadRemoteModuleJsonpCallback(name, module) {
    if (loadingRemoteModuleMap[name]) {
        loadingRemoteModuleMap[name](module);
        delete loadingRemoteModuleMap[name];
    }
}
window.loadRemoteModule = loadRemoteModule;
window.loadRemoteModuleJsonpCallback = loadRemoteModuleJsonpCallback;
function requireEnsure(url, rej, name) {
    const script = document.createElement('script');
    let onScriptComplete;
    script.charset = 'utf-8';
    script.timeout = 120;
    script.src = url;
    onScriptComplete = (event) => {
        script.onerror = script.onload = null;
        clearTimeout(timeout);
        if (event.type === 'timout') {
            rej({
                type: event.type,
                message: 'timeout',
            });
        }
        else if (event.type === 'error') {
            rej({
                type: event.type,
                message: `Loading remote module [${name}]:[${url}] failed`,
            });
        }
    };
    const timeout = setTimeout(() => {
        onScriptComplete({ type: 'timeout', target: script });
    }, 120000);
    script.onerror = onScriptComplete;
    document.head.appendChild(script);
}
