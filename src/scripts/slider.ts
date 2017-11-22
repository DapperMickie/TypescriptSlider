import { SliderOptions } from './sliderOptions';
import * as $ from 'jquery';

export class Slide {
    url:string;
    index:number;
    hasPreview: boolean;
    preview?:JQuery;

    constructor(url:string, index:number, preview?:string) {
        this.url = url;
        this.index = index;

        if (!preview) {
            this.hasPreview = false;
        } else {
            this.hasPreview = true;
            this.preview = $(preview);
        }
    }
} 


export class Slider {
    slides: Slide[] = [];
    nextButton:string;
    previousButton:string;
    currentSlide:number;
    maxSlides:number = 0;
    container:JQuery;
    options:SliderOptions;
    
    constructor(slides:string[], options:SliderOptions = new SliderOptions()) {
        let i:number = 0;
        
        slides.forEach(urlString => {
            this.slides.push(new Slide(urlString, i));
            i++;
        }); 
        this.options = options;
        this.maxSlides = this.slides.length-1
        this.previousButton = options.previousButton;
        this.nextButton = options.nextButton;

        this.container = $(this.options.sliderClass);
    }

    create() {
        if (this.slides.length === 0) {
            throw new Error("Added 0 slides, cannot create a slider without slides");
        }

        if (this.container === null) {
            throw new Error("Cannot bind to container element");
        }

        this.container.data({nndslider:true});
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