
import { _decorator, Component, Node, CCInteger, director, systemEvent, SystemEvent, macro, KeyCode } from 'cc';
const { ccclass, property, integer, float, boolean, string, type } = _decorator;

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
 
@ccclass('SwitchScene')
export class SwitchScene extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }
    changeScene(event:any)
    {
        switch(event.keyCode)
        {
            case KeyCode.ENTER:
            director.loadScene('gameplay');
            break;
        }

    }
    onLoad()
    {
        director.preloadScene('gameplay',function()
        {
            console.log("preloaded scene gameplay");

        });
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.changeScene,this);

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
