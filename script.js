let name = prompt('Adınızı Giriniz.')
document.getElementById('userName').innerHTML = name

function getTime(){
    let time = new Date().toLocaleDateString('tr-tr', 
        {weekday:'long',hour:'numeric',minute:'numeric',second:'numeric'})
    document.getElementById('date').innerText = time
    setTimeout(getTime, 1000)
}

getTime();
