const tbody = document.getElementById('tbody');
async function getData(){
    let data = await fetch(" https://finstreet-assignment.herokuapp.com/api",{
        method:"GET",
        headers:{
            "Content-type":"application/json"
        }
    });
    // ▼ ▲
    let res = await data.json();
    for(var i = 0;i < res.data.length;i++){
        console.log(res.data.length);
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        th.setAttribute("scope","row");
        th.style.color = "white";
        tr.classList.add("tableRow");
        let diff = parseFloat(res.data[i].sell) - parseFloat(res.data[i].buy);
        let percentage = (Math.abs(diff) / parseInt(res.data[i].buy))*100;
        th.appendChild(document.createTextNode(i+1));
        td1.appendChild(document.createTextNode(`${res.data[i].name}`));
        td2.appendChild(document.createTextNode(`₹  ${res.data[i].last}`));
        td3.appendChild(document.createTextNode(`₹  ${res.data[i].buy} / ₹  ${res.data[i].sell}`));
        td4.appendChild(document.createTextNode(`${percentage.toFixed(2)} %`));
        if(diff >= parseFloat(0)){    
            td4.style.color = "#3DC6C1";
            td5.appendChild(document.createTextNode(`▲ ₹ ${diff.toFixed(2)}`));
            td5.style.color =  "#3DC6C1";
        }
        else{
            td4.style.color = "#DA5757";
            td5.appendChild(document.createTextNode(`▼ ₹ ${diff.toFixed(2)}`));
            td5.style.color = "#DA5757";
        } 
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
    }
}

getData();


