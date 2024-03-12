export function slideInFromLeft() {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      },
    };
  }
  
  export function slideInFromRight() {
    return {
      hidden: { x: 100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      },
    };
  }
  
  export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };