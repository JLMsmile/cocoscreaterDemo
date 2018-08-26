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

    properties: {
        jumpHeight: 0,
        jumpTimes: 0,
        maxMoveSpeed:0,


    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},

    setJumpUpAction: function () {
        var jumpUp = cc.moveBy(this.jumpTimes, cc.v2(0, this.jumpHeight));

        return jumpUp;
    },

    setJumpDownAction: function () {
        var jumpDown = cc.moveBy(thi.jumpTimes, cc.v2(0, -this.maxMoveSpeed));
        return jumpDown;
    },

    setJumpRunAction: function () {
        this.jumpAction = this.setJumpUpAction();
        this.maxMoveSpeed = this.setJumpDownAction();

        var seq = cc.sequence(this.jumpAction, this.maxMoveSpeed);
        this.node.runAction(seq);
    },


    playerDownMove: function () {
        var playerDown = cc.moveBy(0.8, cc.v2(0, -5));
        return playerDown;
    },
 
    onLoad: function () {
        this.setJumpRunAction();
    },

    update: function (dt) {
        this.node.runAction(this.playerDownMove());
    }




});
