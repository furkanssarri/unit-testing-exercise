import { calculator } from "../calculator/calculator.js";

export function analyzeArray(array) {
   const min = Math.min(...array);
   const max = Math.max(...array);
   const length = array.length;
   const average = _getAvg(array);

   return { min, max, length, average };
}

function _getAvg(array) {
   let sum = 0;

   for (let i = 0; i < array.length; i++) {
      const element = array[i];
      sum += element;
   }
   return sum / array.length;
}
