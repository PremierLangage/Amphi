export class Slide {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

export class Presentation {
  title: string;
  slides: Slide[];
  currentSlideNumber: number = 0;
  lastRevealedSlide: number;

  constructor(title: string, slides: Slide[], page ?: number) {
    this.title = title;
    this.slides = slides;
    this.currentSlideNumber = page || 0;
    this.lastRevealedSlide = this.currentSlideNumber;
  }

  // predicates
  isOnFirstSlide(): boolean {
    return this.currentSlideNumber <= 0;
  }

  isOnLastSlide(): boolean {
    return this.currentSlideNumber >= this.slides.length - 1;
  }

  cantRevert(): boolean {
    return this.lastRevealedSlide <= 0;
  }

  //navigation
  setToPreviousSlide() {
    if (this.isOnFirstSlide()) return;
    this.currentSlideNumber--;
  }

  setToNextSlide() {
    if (this.isOnLastSlide()) return;
    this.currentSlideNumber++;
    this.updateLastRevealedSlide();
  }

  setToNthSlide(n: number) {
    this.currentSlideNumber = Math.min(Math.max(n, 0), this.slides.length);
  }

  revertLastRevealedSlide() {
    if (this.cantRevert()) return;
    this.lastRevealedSlide--;
    this.currentSlideNumber = Math.min(this.lastRevealedSlide, this.currentSlideNumber);
  }

  updateLastRevealedSlide() {
    this.lastRevealedSlide = Math.max(this.lastRevealedSlide, this.currentSlideNumber);
  }

  // getters
  currentSlide(): Slide {
    return this.slides[this.currentSlideNumber];
  }

  nextSlide(): Slide {
    if (this.isOnLastSlide()) return this.currentSlide();
    return this.slides[this.currentSlideNumber + 1];
  }
}
