const endDate = "15 June 2024 02:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
function clock() {
    const end = new Date(endDate);
    const now = new Date();
    console.log(end, now);
    const diff = (end - now)/1000;
    console.log(diff);
    
    if(diff < 0)
        return;

    inputs[0].value = (Math.floor(diff/3600 / 24));
    inputs[1].value = (Math.floor((diff/3600) % 24));
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor(diff%60);
}
clock();
setInterval(
    ()=>{
        clock()
        
    },
    1000
)