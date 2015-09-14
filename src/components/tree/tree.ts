import ng = require('angular2/angular2');
import {TreeService} from './service'; 
@ng.Component({
  selector:'tree',
  properties:['root']
})


@ng.View({
  template:require('./tree.html'),styles:[require('./tree.css')],
  directives:[ng.formDirectives,ng.coreDirectives,Tree],
  encapsulation:ng.ViewEncapsulation.NONE
})
export class Tree{
  root:Node;

  constructor(treeService:TreeService){
    console.log(treeService);
  }

}
