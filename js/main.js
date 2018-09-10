//Start Home js
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}


var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//End Home js
var myVar2 = setInterval(function () { myTimer(".progress1", "demo1", 80) }, 1);
var myVar3 = setInterval(function () { myTimer(".progress2", "demo2", 80) }, 1);
var myVar4 = setInterval(function () { myTimer(".progress3", "demo3", 90) }, 1);
var myVar5 = setInterval(function () { myTimer(".progress4", "demo4", 80) }, 1);
var myVar6 = setInterval(function () { myTimer(".progress5", "demo5", 98) }, 1);
var myVar7 = setInterval(function () { myTimer(".progress6", "demo6", 98) }, 1);
var count = 0;
function myTimer(a, b, c) {
    if (count < c) {
        $(a).css('width', count + "%");
        count += 0.03;
        document.getElementById(b).innerHTML = Math.round(count) + "%";
        // code to do when loading
    }
    else if (count > 99) {
        // code to do after loading
        count = 0;
    }
}



/**Start animate tag */

$(document).ready(function () {
    animationHover('#contact-me', "tada");
    animationHover('#download', "tada");
    animationHover('#ic-toolbox', "zoomInDown");
    animationHover('#ic-pencil', "zoomInDown");

    animationHover('#ic-telescope', "zoomInDown");
    animationHover('#ic-tools-2', "zoomInDown");
    animationHover('#ic-wallet', "zoomInDown");
    animationHover('#ic-telescope', "zoomInDown");
    animationHover('#Instructionk', "zoomInDown");

    animationHover('#ocu', "tada");
    animationHover('#avatar', "zoomInDown");
    animationHover('#git', "flash");
    animationHover('#ic-phone', "wobble");
    animationHover('#ic-streetsign', "wobble");
    animationHover('#ic-clock', "wobble");

    function animationHover(element, animation) {
        element = $(element);
        element.hover(
            function () {
                element.addClass('animated ' + animation);
            },
            function () {
                //wait for animation to finish before removing classes
                window.setTimeout(function () {
                    element.removeClass('animated ' + animation);
                }, 10000);
            });
    }


});

/**End animated tag */


