import ng = require('angular2/angular2');
import {Tree} from '../tree/tree';
import {Node} from '../tree/models';

import fs = require('fs.remote!');
import path = require('path.remote!');


@ng.Component({
  selector:'child-component'
})
@ng.View({
  template:'child'
})
class childComponent{

}


@ng.Component({
  selector:'application'
})

@ng.View({
  template:require('./application.html'),
  directives:[Tree]
})

export class Application{
  root:Node;
  getDir(){
    let filename = window.location.href.split('/').pop();
    let dir = window.location.href.replace(filename,'').replace('file:///','');
    return dir;
  }
  constructor(dynamicComponentLoader:ng.DynamicComponentLoader,injector:ng.Injector){

    this.initRoot();
    console.log(this.root);
    dynamicComponentLoader.loadAsRoot(childComponent,'#child',injector)
  }

  initRoot(){
    let root = new Node({
      name:'root'
    });
    let dir = this.getDir();
    let files = fs.readdirSync(dir);
    for(let i in files){
      let file = files[i];
      let states = fs.statSync(file);
      let node = new Node({
        name:file.toString()
      });
      root.addChild(node);
      if(states.isDirectory()){
        let childFiles = fs.readdirSync(path.join(dir,file));
        for(let j in childFiles){
          let childNode = new Node({
            name:childFiles[j]
          })
          node.addChild(childNode);
        }
      }
    }

    this.root = root;
  }
}
