System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, UITransform, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Movement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3596ecvXhpGUbLgOe2kJYR4", "Movement", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Movement
       * DateTime = Wed Sep 01 2021 10:48:00 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = Movement.ts
       * FileBasenameNoExtension = Movement
       * URL = db://assets/Scripts/Movement.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Movement", Movement = (_dec = ccclass('Movement'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Movement, _Component);

        function Movement() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "speed", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "flag", true);

          _defineProperty(_assertThisInitialized(_this), "posx", void 0);

          _defineProperty(_assertThisInitialized(_this), "posy", void 0);

          return _this;
        }

        var _proto = Movement.prototype;

        _proto.start = function start() {
          var rand = Math.random() * 2;
          rand = Math.floor(rand);
          console.log("This is a start function  : " + rand);

          if (this.posx == 1) {
            console.log("yes random is 1 : and right dfunction is called");
            this.movementRight();
          } else {
            console.log("It is moved to else left function is called");
            this.movementLeft();
          }
        };

        _proto.onTouchStart = function onTouchStart(touch, event) {
          this.posx = touch.getLocation().x;
          this.posy = touch.getLocation().y;
          console.log('location of touch in X' + this.posx);
          console.log('location of touch in Y' + this.posy);
          console.log(this.node.parent.getComponent(UITransform).width);

          if (this.posx < this.node.parent.getComponent(UITransform).width / 2) {
            console.log("Character mved to left");
            this.movementLeft();
          } else {
            console.log("Charcter moved to right");
            this.movementRight();
          }
        };

        _proto.onLoad = function onLoad() {
          this.node.parent.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        };

        _proto.movementLeft = function movementLeft() {
          this.speed = -100;
        };

        _proto.movementRight = function movementRight() {
          this.speed = 100;
        };

        _proto.update = function update(deltaTime) {
          if (this.node.position.x < -420 || this.node.position.x > 420) {
            console.log(" Hey game over !!");
            director.pause();
            director.loadScene('gameover');
          }

          this.node.setPosition(this.node.position.x + this.speed * deltaTime, this.node.position.y);
        };

        return Movement;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=Movement.js.map