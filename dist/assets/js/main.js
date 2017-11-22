define("sliderOptions", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var SliderOptions = /** @class */ (function () {
        function SliderOptions(next, previous, slider) {
            if (next === void 0) { next = ".nnd-slider .nnd-next"; }
            if (previous === void 0) { previous = ".nnd-slider .nnd-previous"; }
            if (slider === void 0) { slider = ".nnd-slider"; }
            this.nextButton = next;
            this.previousButton = previous;
            this.sliderClass = slider;
        }
        return SliderOptions;
    }());
    exports.SliderOptions = SliderOptions;
});
define("slider", ["require", "exports", "sliderOptions"], function (require, exports, sliderOptions_1) {
    "use strict";
    exports.__esModule = true;
    var Slide = /** @class */ (function () {
        function Slide(url, index, preview) {
            this.url = url;
            this.index = index;
            if (preview === null) {
                this.hasPreview = false;
            }
            else {
                this.hasPreview = true;
                this.preview = document.getElementById(preview);
            }
        }
        return Slide;
    }());
    exports.Slide = Slide;
    var Slider = /** @class */ (function () {
        function Slider(slides, options) {
            if (options === void 0) { options = new sliderOptions_1.SliderOptions(); }
            this.maxSlides = this.slides.length - 1;
            this.slides = slides;
            this.previousButton = options.previousButton;
            this.nextButton = options.nextButton;
            this.container = document.getElementsByClassName(options.sliderClass)[0];
        }
        Slider.prototype.create = function () {
            if (this.slides.length === 0) {
                throw new Error("Added 0 slides, cannot create a slider without slides");
            }
            if (this.container === null) {
                throw new Error("Cannot bind to container element");
            }
        };
        Slider.prototype.goNext = function () {
            var slide = this.currentSlide + 1;
            if (slide > this.maxSlides) {
                slide = 0;
            }
            this.showSlide(slide);
        };
        Slider.prototype.goPrevious = function () {
            var slide = this.currentSlide - 1;
            if (slide < 0) {
                slide = this.maxSlides;
            }
            this.showSlide(slide);
        };
        Slider.prototype.showSlide = function (slideNumber) {
        };
        Slider.prototype.createSlides = function () { };
        return Slider;
    }());
    exports.Slider = Slider;
});
define("main", ["require", "exports", "slider"], function (require, exports, slider_1) {
    "use strict";
    exports.__esModule = true;
    var params = ["/assets/img/image1.jpg", "/assets/img/image2.jpg", "/assets/img/image3.jpg", "/assets/img/image4.jpg", "/assets/img/image5.jpg"];
    var slides;
    var i = 0;
    params.forEach(function (urlString) {
        slides.push(new slider_1.Slide(urlString, i));
        i++;
    });
    var nndSlider = new slider_1.Slider(slides);
    nndSlider.create();
});
