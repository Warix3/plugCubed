var load = function() {
    console.log('plugCubed Chrome Loader v2 enabled!');
    var plug = document.createElement('script');

    plug.type = 'text/javascript';
    plug.id = 'plugCubed-loader';
    plug.src = browser.extension.getURL('plugCubed.js');
    document.head.appendChild(plug);
};

load();
