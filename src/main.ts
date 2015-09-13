/// <reference path="./tsd.d.ts"/>
// import {bootstrap} from 'angular2/angular2';
//
// import {Application} from './components/application/application';
//
// export function main() {
//   bootstrap(Application);
// }

export function reverse(name){
  if(name=='AAA') return "BBB";
  return name.split("").reverse().join("");
}

function t(){

  setInterval(function(){
    debugger;
    console.log((<any>window).require);

  },200);
}
t();


//main();
