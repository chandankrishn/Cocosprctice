System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Location;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18978+/QXdCNrUKsxCD8ILp", "Location", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Location
       * DateTime = Wed Sep 01 2021 15:29:21 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = Location.ts
       * FileBasenameNoExtension = Location
       * URL = db://assets/Scripts/Location.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Location", Location = (_dec = ccclass('Location'), _dec(_class = class Location extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        onTouchStart(touch, event) {
          console.log('location of touch in X' + touch.getLocation().x);
          console.log('location of touch in Y' + touch.getLocation().y);
        }

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
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
//# sourceMappingURL=Location.js.map