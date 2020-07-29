



// left_panel______________________________________________________________________________________________

let mass_id = ["track_buy_id_elem","work_sklad","bibl","otch"];
let mass_text = ["Трекер закупок","Работа со складом","Справочники","Отчеты"];


function sleep_left_panel(restart) {
  
  if (localStorage.triger == undefined)
  {
    localStorage.setItem('triger', 1);
  }

  if (restart)
  {
    if(localStorage.triger==1)
    {
      localStorage.triger = 0;
    }
    else
    {
      localStorage.triger = 1;
    }
  }

  if (localStorage.triger=="1"){

      document.getElementById("left_panel").style.width="60px";

      for(let i=0;i<4;i++)
      {
        document.getElementById(mass_id[i]).innerHTML="";
      }
      localStorage.triger = 0;
  }

    else{

        document.getElementById("left_panel").style.width="300px";
            
        for(let i=0;i<4;i++)
        {
          document.getElementById(mass_id[i]).innerHTML=mass_text[i];
        }

        localStorage.triger = 1;
    }
  }


document.addEventListener("DOMContentLoaded", function() {sleep_left_panel(true);});



// left_panel______________________________________________________________________________________________