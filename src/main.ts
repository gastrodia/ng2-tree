/// <reference path="./tsd.d.ts"/>
import {bootstrap} from 'angular2/angular2';

import {Application} from './components/application/application';
import {TreeService} from './components/tree/service';

export function main() {
  bootstrap(Application,[TreeService]);
}



main();
