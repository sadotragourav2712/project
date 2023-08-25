let btn = document.body.querySelector("#btn");
let btn2 = document.body.querySelector("#btn2");
let input = document.body.querySelector("#inputcolor");

input.addEventListener(
    'keyup',
    function (event) {
        if (event.key === "Enter") {
            bcolor = this.value;

            document.body.style.backgroundColor = this.value;

            this.value = ""
        }
    }
)

btn.addEventListener(

    'click',
    function () {

        document.body.style.backgroundColor = input.value;

    }

)
btn2.addEventListener(
    'click'
    ,getColor
)
let c=""
function getColor(){
    let a=Math.floor(Math.random()*16777215);
    c="#"+a.toString(16);
    // console.log(c);
    document.body.style.backgroundColor=c;

}