import ng = require('angular2/angular2');




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

  constructor(){

  }

}

export class Node{
  private _children:Array<Node> = [];
  private _name;

  get children():Array<Node>{
    return this._children;
  }

  get name():string{
    return this._name;
  }

  set children(_children){
    this.children = _children;
  }

  set name(_name){
    this.name = _name;
  }

  constructor(data:{
    name:string
  }){
    this._name = data.name;
  }

  addChild(node:Node){
    this._children.push(node);
  }
}
