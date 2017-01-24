//******************************************************
// AnimationFactory
//******************************************************
define(["scripts","jquery","./Animations"],function($scripts,$jquery,animations){
    var AnimationFactory = function($data,$colorsArray){
        this.data = $data;
        this.animations = animations;//[AnimationReset,AnimationUpDown,AnimationLeftRight,AnimationColorDance,AnimationColorCycle];
        //Debug.send("[AnimationFactory]");
        //Debug.send(this.animations);
        this.colors = $colorsArray;

    }

    AnimationFactory.RESET = 0;

    AnimationFactory.prototype.getAnimation = function($typeId){
        var r;
        if($typeId != undefined){
            r = $typeId;
        } else {
            r = 1 + Math.floor(Math.random() * (this.animations.length-1));
        }

        var c = this.animations[r];
        var a = new c(this.data,this.colors);
        return a;
    }

    return AnimationFactory;

});