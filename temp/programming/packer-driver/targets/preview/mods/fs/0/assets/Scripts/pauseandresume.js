System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, KeyCode, director, _dec, _class, _crd, ccclass, property, Pauseandresume;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  function pause() {
    throw new Error('Function not implemented.');
  }

  _export("pause", pause);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      KeyCode = _cc.KeyCode;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "763e2RtMA9NDr6GkebL89E8", "pauseandresume", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Pauseandresume
       * DateTime = Thu Sep 02 2021 12:41:55 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = pauseandresume.ts
       * FileBasenameNoExtension = pauseandresume
       * URL = db://assets/Scripts/pauseandresume.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Pauseandresume", Pauseandresume = (_dec = ccclass('Pauseandresume'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Pauseandresume, _Component);

        function Pauseandresume() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Pauseandresume.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.playandresume = function playandresume(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              console.log("space pressed");
              director.pause();
              break;

            case KeyCode.ENTER:
              console.log("enter pressed");
              director.resume();
              break;
          }
        };

        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.playandresume, this);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Pauseandresume;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=pauseandresume.js.map