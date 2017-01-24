define(["jquery","mryarbles","./AnimationFactory","./Animation"],function(jQuery,mry,AnimationFactory,Animation){

    // create proxy for Delegate.
    mryarbles.utils.Utils.createPackage("mryarbles.utils.oop");
    mryarbles.utils.oop.Delegate = mryarbles.utils.Delegate;

    var letters = {};

    var m, r, y, a, b, l, e, s, d, j, o, letr;

    var Logo = function($settings){
        Debug.send("[Logo]");
        Debug.send($settings);
        /*
        if(jQuery.browser.msie && jQuery.browser.version < 9){
            if(page == "login"){
                jQuery("#logo").replaceWith("<img src=\"images/logo-lg.png\" />");
            } else {
                jQuery("#logo").replaceWith("<img src=\"images/logo.png\" />");
            }
        } else {
        */

        var $canvasId = $settings.canvasId,
            $dotRadius = $settings.dotRadius,
            $dotSpace = $settings.dotSpacer,
            $colorsArray = $settings.colors,
            $xOffset = $settings.offsetX,
            $yOffset = $settings.offsetY;

            this.xoffset = null;
            this.yoffset = null;
            $xOffset === undefined ? this.xoffset = 10 : this.xoffset = $xOffset;
            $yOffset === undefined ? this.yoffset = 10 : this.yoffset = $yOffset;
            this.canvas 	= document.getElementById($canvasId);
            this.ctx 		= this.canvas.getContext('2d');
            this.letters = $settings.letters;
            this.word = $settings.word;
            this.r = $dotRadius;
            this.s = $dotSpace;
            this.interval = -1;
            this.newInterval = -1;
            this.wordArray = [];
            this.animation = null;
            this.frameData = null;
            this.colors = $colorsArray;
        /*}*/
    }

    Logo.LOOP_MAX_TIME = 10000;
    Logo.LOOP_MIN_TIME = 4000;
    Logo.UPDATE_INTERVAL = 50;

    Logo.prototype.start = function(){

        //Debug.send("[Logo][start]");
        var lets = this.word.split(",");
        var word = [];

        // add letter data to word array
        for(var l=0;l<lets.length;l++){
            word[l] = this.letters[lets[l]];
        }

        // get the rows in each letter
        var rows = word[0].length;


        // create the rows in wordArray
        // to do so cycle through the rows in each letter
        // and add them to single row in word

        for(var row = 0;row<rows;row++){

            var line = [];
            for(var letter=0;letter<word.length;letter++){
                var arr = word[letter][row];

                //line.concat(word[letter][row]); concat added values weird
                for(var i in arr){
                    line.push(arr[i]);
                }
                line.push(0);
            }
            line.pop();
            this.wordArray.push(line);
        }

        this.startAnimation();

        this.interval = setInterval(mryarbles.utils.Delegate.create(this,this.update),Logo.UPDATE_INTERVAL);

    }

    Logo.prototype.animComplete = function($obj){

        var t = Math.round(Logo.LOOP_MIN_TIME + Math.random() * Logo.LOOP_MAX_TIME);
        this.animation.removeEventListener(Animation.COMPLETE,mryarbles.utils.Delegate.create(this,this.animComplete));
        this.resetLogo();
        this.newInterval = setTimeout(mryarbles.utils.Delegate.create(this,this.startAnimation),t);
    }

    Logo.prototype.resetLogo = function(){
        var factory = new AnimationFactory(this.wordArray,this.colors);
        this.animation = factory.getAnimation(AnimationFactory.RESET);
    }

    Logo.prototype.startAnimation = function(){
        Debug.send("[Logo][startAnimation]");
        this.animation = this.getAnimation();
    }

    Logo.prototype.getAnimation = function(){
        var factory = new AnimationFactory(this.wordArray,this.colors);
        var a = factory.getAnimation();
        a.addEventListener(Animation.COMPLETE,mryarbles.utils.Delegate.create(this,this.animComplete));
        return a;
    }

    Logo.prototype.update = function(){
        this.canvas.width = this.canvas.width;
        var e = Math.PI*2; // start angle radians
        var s = 0; // end angle radians.
        var c = this.ctx;
        var x = null;
        var y = null;
        var offset = (this.r * 2) + this.s;
        if(this.animation != undefined) this.frameData = this.animation.getUpdate();

        for(var r in this.frameData){
            y = this.yoffset + (offset * r);
            for(var c in this.frameData[r]){
                x = this.xoffset + (offset * c);
                if(this.frameData[r][c] != 0){
                    this.ctx.beginPath();
                    this.ctx.shadowOffsetX = this.r/2;
                    this.ctx.shadowOffsetY = this.r/2;
                    this.ctx.shadowBlur    = this.r/4;
                    this.ctx.shadowColor   = 'rgba(0, 0, 0, .25)';
                    this.ctx.fillStyle = "#" + this.frameData[r][c];
                    // arc(x,y,radius,0, start angle radians, end angle randians, direction clockwise is false);
                    this.ctx.arc(x, y, this.r, s, e, true);
                    this.ctx.fill();
                    this.ctx.closePath();
                }
            }
        }

    }

    Logo.prototype.printWordData = function(){
        for(var l in this.wordArray){
            var str = "";
            for(var d in this.wordArray[l]){
                str += this.wordArray[l][d] + ",";
            }
        }

    }

    Logo.prototype.stop = function(){
        clearInterval(this.interval);
        clearInterval(this.newInterval);
        this.resetLogo();
    }

    return Logo;

});