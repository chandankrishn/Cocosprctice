
import { _decorator, Component, Node, systemEvent, SystemEvent, SystemEventType, KeyCode, game, Game, director } from 'cc';
const { ccclass, property } = _decorator;

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
 
@ccclass('Pauseandresume')
export class Pauseandresume extends Component {
 
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    playandresume(event:any)
    {
        switch(event.keyCode)
        {
            case KeyCode.SPACE:
                console.log("space pressed");
                director.pause();
                break;
            case KeyCode.ENTER:
                console.log("enter pressed");
                director.resume();
                break;
       
        }

    }

    start () {
        // [3]
    }
    onLoad()
    {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN,this.playandresume,this);


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

export function pause() {
    throw new Error('Function not implemented.');
}

