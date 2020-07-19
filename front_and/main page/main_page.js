

let triger=1;

let mass_id = ["track_buy_id_elem","work_sklad","bibl","otch"];
let mass_text = ["Трекер закупок","Работа со складом","Справочники","Отчеты"];

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


function sleep_left_panel() {
    if (triger==1){

        document.getElementById("left_panel").style.width="60px";

        for(let i=0;i<4;i++)
        {
            document.getElementById(mass_id[i]).innerHTML="";
        }

        triger=triger-1;
    }

    else{
        document.getElementById("left_panel").style.width="300px";
            
        for(let i=0;i<4;i++)
        {
            document.getElementById(mass_id[i]).innerHTML=mass_text[i];
        }

        triger=triger+1;
    }
  }