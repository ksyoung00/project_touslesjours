document.addEventListener("DOMContentLoaded", function () {
  // GSAP 및 ScrollTrigger 초기화
  gsap.registerPlugin(ScrollTrigger);

  // 배경색 변경
  gsap.utils.toArray("section").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
      trigger: item,
      start: "top 5%",
      end: "bottom 0%",
      markers: true,

      onEnter: () =>
        gsap.to("body", {
          backgroundColor: color,
          duration: 0,
        }),
      onEnterBack: () =>
        gsap.to("body", {
          backgroundColor: color,
          duration: 0,
        }),
    });
  });

  // main 섹션 고정
  const panel = document.querySelector("#main");

  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 2,
    markers: false,
  });

  // 마우스 움직임에 따른 이미지 효과
  const movingImages = document.querySelectorAll(".img");

  document.addEventListener("mousemove", function (event) {
    const { clientX, clientY } = event;

    movingImages.forEach((movingImage) => {
      gsap.to(movingImage, {
        duration: 0.5,
        x: (clientX / window.innerWidth) * 30,
        y: (clientY / window.innerHeight) * 30,
        ease: "power3.out",
        opacity: 1,
      });
    });
  });

  // 스크롤하면 maincenter 글씨 크기 작아지며 없어짐
  gsap.utils.toArray(".main-center ul").forEach((element) => {
    gsap.to(element, {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom 0%",
        scrub: 0.5,
        pinSpacing: false,
        toggleActions: "reverse",
        onEnterBack: () => {
          // 스크롤을 위로 올릴 때 다시 원래 크기로
          gsap.to(element, {
            scale: 1,
          });
        },
      },
    });

    gsap.to(element, {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom 0%",
        scrub: 0.5,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // .img-box1
  // 스크롤하면서 옆으로 이동하고 사라지는 애니메이션
  gsap.utils.toArray(".img-box1").forEach((element) => {
    gsap.to(element, {
      x: "-200%",
      y: "-30%",
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom 20%",
        scrub: 3,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // .img-box2
  gsap.utils.toArray(".img-box2").forEach((element) => {
    gsap.to(element, {
      x: "200%",
      y: "-30%",
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom 20%",
        scrub: 3,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // .main-swiper
  // 스크롤하면 휴대폰 크기 작아짐
  gsap.utils.toArray(".main-swiper").forEach((element) => {
    gsap.to(element, {
      scale: 0.6,
      y: "-70%",
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "bottom 0%",
        scrub: 0.5,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // .main-text-container
  // 스크롤하면 글씨 나타남
  gsap.set(".main-text-container", {
    scale: 0,
    opacity: 0,
  });

  // 스크롤 시 요소를 나타나게 함
  gsap.to(".main-text-container", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".main-text-container",
      start: "top 80%", // 디자인에 맞게 조절하세요
      end: "bottom 20%",
      scrub: 1,
      pinSpacing: false,
      toggleActions: "play reverse play reverse", // 위로 스크롤할 때 애니메이션 되돌림
      onEnterBack: () => {
        gsap.to(".main-text-container", {
          scale: 1,
        });
      },
    },
  });

  // .main-swiper
  // 스크롤하면 휴대폰 크기 작아짐
  gsap.utils.toArray(".main-swiper").forEach((element) => {
    gsap.to(element, {
      scale: 0.6,
      y: "-50%",
      scrollTrigger: {
        trigger: element,
        start: "top 50%",
        end: "bottom 0%",
        scrub: 0.5,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });
});
