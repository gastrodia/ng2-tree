/// <reference path="./tsd.d.ts"/>
import {bootstrap} from 'angular2/angular2';

import {Tree} from './components/tree/tree';

export function main() {
  bootstrap(Tree);
}

main();

import fs = require('fs.remote!');
console.log('fs: ',fs);
