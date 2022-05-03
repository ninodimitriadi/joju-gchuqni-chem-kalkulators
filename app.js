function f1_1(){
    w1 = document.getElementById("div1")
    w1.innerText = "ორშაბათი"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
function f1_2(){
    w1 = document.getElementById("div1")
    w1.innerText = "სამშაბათი"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
function f1_3(){
    w1 = document.getElementById("div1")
    w1.innerText = "ოთხშაბათი"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
function f1_4(){
    w1 = document.getElementById("div1")
    w1.innerText = "ხუთშაბათი"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
function f1_5(){
    w1 = document.getElementById("div1")
    w1.innerText = "პარასკევი"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
function f1_6(){
    w1 = document.getElementById("div1")
    w1.innerText = "შაბათი"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
function f1_7(){
    w1 = document.getElementById("div1")
    w1.innerText = "კვირა"
    w1.style.fontSize = "25px";
    w1.style.fontWeight = "bold";
    w1.style.textAlign = "center";
    w1.style.padding = "auto"
}
const calculate = []
function calculat(){
    num1 = eval(calculate[0])
    sign = calculate[1]
    num2 = eval(calculate[2])    

    if (sign === "+") {
        fnl = num1 + num2
        disp.innerText = fnl;
    }
    else if (sign === "-") {
        fnl = num1 - num2
        disp.innerText = fnl;
    }
    else if (sign === "*") {
        fnl = num1 * num2
        disp.innerText = fnl;
    }
    else if (sign === "/") {
        fnl = num1 / num2
        disp.innerText = fnl;
    }
    else if (sign === "**") {
        fnl = num1 ** num2
        disp.innerText = fnl;
    }
    else if (sign === "-") {
        fnl = num1 - num2
        disp.innerText = fnl;
    }

}
function f2_mult(){
    v = document.getElementById("mult").value;
    disp = document.getElementById("div2");
    disp.innerText = v;
    calculate.push(v)
}
function f2_div(){
    v = document.getElementById("div").value;
    disp = document.getElementById("div2");
    disp.innerText = v;
    calculate.push(v)
}
function f2_sqr(){
    v = document.getElementById("sqr").value;
    disp = document.getElementById("div2");
    disp.innerText = v;
    calculate.push(v)
}
function f2_clr(){
    v = document.getElementById("clear").value = "";
    disp = document.getElementById("div2");
    disp.innerText = v;
    while (0 < calculate.length) {
        calculate.pop();
    }
}
function f2_seven(){
    v = document.getElementById("seven").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_eight(){
    v = document.getElementById("eight").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_nine(){
    v = document.getElementById("nine").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_pluse(){
    v = document.getElementById("pluse").value;
    disp = document.getElementById("div2");
    disp.innerText = v;
    calculate.push(v)
}
function f2_four(){
    v = document.getElementById("four").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_five(){
    v = document.getElementById("five").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_six(){
    v = document.getElementById("six").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_minus(){
    v = document.getElementById("minus").value;
    disp = document.getElementById("div2");
    disp.innerText = v;
    calculate.push(v)
}
function f2_one(){
    v = document.getElementById("one").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_two(){
    v = document.getElementById("two").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_three(){
    v = document.getElementById("three").value;
    disp = document.getElementById("div2");
    disp.innerText += v;
    calculate.push(v)
}
function f2_equal(){
    v = document.getElementById("equal").value;
    disp = document.getElementById("div2");
    calculat()

}

function f_3(){
    P = document.getElementById("P").value;
    T = document.getElementById("T").value;
    R = document.getElementById("R").value;
    show = document.getElementById("display");

    P = eval(P);
    T = eval(T);
    R = eval(R);

    perc = ((P*T*R) / 100);
    show.innerText = ("მარტივი პროცენტია: "+perc+"");
}
function f_3(){
    P = document.getElementById("P").value;
    T = document.getElementById("T").value;
    R = document.getElementById("R").value;
    show = document.getElementById("display");

    P = eval(P);
    T = eval(T);
    R = eval(R);

    perc = ((P*T*R) / 100);
    show.innerText = ("მარტივი პროცენტია: "+perc+"");
}
function f_4(){
    Ko = document.getElementById("Ko").value;
    P2 = document.getElementById("P2").value;
    T2 = document.getElementById("T2").value;
    show = document.getElementById("display2");

    Ko = eval(Ko);
    T2 = eval(T2);
    P2 = eval(P2);

    Kt = Ko * ((1 + (P2/100)) ** T2);
    show.innerText = ("რთული პროცენტია: " +Kt+"");
}
function f_5(){
    num_array = []
    num_space = document.getElementById("number_space")
    for (i=0; i < 30; i++){
        num = Math.floor(Math.random() * 30)
        num_array.push(num);
    }
    num_space.innerText = (num_array)
}  
function f_6(){
    num_array = []
    min = document.getElementById("min").value
    max = document.getElementById("max").value

    min = eval(min)
    max = eval(max)

    num_space = document.getElementById("number_space2")
    for (i=0; i < 30; i++){
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        num_array.push(num);
    }
    num_space.innerText = (num_array)
} 
function f_7(){
    row = document.getElementById("row").value;
    column = document.getElementById("column").value;
    picture = document.getElementById("pictures").value;
    table = document.getElementById("table");

    row = eval(row);
    column = eval(column);
    picture = eval(picture);

    for (i=0; i < row; i++){
        row = table.insertRow(i);
            for (x=0; x < column; x++){
                cell = row.insertCell(x);
                cell.innerHTML = "<img src='imgs/img4.jpg'></img>";
        }
    }
}