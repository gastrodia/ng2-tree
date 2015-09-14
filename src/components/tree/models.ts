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
