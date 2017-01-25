// Learning Switch Statements

var day ="Friday";

switch(day){
  case "Monday":
    console.log('Working');
  case "Friday":
    console.log('Party');
  default:
    console.log('Still working');

    if(day === "Monday"){
      console.log('Yes');
    }else if (day === "Friday"){
      console.log("YesYes");
    }else{
      console.log("still working...");
    }
}
