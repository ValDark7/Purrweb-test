class Slide {
  slidePosition = 0;
  countClick = 1;
  idAnimation = null;
  speedAnim = 10;

  constructor({ slider, btnNext, btnPrev, dots }) {
    this.slider = slider;
    this.btnNext = btnNext;
    this.btnPrev = btnPrev;
    this.dots = dots;
    this.slides = this.slider.children;
    this.contentWidth = this.slider.clientWidth;

    this.init();
  }

  init() {
    const firstEl = this.slides[0];
    const lastEL = this.slides[this.slides.length - 1];

    const cloneFirstEl = firstEl.cloneNode(true);
    const cloneLastEL = lastEL.cloneNode(true);

    this.slider.appendChild(cloneFirstEl);
    firstEl.before(cloneLastEL, firstEl);

    this.btnPrev.onclick = this.prevSlide.bind(this);
    this.btnNext.onclick = this.nextSlide.bind(this);

    this.slidePosition = this.contentWidth;
    this.createDot();
    this.toSlideItem();
    this.nextDot();
    this.onClickDot();
  }

  toSlideItem() {
    [...this.slides].forEach((slide) => {
      slide.style.transform = `translateX(-${this.slidePosition}px)`;
    });
  }

  toAnimateSlide(callback, direction) {
    clearInterval(this.idAnimation);
    const idTime = (this.idAnimation = setInterval(() => {
      const {
        slidePosition,
        speedAnim,
        contentWidth,
        countClick,
        slides,
        idAnimation,
      } = this;

      if (
        {
          prev: slidePosition - speedAnim <= contentWidth * countClick,
          next: slidePosition + speedAnim >= contentWidth * countClick,
        }[direction]
      ) {
        this.idAnimation = null;
        clearInterval(idTime);
      }

      if (slidePosition + speedAnim >= (slides.length - 1) * contentWidth) {
        this.slidePosition = contentWidth - speedAnim;
        this.countClick = 1;
        this.nextDot();
        this.idAnimation = null;
        clearInterval(idTime);
      }

      if (slidePosition - speedAnim <= 0) {
        this.slidePosition = contentWidth * (slides.length - 2) + speedAnim;
        this.countClick = slides.length - 2;
        this.nextDot();
        this.idAnimation = null;
        clearInterval(idTime);
      }

      callback();
    }, 1));
  }

  prevSlide() {
    if (this.idAnimation == null) {
      this.countClick--;
      this.nextDot();
      this.toAnimateSlide(() => {
        this.slidePosition -= this.speedAnim;
        this.toSlideItem();
      }, "prev");
    }
  }

  nextSlide() {
    if (this.idAnimation == null) {
      this.countClick++;
      this.nextDot();
      this.toAnimateSlide(() => {
        this.slidePosition += this.speedAnim;
        this.toSlideItem();
      }, "next");
    }
  }

  nextDot() {
    this.dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    this.dots[this.countClick - 1]?.classList.add("active");
  }

  onClickDot() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        if (this.idAnimation == null) {
          const triggerDirection =
            this.countClick <= index + 1 ? "next" : "prev";
          this.countClick = index + 1;
          this.nextDot();

          this.toAnimateSlide(() => {
            this.slidePosition += this.speedAnim;
            this.toSlideItem();
          }, triggerDirection);
        }
      });
    });
  }

  createDot() {
    const parentDots = this.dots[0].parentElement;
    for (let i = 1; i < this.slides.length - 2; i++) {
      const createDot = document.createElement("div");
      createDot.classList.add("dot");
      parentDots.appendChild(createDot);
    }
    this.dots = [...parentDots.children];
  }
}

const slider = new Slide({
  slider: document.querySelector(".slider"),
  btnNext: document.querySelector(".next"),
  btnPrev: document.querySelector(".prev"),
  dots: document.querySelectorAll(".dot"),
});
