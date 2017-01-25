//******************************************************
// Intro
//******************************************************
define(["mryarbles","./Logo","./Background","jquery"],function(mry,Logo,Background,jQuery){


    var Intro = function(settings,$containerElId){


        this.settings = settings;

        if($containerElId === undefined) $containerElId = "intro";

        this.containerId = $containerElId;

        this.el = document.getElementById($containerElId);

        var bgCanvas = document.createElement("canvas");
        bgCanvas.setAttribute("id",this.settings.intro.background.canvasId);


        this.el.appendChild(bgCanvas);

        var logoDiv = document.createElement("div");
        logoDiv.setAttribute("id","logo-holder");

        var logoCanvas = document.createElement("canvas");
        logoCanvas.setAttribute("id","logo");
        logoCanvas.setAttribute("width",this.settings.intro.logo.width);
        logoCanvas.setAttribute("height",this.settings.intro.logo.height);

        logoDiv.appendChild(logoCanvas);

        this.el.appendChild(logoDiv);

        var bg = new Background(this.settings.intro.background);
        bg.start();

        var logo = new Logo(this.settings.intro.logo);
        logo.start();

        this.logo = logo;

        jQuery("#" + this.settings.intro.containerId).animate({opacity:1},1000);

        this.window = jQuery(window);

        this.window.on('resize',mryarbles.utils.Delegate.create(this,this.onResize));

        this.onResize();

    };

    Intro.prototype.runOut = function(){
        console.log("[Intro][runOutro]");
        jQuery("#" + this.settings.intro.containerId).height(0);
        this.window.off("resize");
        this.logo.stop();

        setTimeout(mryarbles.utils.Delegate.create(this,this.destroy),2000);
    }

    Intro.prototype.onResize = function(){
        console.log("[Intro][onResize]");
        var w = this.window.width();
        var h = this.window.height();

        console.log("w:" + w + " h:" + h);

        jQuery("#" + this.settings.intro.containerId).width(w).height(h);

    };


    Intro.prototype.destroy = function(){
        jQuery("#logo-holder").remove();
    }


    return Intro;

});