//******************************************************
// Animation
//******************************************************
define(["scripts","createjs"],function($scripts,createjs){

    var Animation = function($type,$dataArray,$colors){
        //EventDispatcher.call(this);
        if ($type !== undefined) {
            this.type = $type;
        } else {
            throw new Error("Animation creation failed. Need to define type: " + this);
        }

        if($dataArray !== undefined){
            this.data = $dataArray;
        } else {
            throw new Error("Animation creation failed. No data set: " + this);
        }

        this.colors = $colors;

        this.listeners = [];
    }

    Animation.COMPLETE = "onAnimationComplete";

    createjs.EventDispatcher.initialize(Animation.prototype);

    Animation.prototype.copyData = function(){
        var res = [];
        for(var r in this.data){
            var line = [];
            for(var c in this.data[r]){
                line.push(this.data[r][c]);
            }
            res.push(line);
        }
        return res;
    }

    Animation.prototype.getUpdate = function(){
        throw new Error("This function needs to be overridden");
    }

    Animation.prototype.toString = function(){
        return "[object Animation]";
    }

    Animation.prototype.complete = function(){
        //Debug.send(this.toString() + "[complete]");
        this.dispatchEvent(Animation.COMPLETE);
        /*for(var i in this.listeners){
         this.listeners[i].apply(this);
         }*/
    }

    return Animation;

});