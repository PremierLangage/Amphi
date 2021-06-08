export class Presentation {
    title: string;
    slides: string[];
    currentSlide : number = 0;
    lastRevealedSlide : number = 0;

    constructor(title: string, slides: string[]) {
        this.title = title;
        this.slides = slides;
    }

    isOnFirstSlide() : boolean {
      return this.currentSlide <= 0;
    }

    isOnLastSlide() : boolean {
      return this.currentSlide >= this.slides.length -1;
    }

    setToPreviousSlide() {
      if (this.currentSlide <= 0) return;
      this.currentSlide--;
    }

    setToNextSlide() {
      if (this.currentSlide >= this.slides.length -1) return;
      this.currentSlide++;
    }

    currentSlideContent() : string {
      return this.slides[this.currentSlide];
    }

    nextSlideContent() : string {
      if (this.currentSlide + 1 >= this.slides.length) return this.currentSlideContent();
      return this.slides[this.currentSlide + 1];
    }
}
