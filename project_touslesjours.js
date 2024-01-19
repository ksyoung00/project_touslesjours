document.addEventListener("DOMContentLoaded", function () {
  // GSAP 및 ScrollTrigger 초기화
  gsap.registerPlugin(ScrollTrigger);

  // 배경색 변경
  gsap.utils.toArray("section").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
      trigger: item,
      start: "top 0%",
      end: "bottom 5%",
      markers: true,

      onEnter: () =>
        gsap.to("body", {
          backgroundColor: color,
          duration: 0.01,
        }),
      onEnterBack: () =>
        gsap.to("body", {
          backgroundColor: color,
          duration: 0.01,
        }),
    });
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
      });
    });
  });

  // 이미지가 스크롤하면서 옆으로 이동하고 사라지는 애니메이션
  gsap.utils.toArray(".img-box1").forEach((element) => {
    gsap.to(element, {
      x: "200%", // 이미지가 우측으로 이동하여 사라지도록 설정
      opacity: 0, // 투명도를 0으로 설정하여 사라지도록 함
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // 다른 이미지에 대한 동일한 설정 추가
  gsap.utils.toArray(".img-box2").forEach((element) => {
    gsap.to(element, {
      x: "-200%", // 이미지가 좌측으로 이동하여 사라지도록 설정
      opacity: 0, // 투명도를 0으로 설정하여 사라지도록 함
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // 스크롤하면 휴대폰 크기 작아짐
  gsap.utils.toArray(".main-swiper").forEach((element) => {
    gsap.to(element, {
      scale: 0.6,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        pinSpacing: false,
        toggleActions: "reverse",
      },
    });
  });

  // 스크롤하면 글씨 나타남
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-text-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      markers: true,
    },
  });

  tl.to(".main-text-container", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 1,
  });
});
