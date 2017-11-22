interface SliderOptions {
    nextButton:string;
    previousButton:string;
}

class SliderOptions implements SliderOptions {
    nextButton:string;
    previousButton:string;

    constructor(next:string = ".nnd-slider .nnd-next", previous:string = ".nnd-slider .nnd-previous") {
        this.nextButton = next;
        this.previousButton = previous;
    }
}


class Slider {
    urls: string[];
    nextButton:string;
    previousButton:string;


    
    constructor(urls:string[], options:SliderOptions = new SliderOptions()) {
        this.urls=urls;    
        this.previousButton = options.previousButton;
        this.nextButton = options.nextButton;
    }

    goNext() {

    }

    goPrevious() {

    }
}