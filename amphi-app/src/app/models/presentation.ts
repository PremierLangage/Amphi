export class Presentation {
    title: string;
    slides: string[];
    currentSlide : number = 0;
    lastRevealedSlide : number = 0;

    constructor(title: string, slides: string[]) {
        this.title = title;
        this.slides = slides;
    }

    // predicates
    isOnFirstSlide() : boolean {
      return this.currentSlide <= 0;
    }

    isOnLastSlide() : boolean {
      return this.currentSlide >= this.slides.length -1;
    }

    cantRevert() : boolean {
      return this.lastRevealedSlide <= 0;
    }

    //navigation
    setToPreviousSlide() {
      if (this.isOnFirstSlide()) return;
      this.currentSlide--;
    }

    setToNextSlide() {
      if (this.isOnLastSlide()) return;
      this.currentSlide++;
      this.updateLastRevealedSlide();
    }

    revertLastRevealedSlide() {
      if (this.cantRevert()) return;
      this.lastRevealedSlide--;
      this.currentSlide = Math.min(this.lastRevealedSlide, this.currentSlide);
    }

    updateLastRevealedSlide() {
      this.lastRevealedSlide = Math.max(this.lastRevealedSlide, this.currentSlide);
    }

    // getters
    currentSlideContent() : string {
      return this.slides[this.currentSlide];
    }

    nextSlideContent() : string {
      if (this.isOnLastSlide()) return this.currentSlideContent();
      return this.slides[this.currentSlide + 1];
    }
}
