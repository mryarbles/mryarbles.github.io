"use strict"
//******************************************************
// Background
//******************************************************
define(["mryarbles", "jquery"], function (mry, jQuery) {

var Background = function (settings) {
	this.canvas = document.getElementById(settings.canvasId);
    this.canvas.setAttribute("width",400);
    this.canvas.setAttribute("height",200);
	this.ctx 		= this.canvas.getContext('2d');
	this.elements 	= [];
	this.interval 	= -1;

	this.colors = settings.colors;
    this.settings = settings;

    Debug.send("[Background]");
    Debug.send(this.settings);

    this.resize();
};

Background.MAX_BOX_WIDTH = 50;


Background.prototype.start = function () {

    jQuery(window).resize( mryarbles.utils.Delegate.create(this,this.onResize));



	for(var x = 0;x<15;x++){
		this.elements.push(this.createShape());
	}
	this.interval = setInterval(mryarbles.utils.Delegate.create(this,this.update),50);

};


Background.prototype.createShape = function(){
	
	var obj = {};
	obj.x = Math.round(Math.random() * this.width);
	obj.y = 0;
	obj.width = Math.round(Math.random() * Background.MAX_BOX_WIDTH);
	obj.height = this.height;
	obj.color = this.colors[Math.floor(Math.random() * this.colors.length)];
	obj.motion = this.getRandomMotion(); 
	
	return obj;
	
};

Background.prototype.getRandomMotion = function(){
	var m = Math.ceil(Math.random() * 5);
	var n = (-m) + Math.round((Math.random() * m * 2));
	if(Math.abs(n) < 1) {
        n = this.getRandomMotion();
    }
	return n;
};

Background.prototype.update = function(){
	var c = this.ctx;
	// clear the canvas
	this.canvas.width = this.canvas.width;


	var l = this.elements.length;
	
	// draw the objects
	for(var x = 0;x<l;x++){
		var o = this.elements[x];
		this.updateObject(o);
		c.beginPath();
		c.fillStyle = "#" + o.color ;
		c.fillRect(o.x,o.y,o.width,this.height);
		c.closePath();
		c.globalCompositeOperation = "lighter";
	}

    //this.drawBackground();
	
};

Background.prototype.drawBackground = function(){
    var c = this.ctx;
    var x = this.canvas.width/2;
    var y = this.canvas.height/2;
    var grd=c.createRadialGradient(x,y,5,x,y,x);
    grd.addColorStop(1,"#e4e4e4");
    grd.addColorStop(1,"black");

    c.beginPath();
    c.fillStyle = grd;
    c.fillRect(0,0,this.canvas.width,this.canvas.height);
    c.closePath();
    c.globalCompositeOperation = "lighter";
};

Background.prototype.updateObject = function($o){
	$o.x = $o.x + $o.motion;
	if($o.x + $o.width < 0 && $o.motion < 0){
		$o.motion *= -1;
	} else if($o.x > this.width && $o.motion > 0) {
		$o.motion *= -1;
	}
};

Background.prototype.onResize = function(){
	this.resize();
};

Background.prototype.resize = function(){

    var rect = {};
    rect.width = 400;//jQuery("#" + this.settings.containerId).width();
    rect.height = 200;//jQuery("#" + this.settings.containerId).height();

	this.canvas.width = this.width = rect.width;
	this.canvas.height = this.height = rect.height;
	
	var l = this.elements.length;
	
	// draw the objects
	for(var x = 0;x<l;x++){
		var o = this.elements[x];
		o.height = this.canvas.height;
	}
	
	Debug.send("[Background][resize] " + this.width + "," + this.height);
};

Background.prototype.setColors = function($arr){
	this.colors = $arr;
	var l = this.elements.length;
	
	// draw the objects
	for(var x = 0;x<l;x++){
		var o = this.elements[x];
		o.color = this.colors[Math.floor(Math.random() * this.colors.length)];
	}
};

    return Background;

});