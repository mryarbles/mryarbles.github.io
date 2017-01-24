//******************************************************
// Animations
//******************************************************
define(["mryarbles","./Animation"],function(mry,Animation){



    //==============================================
    // AnimationUpDown
    //==============================================

    var AnimationUpDown = function($dataArray,$colors){
        Animation.call(this, "AnimationUpDown",$dataArray,$colors);
        this.value = -1;
        this.increment = 1;
    }

    mryarbles.utils.Utils.extend(AnimationUpDown,Animation);

    AnimationUpDown.prototype.getUpdate = function(){
        //Animation.call(this, "AnimationUpDown",$dataArray);
        var raw = this.copyData();
        var lines = raw.length;
        if(this.value > lines + 1){
            this.increment = -1;
        } else if (this.value < -1){
            this.increment = 1;
            this.complete();
        }
        this.value += this.increment;
        var res = [];

        //Debug.send("[AnimationUpDown][getUpdate] value: " + this.value);

        for(var r in this.data){
            var line = [];
            for(var c in this.data[r]){
                if(this.data[r][c]){
                    if(r == this.value){
                        line.push(this.colors[1]);
                    } else {
                        line.push(this.colors[0]);
                    }
                } else {
                    line.push(0);
                }
            }
            res.push(line);
        }
        return res;
    }

    AnimationUpDown.prototype.toString = function(){
        return "[object AnimationUpDown]";
    }


    //==============================================
    // AnimationLeftRight
    //==============================================

    var AnimationLeftRight = function($dataArray,$colors){
        Animation.call(this, "AnimationLeftRight",$dataArray,$colors);

        this.values = [-1,this.data[0].length];
        this.increment = 1;
    }

    mryarbles.utils.Utils.extend(AnimationLeftRight,Animation);

    AnimationLeftRight.prototype.getUpdate = function(){
        //Animation.call(this, "AnimationUpDown",$dataArray);
        var raw = this.copyData();
        var cols = raw[0].length;

        if(this.values[0] > cols + 2){
            this.increment = -1;
        } else if (this.values[0] < -2){
            this.increment = 1;
            this.complete();
        }

        this.values[0] += this.increment;
        this.values[1] -= this.increment;
        var res = [];

        //Debug.send("[AnimationLeftRight][getUpdate] " + this.values[0] + ":" + this.values[1]);

        for(var r in this.data){
            var line = [];
            for(var c in this.data[r]){
                if(this.data[r][c]){
                    if(c == this.values[0] || c == this.values[1]){
                        line.push(this.colors[1]);
                    } else {
                        line.push(this.colors[0]);
                    }
                } else {
                    line.push(0);
                }
            }
            res.push(line);
        }
        return res;
    }

    AnimationLeftRight.prototype.toString = function(){
        return "[object AnimationLeftRight]";
    }


    //==============================================
    // AnimationCircle
    //==============================================

    var AnimationCircle = function($dataArray,$colors){
        Animation.call(this, "AnimationCircle",$dataArray,$colors);

        this.radius = 1;
        this.increment = 1;
        this.center = this.getCenter();
        this.maxValue = this.data[0].length/2 + 3;
    }

    mryarbles.utils.Utils.extend(AnimationCircle,Animation);

    var cls = AnimationCircle;

    cls.prototype.getUpdate = function(){
        //Animation.call(this, "AnimationUpDown",$dataArray);
        var raw = this.copyData();
        var cols = raw[0].length;

        if(this.radius > this.maxValue){
            this.increment = -1;
        } else if (this.radius == 0){
            this.increment = 1;
            this.complete();
        }

        this.radius += this.increment;
        var res = [];

        // clear board with off color
        for(var r in this.data){
            var line = [];
            for(var c in this.data[r]){
                if(this.data[r][c]){
                        line.push(this.colors[0]);
                } else {
                    line.push(0);
                }
            }
            res.push(line);
        }
        var angle = 0;
        while(angle < Math.PI * 2){
            var x = this.center.x + Math.cos(angle) * this.radius;
            var y = this.center.y + Math.sin(angle) * this.radius;
            //Debug.send(this.radius + "    " + x + "," + y);
            //this.data[Math.round(x)][Math.round(y)] = this.colors[1];
            angle += .1;
        }

        return res;
    }

    cls.prototype.toString = function(){
        return "[object AnimationCircle]";
    }

    cls.prototype.getCenter = function(){
        var x = Math.round(this.data[0].length/2);
        var y = Math.round(this.data.length/2);
        return {x:x,y:y};
    }

    cls.prototype.testX = function($val){
        x = this.center.x + Math.cos(angle) * this.radius;
        this.radius = ($val - this.center.x)/Math.cos(angle);
    }


    //==============================================
    // AnimationColorDance
    //==============================================

    var AnimationColorDance = function($dataArray,$colors){
        Animation.call(this, "AnimationColorDance",$dataArray,$colors);

        this.last = null;
        this.cycles = 0;
        this.maxCycles = 50;
    }

    mryarbles.utils.Utils.extend(AnimationColorDance,Animation);

    var cls = AnimationColorDance;

    cls.prototype.getUpdate = function(){

        var raw = this.copyData();
        //var rand = Math.random();
        //		if(rand > .25){
        // clear board with off color
        for(var r in raw){
            for(var c in raw[r]){
                if(raw[r][c]){
                    var rand = Math.floor(Math.random() * this.colors.length);
                    raw[r][c] = this.colors[rand];
                }
            }
        }
        //}

        if(this.cycles++ > this.maxCycles){
            this.complete();
        }

        return raw;
    }

    cls.prototype.toString = function(){
        return "[object AnimationColorDance]";
    }


    //==============================================
    // AnimationColorCycle
    //==============================================

    var AnimationColorCycle = function($dataArray,$colors){
        Animation.call(this, "AnimationCycle",$dataArray,$colors);
        this.last = null;
        this.cycles = 0;
        this.maxCycles = 50;
    }

    mryarbles.utils.Utils.extend(AnimationColorCycle,Animation);

    var cls = AnimationColorCycle;

    cls.prototype.getUpdate = function(){
        //var rand = Math.random();
        //if(rand > .50){
            var raw = this.copyData();
            this.last = Math.round(Math.random() * (this.colors.length-1));

            for(var r in raw){
                for(var c in raw[r]){
                        if(raw[r][c]){
                            raw[r][c] = this.colors[this.last];
                        }

                }
            }
        //}

        if(this.cycles++ > this.maxCycles){
            this.complete();
        }

        return raw;
    }

    cls.prototype.toString = function(){
        return "[object AnimationColorCycle]";
    }


    //==============================================
    // AnimationReset
    //==============================================

    var AnimationReset = function($dataArray,$colors){
        Animation.call(this, "AnimationReset",$dataArray,$colors);
        this.resetData = null;
    }

    mryarbles.utils.Utils.extend(AnimationReset,Animation);

    var cls = AnimationReset;

    cls.prototype.getUpdate = function(){
        if(this.resetData == null){
            var raw = this.copyData();
            //var colorIndex = Math.floor(Math.random() * (this.colors.length - 1));
            var colorIndex = 0;
            for(var r in raw){
                for(var c in raw[r]){

                    if(raw[r][c]){

                        raw[r][c] = this.colors[colorIndex];
                    }

                }
            }
            this.resetData = raw;
        }

        return this.resetData;
    }

    cls.prototype.toString = function(){
        return "[object AnimationReset]";
    };


    return [AnimationReset,AnimationUpDown,AnimationLeftRight,AnimationColorDance,AnimationColorCycle];
});

