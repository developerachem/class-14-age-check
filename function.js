function zerro(number) {

   return number < 10 ? "0" + number : number;

}



/**
 * 
 * @returns 
 */

function manthCal() {
   let date = new Date();
   let month = date.getMonth();
   
   if( month === 0 ){ // Jan
      return 31;
   }else if( month === 1 ){ // Feb
      return 28;
   }else if( month === 2 ){ // Mar
      return 31;
   }else if( month === 3 ){ // Apr
      return 30;
   }else if( month === 4 ){ // May
      return 31;
   }else if( month === 5 ){ // Jun
      return 30;
   }else if( month === 6 ){ // Jul
      return 31;
   }else if( month === 7 ){ // Agu
      return 31;
   }else if( month === 8 ){ // Sep
      return 30;
   }else if( month === 9 ){ // Oct
      return 31;
   }else if( month === 10 ){ // Nov
      return 30;
   }else if( month === 11 ){ // Dec
      return 31;
   }
}