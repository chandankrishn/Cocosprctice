
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Movement')
export class Movement extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }
    @property speed:number=1000;
    private flag:boolean=true;

    update (deltaTime: number) 
    {
        if(this.flag && this.node.position.x< 480)
        {
            this.node.setPosition(this.node.position.x+this.speed*deltaTime,this.node.position.y);
        }

      else
      {

          this.flag=false;
          this.node.setPosition(this.node.position.x-this.speed*deltaTime,this.node.position.y);
          if(this.node.position.x<-510)
          {
              this.flag=true;
          }
      }
    }
}

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
