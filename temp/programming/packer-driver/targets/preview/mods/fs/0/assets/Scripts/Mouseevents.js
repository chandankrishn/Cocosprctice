System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, Mouseevents;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ca17H5ORxARpXhVH7FbTbU", "Mouseevents", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Mouseevents
       * DateTime = Wed Sep 01 2021 12:49:37 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = Mouseevents.ts
       * FileBasenameNoExtension = Mouseevents
       * URL = db://assets/Scripts/Mouseevents.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Mouseevents", Mouseevents = (_dec = ccclass('Mouseevents'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mouseevents, _Component);

        function Mouseevents() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Mouseevents.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          console.log("HELLLO !!!!");
          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            console.log('Mouse is pressed');
          }, this);
          this.node.on(Node.EventType.MOUSE_UP, function (event) {
            console.log('mouse is released');
          });
          this.node.on(Node.EventType.MOUSE_MOVE, function (event) {
            console.log('Mouse is hovering around this');
          });
        };

        _proto.callback = function callback() {
          console.log("hello chandan !");
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Mouseevents;
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
//# sourceMappingURL=Mouseevents.js.map