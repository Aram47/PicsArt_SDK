import { Enhance } from './Enhance/index.js';
// export * from './RemoveBg/index.js';

if (typeof window !== 'undefined') {
  window.PicsArtSDK = {
    Enhance,
    // RemoveBg,
  };
}

export { 
  Enhance
  // RemoveBg 
};