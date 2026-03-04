/**
 * Mobile Detection & Optimization
 */

export class Mobile {
  static isMobile() {
    return navigator.maxTouchPoints > 0 || 
           matchMedia('(pointer:coarse)').matches;
  }
  
  static getOptimalResolution() {
    return Mobile.isMobile() ? 1.5 : 2;
  }
  
  static getOptimalNoiseSize() {
    return Mobile.isMobile() ? 64 : 128;
  }
  
  static getOptimalSteps() {
    return Mobile.isMobile() ? 16 : 32;
  }
  
  static getOptimalParticleCount() {
    return Mobile.isMobile() ? 120 : 300;
  }
  
  static getOptimalShadowMapSize() {
    return Mobile.isMobile() ? 512 : 2048;
  }
  
  static getOptimalShadowType(THREE) {
    return Mobile.isMobile() ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
  }
}

export default Mobile;