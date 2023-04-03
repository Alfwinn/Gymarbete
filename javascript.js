

class Bokning {
    constructor(b_id, namn, tel, tid, datum, webtid ){
        this.b_id = b_id;
        this.namn = namn;
        this.tel = tel;
        this.tid = tid;
        this.datum = datum;
        this.webtid = webtid;
    }

}

let datum = document.getElementById("date")
console.log("datum=" + datum)

function bokaTiden(){
    console.log("click")
    let input_namn = document.getElementById("input_namn").value
    console.log("click" + input_namn )

    console.log("click")
    let input_email = document.getElementById("input_email").value
    console.log("click" + input_email )

    console.log("click")
    let input_tel = document.getElementById("input_tel").value
    console.log("click" + input_tel )

    console.log("click")
    let input_datum = document.getElementById("input_datum").value
    console.log("click" + input_datum )

    console.log("click")
    let input_tid = document.getElementById("input_tid").value
    console.log("click" + input_tid )

//    console.log("click")
//    let input_datum = document.getElementById("input_datum").value
//    console.log("click" + input_datum )
//   RESARVERAD TILL TYPER AV KLIPPNINGAR

    
}



async function bokaTid(){

    if (namn_input.value !== ""){
        const now = Date.now(); 
        const id = now.toString()
        console.log(`daum= ${now}`)
        //console.log(`boka tid array Json= ${JSON.stringify(vald_dag_bokningar)}`);
        let t_datum = datum_input.value;
        let bokning = new Bokning(id, namn_input.value, tel_input.value, tid_input.value, t_datum, webtid_input.checked);

        vald_dag_bokningar.push(bokning);
  
        await setDayBokingDataDb(vald_dag_bokningar, t_datum );
        //console.log(`Json= ${JSON.stringify(vald_dag_bokningar)}`);

    }
    else
        alert("Namn Saknas!")

}

async function setDayBokingDataDb(t_bokningar_dag, t_date){
    //console.log(`setB ${t_bokning.namn}`)
    
        localStorage.setItem(t_date , JSON.stringify(t_bokningar_dag));
        //listDayBokings();
        getDayBokinDataDb(t_date);
    }