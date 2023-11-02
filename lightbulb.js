function lgton()
{
    document.getElementById('image').src='onlight.png';
    document.body.style.background="yellow";
    document.getElementById('welmsg').style.color='';
    document.getElementById('welmsg').innerHTML='Light is ON';
    document.body.style.transition='all 2s';
    document.getElementById('btn2').style.visibility='visible';
    document.getElementById('btn1').style.visibility='hidden';
}
function lgtoff()
{
    document.getElementById('image').src='offlight.png';
    document.body.style.background="black";
    document.getElementById('welmsg').style.color='black';
    document.getElementById('welmsg').innerHTML='Light is OFF';
    document.getElementById('btn1').style.visibility='visible';
    document.getElementById('btn2').style.visibility='hidden';
}