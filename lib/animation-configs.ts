export const breathingGlow = {
  animate: {
    boxShadow: [
      "0 0 20px 5px rgba(255,255,255,0.3)",
      "0 0 40px 10px rgba(255,255,255,0.5)",
      "0 0 20px 5px rgba(255,255,255,0.3)"
    ]
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathingShadow = {
  animate: {
    boxShadow: [
      "0 4px 20px rgba(0,0,0,0.15)",
      "0 8px 40px rgba(0,0,0,0.25)",
      "0 4px 20px rgba(0,0,0,0.15)"
    ]
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathingGlowAndShadow = {
  animate: {
    boxShadow: [
      "0 0 20px 5px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.15)",
      "0 0 40px 10px rgba(255,255,255,0.5), 0 8px 40px rgba(0,0,0,0.25)",
      "0 0 20px 5px rgba(255,255,255,0.3), 0 4px 20px rgba(0,0,0,0.15)"
    ]
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathingOpacity = {
  animate: {
    opacity: [0.95, 1, 0.95]
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathingBackground = {
  animate: {
    backgroundColor: [
      "rgba(3, 211, 177, 0.95)",
      "rgba(3, 211, 177, 1)",
      "rgba(3, 211, 177, 0.95)"
    ]
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathingScale = {
  animate: {
    scale: [1, 1.05, 1]
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const breathingTextGlow = {
  animate: {
    textShadow: [
      "0 0 10px rgba(255,255,255,0.3)",
      "0 0 20px rgba(255,255,255,0.6)",
      "0 0 10px rgba(255,255,255,0.3)"
    ]
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const oceanicGradient = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
  },
  transition: {
    duration: 15,
    repeat: Infinity,
    ease: "linear" as const
  }
} as const;
