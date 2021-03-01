function search() {
  var nameValue = document.getElementById("uniqueID").value.replace("https://www.youtube.com/watch?v=", "https://youtube.com/embed/");
  var remove_after= nameValue.indexOf('&');
  var result = nameValue.substring(0, remove_after);
  document.getElementById("url").src = nameValue
}
