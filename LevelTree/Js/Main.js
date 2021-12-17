"use Strict"
document.getElementById('tooltipLv1').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv1');
    zoomElement.style.zoom='92%';
})
/*document.getElementById('tooltipLv2').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv2');
    zoomElement.style.zoom='92%';
})*/
document.getElementById('tooltipLv3').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv3');
    zoomElement.style.zoom='95%';
})
document.getElementById('tooltipLv4').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv4');
    zoomElement.style.zoom='95%';
})
document.getElementById('tooltipLv5').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv5');
    zoomElement.style.zoom='95%';
})
document.getElementById('tooltipLv6').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv6');
    zoomElement.style.zoom='95%';
})
document.getElementById('tooltipLv7').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv7');
    zoomElement.style.zoom='95%';
})
document.getElementById('tooltipLv8').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv8');
    zoomElement.style.zoom='95%';
})
document.getElementById('tooltipLv9').addEventListener("click", function () {
    let zoomElement = document.getElementById('tooltipLv9');
    zoomElement.style.zoom='95%';
})

function terugNaarStart() {
    document.getElementById('tree').click();
}
document.getElementById('video1').addEventListener('click', function (){
    let vid= document.getElementById('video1');
    vid.dispatchEvent(new KeyboardEvent('keydown',{'key':'f'}));
    alert("test");
});

document.querySelector('[aria-label^="Afspelen"]').addEventListener('click', ()=> {
    alert('test ja');
    let ele = document.querySelector('.ytp-fullscreen-button');
    ele.onclick =true;


});


//ytp-fullscreen-button
