document.getElementById('input').addEventListener('submit', function(event){
    event.preventDefault();
    const num = document.getElementById('num').value;
    const power = num*num;
    document.getElementById('result').textContent= power;
    console.log(power);
})