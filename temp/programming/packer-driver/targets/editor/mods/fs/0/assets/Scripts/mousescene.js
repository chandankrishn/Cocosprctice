System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, _dec, _class, _crd, ccclass, property, Mousescene;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9baa57vfXlDmK72Ilo8RRJd", "mousescene", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Mousescene
       * DateTime = Thu Sep 02 2021 10:04:51 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = mousescene.ts
       * FileBasenameNoExtension = mousescene
       * URL = db://assets/Scripts/mousescene.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Mousescene", Mousescene = (_dec = ccclass('Mousescene'), _dec(_class = class Mousescene extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        onLoad() {
          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            director.loadScene('gameplay');
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=mousescene.js.map