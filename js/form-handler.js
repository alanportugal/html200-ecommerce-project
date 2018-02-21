function capture(){
  event.preventDefault()
  console.log("Email submitted") 
  var theEmail = document.custInfo.email.value
  console.log("Thanks for signing up for our mailing list" + ", " + theEmail)
}