const rollupPluginNodeBuiltins = require('rollup-plugin-node-builtins');
const rollupPluginNodeGlobals = require('rollup-plugin-node-globals');

export default {
    input: 'node_modules/rollup-plugin-node-builtins/src/es6/stream.js',
    output: {
        file: 'stream.js',
        format:'es'
    },
    plugins: [
        rollupPluginNodeBuiltins(),
        rollupPluginNodeGlobals()
    ]
}
