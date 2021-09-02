System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Location;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18978+/QXdCNrUKsxCD8ILp", "Location", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("Location", Location = (_dec = ccclass('Location'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Location, _Component);

        function Location() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Location.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.onTouchStart = function onTouchStart(touch, event) {
          console.log('location of touch in X' + touch.getLocation().x);
          console.log('location of touch in Y' + touch.getLocation().y);
        };

        _proto.onLoad = function onLoad() {} // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Location;
      }(Component)) || _class));
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