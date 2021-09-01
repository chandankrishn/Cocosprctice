
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Mouseevents')
export class Mouseevents extends Component {
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
        console.log("HELLLO !!!!");
        this.node.on(Node.EventType.MOUSE_DOWN,function(event:any)
        {

            console.log('Mouse is pressed');
        },this);
        this.node.on(Node.EventType.MOUSE_UP,function(event:any)
        {

            console.log('mouse is released');
        });
        this.node.on(Node.EventType.MOUSE_MOVE,function(event:any)
        {
            console.log('Mouse is hovering around this');

        })

    }
    callback()
    {
        console.log("hello chandan !");
        
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
