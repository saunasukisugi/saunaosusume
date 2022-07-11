'use strict';
{
  {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const ul = document.getElementById('ul1');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;
  
    function updateButtons() {
      prev.classList.remove('hidden');
      next.classList.remove('hidden');
      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
  
      if (currentIndex === slides.length - 1) {
        next.classList.add('hidden');
      }
    }
  
    function moveSlides() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
  
    function setupDots() {
      for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          currentIndex = i;
          updateDots();
          updateButtons();
          moveSlides();
        });
        dots.push(button);
        document.getElementById('nav1').appendChild(button);
      }
  
      dots[0].classList.add('current');
    }
  
    function updateDots() {
      dots.forEach(dot => {
        dot.classList.remove('current');
      })
      dots[currentIndex].classList.add('current');
    }
  
    updateButtons();
    setupDots();
  
  
  
    next.addEventListener('click', () => {
      currentIndex++;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    prev.addEventListener('click', () => {
      currentIndex--;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    window.addEventListener('resize', () => {
      moveSlides();
    });
  }

  {
    const next = document.getElementById('next2');
    const prev = document.getElementById('prev2');
    const ul = document.getElementById('ul2');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;
  
    function updateButtons() {
      prev.classList.remove('hidden');
      next.classList.remove('hidden');
      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
  
      if (currentIndex === slides.length - 1) {
        next.classList.add('hidden');
      }
    }
  
    function moveSlides() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
  
    function setupDots() {
      for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          currentIndex = i;
          updateDots();
          updateButtons();
          moveSlides();
        });
        dots.push(button);
        document.getElementById('nav2').appendChild(button);
      }
  
      dots[0].classList.add('current');
    }
  
    function updateDots() {
      dots.forEach(dot => {
        dot.classList.remove('current');
      })
      dots[currentIndex].classList.add('current');
    }
  
    updateButtons();
    setupDots();
  
  
  
    next.addEventListener('click', () => {
      currentIndex++;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    prev.addEventListener('click', () => {
      currentIndex--;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    window.addEventListener('resize', () => {
      moveSlides();
    });
  }

  {
    const next = document.getElementById('next3');
    const prev = document.getElementById('prev3');
    const ul = document.getElementById('ul3');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;
  
    function updateButtons() {
      prev.classList.remove('hidden');
      next.classList.remove('hidden');
      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
  
      if (currentIndex === slides.length - 1) {
        next.classList.add('hidden');
      }
    }
  
    function moveSlides() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
  
    function setupDots() {
      for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          currentIndex = i;
          updateDots();
          updateButtons();
          moveSlides();
        });
        dots.push(button);
        document.getElementById('nav3').appendChild(button);
      }
  
      dots[0].classList.add('current');
    }
  
    function updateDots() {
      dots.forEach(dot => {
        dot.classList.remove('current');
      })
      dots[currentIndex].classList.add('current');
    }
  
    updateButtons();
    setupDots();
  
  
  
    next.addEventListener('click', () => {
      currentIndex++;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    prev.addEventListener('click', () => {
      currentIndex--;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    window.addEventListener('resize', () => {
      moveSlides();
    });
  }

  {
    const next = document.getElementById('next4');
    const prev = document.getElementById('prev4');
    const ul = document.getElementById('ul4');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;
  
    function updateButtons() {
      prev.classList.remove('hidden');
      next.classList.remove('hidden');
      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
  
      if (currentIndex === slides.length - 1) {
        next.classList.add('hidden');
      }
    }
  
    function moveSlides() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
  
    function setupDots() {
      for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          currentIndex = i;
          updateDots();
          updateButtons();
          moveSlides();
        });
        dots.push(button);
        document.getElementById('nav4').appendChild(button);
      }
  
      dots[0].classList.add('current');
    }
  
    function updateDots() {
      dots.forEach(dot => {
        dot.classList.remove('current');
      })
      dots[currentIndex].classList.add('current');
    }
  
    updateButtons();
    setupDots();
  
  
  
    next.addEventListener('click', () => {
      currentIndex++;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    prev.addEventListener('click', () => {
      currentIndex--;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    window.addEventListener('resize', () => {
      moveSlides();
    });
  }

  {
    const next = document.getElementById('next5');
    const prev = document.getElementById('prev5');
    const ul = document.getElementById('ul5');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;
  
    function updateButtons() {
      prev.classList.remove('hidden');
      next.classList.remove('hidden');
      if (currentIndex === 0) {
        prev.classList.add('hidden');
      }
  
      if (currentIndex === slides.length - 1) {
        next.classList.add('hidden');
      }
    }
  
    function moveSlides() {
      const slideWidth = slides[0].getBoundingClientRect().width;
      ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
  
    function setupDots() {
      for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => {
          currentIndex = i;
          updateDots();
          updateButtons();
          moveSlides();
        });
        dots.push(button);
        document.getElementById('nav5').appendChild(button);
      }
  
      dots[0].classList.add('current');
    }
  
    function updateDots() {
      dots.forEach(dot => {
        dot.classList.remove('current');
      })
      dots[currentIndex].classList.add('current');
    }
  
    updateButtons();
    setupDots();
  
  
  
    next.addEventListener('click', () => {
      currentIndex++;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    prev.addEventListener('click', () => {
      currentIndex--;
      updateButtons();
      updateDots();
      moveSlides();
    });
  
    window.addEventListener('resize', () => {
      moveSlides();
    });
  }
}