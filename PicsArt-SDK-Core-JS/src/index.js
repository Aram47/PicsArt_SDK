import { Enhance } from './Enhance/index.js';
import { RemoveBackground } from './RemoveBg/index.js';

if (typeof window !== 'undefined') {
  window.PicsArtSDK = {
    Enhance,
    RemoveBackground,
  };
}

export { 
  Enhance,
  RemoveBackground
};