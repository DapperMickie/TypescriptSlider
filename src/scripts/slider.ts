import { SliderOptions } from './sliderOptions';

export class Slide {
    url:string;
    index:number;
    hasPreview: boolean;
    preview?:HTMLElement;

    constructor(url:string, index:number, preview?:string) {
        this.url = url;
        this.index = index;

        if (preview === null) {
            this.hasPreview = false;
        } else {
            this.hasPreview = true;
            this.preview = document.getElementById(preview);
        }
    }
} 


export class Slider {
    slides: Slide[];
    nextButton:string;
    previousButton:string;
    currentSlide:number;
    maxSlides:number = this.slides.length-1;
    container:Element;
    
    constructor(slides:Slide[], options:SliderOptions = new SliderOptions()) {
        this.slides=slides;    
        this.previousButton = options.previousButton;
        this.nextButton = options.nextButton;

        this.container = document.getElementsByClassName(options.sliderClass)[0];
    }

    create() {
        if (this.slides.length === 0) {
            throw new Error("Added 0 slides, cannot create a slider without slides");
        }

        if (this.container === null) {
            throw new Error("Cannot bind to container element");
        }


    }

    goNext() {
        let slide:number =this.currentSlide + 1; 
        if (slide > this.maxSlides) {
            slide = 0;
        }  
        
        this.showSlide(slide);
    }

    goPrevious() {
        let slide:number = this.currentSlide -1 ;
        if (slide < 0) {
            slide = this.maxSlides;
        }

        this.showSlide(slide);
    }

    private showSlide(slideNumber:number) {

    }

    private createSlides() {}
}