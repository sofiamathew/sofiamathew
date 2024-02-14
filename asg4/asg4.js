

function sign() {
let selection;
  mysign = [
    [3,4,21,20,"Aries","aries.png","you are about to have a wonderful week."],
    [4,5,21,21,"Taurus","taurus.png","you will experience something magical soon."],
    [5,6,22,21,"Gemini","gemini.png","you will connect with someone new this week."],
    [6,7,22,22,"Cancer","cancer.png","your recent hard work will pay off soon."],
    [7,8,23,22,"Leo","leo.png","you will gain clarity about a situation."],
    [8,9,23,21,"Virgo","virgo.png","your theme for this week is: curiosity."],
    [9,10,22,22,"Libra","libra.png","you will experience academic success soon."],
    [10,11,23,21,"Scorpio", "scorpio.png","you will get through your current obstacle."],
    [11,12,22,21,"Sagittarius", "sagittarius.png","you will be surrounded by lots of love soon."],
    [12,1,22,20,"Capricorn", "capricorn.png","you are about to experience immense self growth."],
    [1,2,21,19,"Aquarius","aquarius.png","your theme for this week is: exploration."],
    [2,3,20,20,"Pisces","pisces.png","a new opportunity is on your horizon."]
  ]
  
  birthdateelement = document.getElementById("birthdate");
  birthdate = new Date(birthdateelement.value);
  month = birthdate.getMonth() + 1;
  day = birthdate.getDate() + 1;
  console.log(birthdateelement.value);
  console.log(month);
  console.log(day);
  let selected = 0;
  for (rows=0; rows<mysign.length ;rows++) {
    if (month == mysign[rows][0] && day >= mysign[rows][2] ||
       month == mysign[rows][1] &&  day <= mysign[rows][3]) {
      selectedsign = mysign[rows][4];
      selectedsignimage = mysign[rows][5];
      selectedfortune = mysign[rows][6];
      console.log(selectedsign, selectedsignimage);
      console.log(rows);
      break;
      }
  }
   
   console.log(selectedsign, selectedsignimage);

   let ele = document.querySelector("textarea");
   ele.hidden=false;
   ele.innerText = "You are a " + selectedsign + ", and " + selectedfortune;
   let ele2 = document.getElementById("zimage");
   ele2.hidden=false;
   ele2.src = selectedsignimage;
   

}
