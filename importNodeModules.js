const fs = require('fs-extra')

fs.copy(`./node_modules/bulma`, './assets/styles/_dependencies', err => {
    if (err) {
        return console.error(err)
    } else {
        return console.log('imported bulma styles')
    }
})