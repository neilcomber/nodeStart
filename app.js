// npm - node package manager - installed with node
// npm -v

// have access to npm global commands
// install dependency just for this project - npm i <package> 
//or all projects - npm i -g <package> / sudo npm install -g <package> (mac - to ask for password)

//will mainly install locally

//package.json - manifest file that stores important information about our project
// manual aproach - make file manually in the root
// EASIER - npm init - step by step, press enter to skip - else npm init -y to answer yes to all.


const _ = require('lodash');

const items = [1,[[2,[3]],4],5]

const newItems = _.flattenDeep(items);

console.log(items)
console.log(newItems)

