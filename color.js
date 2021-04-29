function changeColor() //The following function lets the user now the complementary color to their input.
{
  var userColor=document.getElementById('textInput').value;

  if (userColor=="Red")
  {alert("Your complementary color is GREEN");}

  else if (userColor=="red")
  {alert("Your complementary color is GREEN");}

  else if (userColor=="Orange")
  {alert("Your complementary color is BLUE");}

  else if (userColor=="orange")
  {alert("Your complementary color is BLUE");}

  else if (userColor=="Yellow")
  {alert("Your complementary color is PURPLE");}

  else if (userColor=="yellow")
  {alert("Your complementary color is PURPLE");}

  else if (userColor=="Green")
  {alert("Your complementary color is RED");}

  else if (userColor=="green")
  {alert("Your complementary color is RED");}


  else if (userColor=="Blue")
  {alert("Your complementary color is ORANGE");}

  else if (userColor=="blue")
  {alert("Your complementary color is ORANGE");}


  else if (userColor=="Purple")
  {alert("Your complementary color is YELLOW");}

  else if (userColor=="purple")
  {alert("Your complementary color is YELLOW");}

  else { confirm("Please enter one of the six basic colors!")}
}
  //I included input with both lower and upercase first letter. This way the alert will work whether or not the user's input is capitalized.

function chooseTemp(){
  var userTemp=document.getElementById('tempInput').value;

  if (userTemp=="cool") {
    confirm("That's correct! Well done!");}

  else if (userTemp=="warm") {
    confirm("Your answer is incorrect. Try again!");}

  else if (userTemp=="Warm") {
    confirm("Your answer is incorrect. Try again!");}

  else if (userTemp=="Cool") {
    confirm("That's correct! Well done!");}

  else  {
    confirm("Try again! Make sure to enter one of the valid color temperatures (cool or warm).");}

}
