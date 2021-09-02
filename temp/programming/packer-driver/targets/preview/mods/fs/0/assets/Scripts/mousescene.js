System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, _dec, _class, _crd, ccclass, property, Mousescene;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
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

      _export("Mousescene", Mousescene = (_dec = ccclass('Mousescene'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mousescene, _Component);

        function Mousescene() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Mousescene.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            director.loadScene('gameplay');
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Mousescene;
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
//# sourceMappingURL=mousescene.js.map