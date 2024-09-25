document.addEventListener("DOMContentLoaded", () => {
  const sequence = document.getElementById("sequence");
  if (!sequence) return;

  const totalFrames = 331;
  let images = [];
  let isImagesLoaded = false;

  const loadImages = () => {
    if (isImagesLoaded) return;
    isImagesLoaded = true;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = `/cdn/shop/t/7/assets/assemble${String(i).padStart(
        3,
        "0"
      )}_LOW.webp`;
      images.push(img);
    }
  };

  let lastImgIndex = 0;
  const obj = { frame: totalFrames - 1 };

  function updateImage() {
    const imgIndex = Math.max(0, Math.floor(obj.frame));
    if (imgIndex !== lastImgIndex) {
      sequence.src = images[imgIndex].src;
      lastImgIndex = imgIndex;
    }
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(obj, {
    frame: 0,
    ease: "none",

    scrollTrigger: {
      trigger: ".image-sequence-container",
      start: "unique",
      end: "+=120%",
      scrub: true,
      pin: true,
      onEnter: loadImages,
      onUpdate: updateImage,
      onLeaveBack: () =>
        gsap.set(".image-sequence-container", { clearProps: "all" }),
    },
  });

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadImages();
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".image-sequence-container"));
});

// style-2
document.addEventListener("DOMContentLoaded", () => {
  const sequence = document.getElementById("sequence2");
  if (!sequence) return;

  const totalFrames = 244; // Total number of frames
  let images = [];
  let isImagesLoaded = false;

  // Lazy load images when needed
  const loadImages = () => {
    if (isImagesLoaded) return; // Avoid reloading images
    isImagesLoaded = true;

    for (let i = 25; i <= 268; i++) {
      const img = new Image();
      img.src = `/cdn/shop/t/7/assets/DESPIECE_${String(i).padStart(
        5,
        "0"
      )}.png`;
      images.push(img);
    }
  };

  // Throttle image updates
  let lastImgIndex = 0;
  const frameData = { frame: totalFrames - 1 };

  function updateImage() {
    const imgIndex = Math.max(0, Math.floor(frameData.frame));
    if (imgIndex !== lastImgIndex) {
      sequence.src = images[imgIndex].src;
      lastImgIndex = imgIndex;
    }
  }

  // Initialize GSAP ScrollTrigger for smooth animation
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(frameData, {
    frame: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".image-sequence-container2",
      start: "unique",
      end: "+=120%",
      scrub: true,
      pin: true,
      onEnter: loadImages, // Load images on scroll start
      onUpdate: updateImage,
    },
  });

  // Use IntersectionObserver to load images when the container is in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadImages(); // Start loading images
        observer.disconnect(); // Stop observing once images are loaded
      }
    },
    { threshold: 0.5 } // Load when 50% of the container is visible
  );

  observer.observe(document.querySelector(".image-sequence-container2"));
});

// style-3
document.addEventListener("DOMContentLoaded", () => {
  const sequence = document.getElementById("sequence3");
  if (!sequence) return;

  const totalFrames = 300; // Total number of frames
  let images = [];
  let isImagesLoaded = false;

  // Lazy load images when needed
  const loadImages = () => {
    if (isImagesLoaded) return; // Avoid reloading images
    isImagesLoaded = true;

    for (let i = totalFrames; i >= 0; i--) {
      const img = new Image();
      img.src = `/cdn/shop/t/7/assets/LENTES${String(i).padStart(
        3,
        "0"
      )}_LOW.webp`;
      images.push(img);
    }
  };

  // Throttle image updates
  let lastImgIndex = 0;
  const frameData = { frame: totalFrames - 1 };

  function updateImage() {
    const imgIndex = Math.max(0, Math.floor(frameData.frame));
    if (imgIndex !== lastImgIndex) {
      sequence.src = images[imgIndex].src;
      lastImgIndex = imgIndex;
    }
  }

  // Initialize GSAP ScrollTrigger for smooth animation
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(frameData, {
    frame: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".image-sequence-container3",
      start: "unique",
      end: "+=120%",
      scrub: true,
      pin: true,
      onEnter: loadImages, // Load images on scroll start
      onUpdate: updateImage,
    },
  });

  // Use IntersectionObserver to load images when the container is in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadImages(); // Start loading images
        observer.disconnect(); // Stop observing once images are loaded
      }
    },
    { threshold: 0.5 } // Load when 50% of the container is visible
  );

  observer.observe(document.querySelector(".image-sequence-container3"));
});

// style-4
document.addEventListener("DOMContentLoaded", () => {
  const sequence = document.getElementById("sequence4");
  if (!sequence) return;

  const totalFrames = 360; // Total number of frames
  let images = [];
  let isImagesLoaded = false;

  // Lazy load images when needed
  const loadImages = () => {
    if (isImagesLoaded) return; // Avoid reloading images
    isImagesLoaded = true;

    for (let i = totalFrames; i >= 0; i--) {
      const img = new Image();
      img.src = `/cdn/shop/t/7/assets/TECH_03_${String(i).padStart(
        4,
        "0"
      )}_LOW.webp`;
      images.push(img);
    }
  };

  // Throttle image updates
  let lastImgIndex = 0;
  const frameData = { frame: totalFrames - 1 };

  function updateImage() {
    const imgIndex = Math.max(0, Math.floor(frameData.frame));
    if (imgIndex !== lastImgIndex) {
      sequence.src = images[imgIndex].src;
      lastImgIndex = imgIndex;
    }
  }

  // Initialize GSAP ScrollTrigger for smooth animation
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(frameData, {
    frame: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".image-sequence-container4",
      start: "unique",
      end: "+=120%",
      scrub: true,
      pin: true,
      onEnter: loadImages, // Load images on scroll start
      onUpdate: updateImage,
    },
  });

  // Use IntersectionObserver to load images when the container is in view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadImages(); // Start loading images
        observer.disconnect(); // Stop observing once images are loaded
      }
    },
    { threshold: 0.5 } // Load when 50% of the container is visible
  );

  observer.observe(document.querySelector(".image-sequence-container4"));
});
