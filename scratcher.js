// URL: https://theboys619.github.io/gitpodtest/scratcher.js
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.testing = function(str) {
      alert(str);
    }


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['', 'test %s', 'testing']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Test Extension', descriptor, ext);
})({});
