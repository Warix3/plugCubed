module.exports = function() {
    this.execute({
        options: {
            args: '--dir release'
        },
        src: ['_incrementBuild.js']
    });
};
