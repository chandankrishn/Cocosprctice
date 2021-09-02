System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, director, systemEvent, SystemEvent, KeyCode, _dec, _class, _crd, ccclass, property, integer, float, boolean, string, type, SwitchScene;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      KeyCode = _cc.KeyCode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fc58HgnvdHH7aatSrtxqfo", "SwitchScene", undefined);

      ({
        ccclass,
        property,
        integer,
        float,
        boolean,
        string,
        type
      } = _decorator);
      /**
       * Predefined variables
       * Name = SwitchScene
       * DateTime = Wed Sep 01 2021 17:51:02 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = SwitchScene.ts
       * FileBasenameNoExtension = SwitchScene
       * URL = db://assets/Scripts/SwitchScene.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("SwitchScene", SwitchScene = (_dec = ccclass('SwitchScene'), _dec(_class = class SwitchScene extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        changeScene(event) {
          switch (event.keyCode) {
            case KeyCode.ENTER:
              director.loadScene('gameplay');
              break;
          }
        }

        onLoad() {
          director.preloadScene('gameplay', function () {
            console.log("preloaded scene gameplay");
          });
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.changeScene, this);
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
//# sourceMappingURL=SwitchScene.js.map