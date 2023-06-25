#!/usr/bin/env node

import chalk from 'chalk'

const purple = '#652585'

const card = `
     __ _____ _____  _____
  __|  |     ||   __|   __|
 |  |  |  |  ||  |__|   __|
 |_____|_____||_____|_____|
____   _____  __  _ _____
|  |  |__ __||  \\| |     |
|  |__ _| |_ |     |  |  |
|_____|_____||_|\\__|_____|
`

const work = `Backend developer`

const networks = {
    github: 'https://github.com/netojocelino',
    linkedin: 'https://linkedin.com/in/netojocelino',
    dev: 'https://dev.to/netojocelino',
}


console.clear()
console.log(chalk.hex(purple)(card))
console.log(chalk.bold.white(work))

Object.entries(networks).forEach(([network, url]) => {
    console.log(chalk.bold(network.padEnd(15)), chalk.hex(purple)(url))
});



