
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Location')
export class Location extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }
    onTouchStart(touch:any,event:any)
    {
        console.log('location of touch in X' + touch.getLocation().x);
        console.log('location of touch in Y' + touch.getLocation().y);
        

    }
    onLoad()
    {
        this.node.on(Node.EventType.TOUCH_START,this.onTouchStart,this);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
