

const updateTime = 1000 / 60
const rAF = window.requestAnimationFrame || function(cb) { setTimeout(cb, updateTime) }
var pow = Math.pow,
  
  sqrt = Math.sqrt,
  
  sin = Math.sin,
  
  cos = Math.cos,
  
  PI = Math.PI,
  
  c1 = 1.70158,
  
  c2 = c1 * 1.525,
  
  c3 = c1 + 1,
  
  c4 = (2 * PI) / 3,
  
  c5 = (2 * PI) / 4.5;


/**
 * 简单的执行缓动函数的方法
 * @param {number} startValue - 初始值
 * @param {number} endValue - 最终值
 * @param {number} during - 持续时间
 * @param {function} easingFunc - 缓动函数
 * @param {function} stepCb - 每次更新动画状态后执行的函数
 * @return {Promise}
 */
function tween(startValue, endValue, during, easingFunc, stepCb, endCallback) {
  const changeValue = endValue - startValue
  const updateCount = during / updateTime
  const perUpdateDistance = 1 / updateCount
  let position = 0
  
  function step() {
    const state = startValue + changeValue * easingFunc(position)
    stepCb(state)
    position += perUpdateDistance
    if (position < 1) {
      rAF(step)
    } else {
      endCallback()
    }
  }
  step()
}

const Animations = {
  easeInQuad: function (x) {
    return x * x;
  },
  
  easeOutQuad: function (x) {
    return 1 - (1 - x) * (1 - x);
  },
  
  easeInOutQuad: function (x) {
    
    return x < 0.5 ?
      
      2 * x * x :
      
      1 - pow(-2 * x + 2, 2) / 2;
    
  },
  
  easeInCubic: function (x) {
    
    return x * x * x;
    
  },
  
  easeOutCubic: function (x) {
    
    return 1 - pow(1 - x, 3);
    
  },
  
  easeInOutCubic: function (x) {
    
    return x < 0.5 ?
      
      4 * x * x * x :
      
      1 - pow(-2 * x + 2, 3) / 2;
    
  },
  
  easeInQuart: function (x) {
    
    return x * x * x * x;
    
  },
  
  easeOutQuart: function (x) {
    
    return 1 - pow(1 - x, 4);
    
  },
  
  easeInOutQuart: function (x) {
    
    return x < 0.5 ?
      
      8 * x * x * x * x :
      
      1 - pow(-2 * x + 2, 4) / 2;
    
  },
  
  easeInQuint: function (x) {
    
    return x * x * x * x * x;
    
  },
  
  easeOutQuint: function (x) {
    
    return 1 - pow(1 - x, 5);
    
  },
  
  easeInOutQuint: function (x) {
    
    return x < 0.5 ?
      
      16 * x * x * x * x * x :
      
      1 - pow(-2 * x + 2, 5) / 2;
    
  },
  
  easeInSine: function (x) {
    
    return 1 - cos(x * PI / 2);
    
  },
  
  easeOutSine: function (x) {
    
    return sin(x * PI / 2);
    
  },
  
  easeInOutSine: function (x) {
    
    return -(cos(PI * x) - 1) / 2;
    
  },
  
  easeInExpo: function (x) {
    
    return x === 0 ? 0 : pow(2, 10 * x - 10);
    
  },
  
  easeOutExpo: function (x) {
    
    return x === 1 ? 1 : 1 - pow(2, -10 * x);
    
  },
  
  easeInOutExpo: function (x) {
    
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
      
      pow(2, 20 * x - 10) / 2 :
      
      (2 - pow(2, -20 * x + 10)) / 2;
    
  },
  
  easeInCirc: function (x) {
    
    return 1 - sqrt(1 - pow(x, 2));
    
  },
  
  easeOutCirc: function (x) {
    
    return sqrt(1 - pow(x - 1, 2));
    
  },
  
  easeInOutCirc: function (x) {
    
    return x < 0.5 ?
      
      (1 - sqrt(1 - pow(2 * x, 2))) / 2 :
      
      (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    
  },
  
  easeInElastic: function (x) {
    
    return x === 0 ? 0 : x === 1 ? 1 :
      
      -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    
  },
  
  easeOutElastic: function (x) {
    
    return x === 0 ? 0 : x === 1 ? 1 :
      
      pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    
  },
  
  easeInOutElastic: function (x) {
    
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ?
      
      -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 :
      
      pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    
  },
  
  easeInBack: function (x) {
    
    return c3 * x * x * x - c1 * x * x;
    
  },
  
  easeOutBack: function (x) {
    
    return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    
  },
  
  easeInOutBack: function (x) {
    
    return x < 0.5 ?
      
      (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 :
      
      (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    
  }
}

module.exports = {
  tween,
  Animations
}
