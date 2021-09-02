
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Mousescene')
export class Mousescene extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }
    onLoad()
    {
        this.node.on(Node.EventType.MOUSE_DOWN,function(event:any){
            director.loadScene('gameplay');

        });

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
