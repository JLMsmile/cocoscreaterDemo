// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties:
    {

        //用于获取主角的弹跳高度 
        player: {
            default: null,
            type:cc.Node
        },

        //节点1 用于背景移动
        bgSprite1: {
            default: null,
            type:cc.Node
        },

           //节点2 用于背景移动
        bgSprite2: {
            default: null,
            type:cc.Node
        },

        // 引用lable
        scoreDiplay: {
            default: null,
            type:cc.Label
        }
        
    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    steEventControl: function () {
        var self = this;
        var player = self.player.getCompoment(Player);

        cc.eventManager.addListener({
            event: cc.eventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = ev.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                player.node.runAction(player.setJumpAction());

                return true;
            },
            onTouchMoved: function (touch, event) { },
            onTouchEnded:function(touch,event){}
        },self.node)
    },

    onLoad: function () {
        this.steEventControl();
        this.scoreDiplay = 0;
    },

});
