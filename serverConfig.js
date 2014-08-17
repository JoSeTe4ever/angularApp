/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

    express: {
        server: {
            options: {
                port: 9000,
                bases: ['public', 'build']
            }
        }
    }

};
