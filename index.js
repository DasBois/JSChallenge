// controls for the left button
document.getElementById('left').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;
 
    var newPosition = parseInt(position) - 5;
 
    document.getElementById('ball').style.left = newPosition + 'px';
 });
 
 // controls for the right button
 document.getElementById('right').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.left;
 
    var newPosition = parseInt(position) + 5;
 
    document.getElementById('ball').style.left = newPosition + 'px';
 });
 
 // controls for the up button
 document.getElementById('up').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.top;
 
    var newPosition = parseInt(position) - 5;
 
    document.getElementById('ball').style.top = newPosition + 'px';
 
 })
 
 // controls for the down button
 document.getElementById('down').addEventListener('click', function() {
 
    var position = document.getElementById('ball').style.top;
 
    var newPosition = parseInt(position) + 5;
 
    document.getElementById('ball').style.top = newPosition + 'px';
 
 })
 