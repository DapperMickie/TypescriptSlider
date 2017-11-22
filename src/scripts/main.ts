import {Slider, Slide} from './slider'

let params:string[] = ["/assets/img/image1.jpg", "/assets/img/image2.jpg", "/assets/img/image3.jpg", "/assets/img/image4.jpg" ,"/assets/img/image5.jpg"];
let slides:Slide[];

let i:number = 0;

params.forEach(urlString => {
    slides.push(new Slide(urlString, i));
    i++;
});

let nndSlider:Slider = new Slider(slides);
nndSlider.create();
