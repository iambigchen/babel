const { transformFileSync } = require('@babel/core')
const path = require('path')
const insert = require('./plugins/insert')

const res = transformFileSync(path.resolve(__dirname, './main.js'), {
    plugins: [
        insert
    ],
    sourceMaps: true
})

console.log('---------', res.code)