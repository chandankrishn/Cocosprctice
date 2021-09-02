
import { _decorator, Component, Node, systemEvent, SystemEvent, SystemEventType, KeyCode, director, UITransformComponent, UITransform } from 'cc';
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
    @property speed:number=0;
    private flag:boolean=true;
    public posx:number;
    public posy:number;

    start () {
        var rand=Math.random()*2;
        rand=Math.floor(rand);
        console.log("This is a start function  : " + rand);
        if(this.posx==1)
        {
            console.log("yes random is 1 : and right dfunction is called");
            this.movementRight();
        }
        else
        {
            console.log("It is moved to else left function is called");
            this.movementLeft();
        }
        
    }
 
    onTouchStart(touch:any,event:any)
    {
        this.posx=touch.getLocation().x;
        this.posy=touch.getLocation().y;
        console.log('location of touch in X' + this.posx);
        console.log('location of touch in Y' + this.posy);
        console.log(this.node.parent.getComponent(UITransform).width);
        if(this.posx<this.node.parent.getComponent(UITransform).width/2)
        {
            console.log("Character mved to left");
            this.movementLeft();
        }
        else
        {
            console.log("Charcter moved to right");
            this.movementRight();
        }

    }
    onLoad()
    {
        this.node.parent.on(Node.EventType.TOUCH_START,this.onTouchStart,this);
    
    
    }
    movementLeft()
    {
         this.speed = -100;
    }
    movementRight()
    {
            this.speed=100;   
    }
    update (deltaTime: number) 
    {
       
        if(this.node.position.x<-420 || this.node.position.x>420)
        {
            console.log(" Hey game over !!");
            director.pause();
            director.loadScene('gameover');
        }   
        this.node.setPosition(this.node.position.x+this.speed*deltaTime,this.node.position.y);    
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
