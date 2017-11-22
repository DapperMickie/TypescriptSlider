export interface SliderOptions {
    nextButton:string;
    previousButton:string;
    sliderClass:string;
} 

export class SliderOptions implements SliderOptions {
    nextButton:string;
    previousButton:string;
    sliderClass: string;

    constructor(next:string = ".nnd-slider .nnd-next", previous:string = ".nnd-slider .nnd-previous", slider:string = ".nnd-slider") {
        this.nextButton = next;
        this.previousButton = previous;
        this.sliderClass = slider;
    }
}