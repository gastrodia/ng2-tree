import ng = require('angular2/angular2');

import {remote} from '../electron/electron';

import fs from 'fs.remote!';


@ng.Component({
  selector:'tree',
  properties:[]
})


@ng.View({
  template:require('./tree.html'),styles:[require('./tree.css')],
  directives:[ng.formDirectives,ng.coreDirectives],
  encapsulation:ng.ViewEncapsulation.NONE
})
export class Tree{


}
