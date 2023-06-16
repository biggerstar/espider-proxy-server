let proxy = require("anyproxy");

//create cert when you want to use https features
//please manually trust this rootCA when it is the first time you run it

// console.log(proxy);
// console.log(proxy.ProxyServer);
// !proxy.isRootCAFileExists() && proxy.generateRootCA();

let options = {
    type          : "https",
    port          : 8001,
    hostname      : "localhost",
    // rule          : require("path/to/my/ruleModule.js"),
    dbFile        : null,  // optional, save request data to a specified file, will use in-memory db if not specified
    webPort       : 8002,  // optional, port for web interface
    socketPort    : 8003,  // optional, internal port for web socket, replace this when it is conflict with your own service
    // throttle      : 10,    // optional, speed limit in kb/s
    disableWebInterface : true, //optional, set it when you don't want to use the web interface
    setAsGlobalProxy : false, //set anyproxy as your system proxy
    silent        : false //optional, do not print anything into terminal. do not set it when you are still debugging.
};
new proxy.ProxyServer(options);
