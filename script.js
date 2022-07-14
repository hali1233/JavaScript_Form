function onSubmit() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let dob = document.forms["myForm"]["dob"].value;
    let interest = document.forms["myForm"]["interest"].value;
    let about_you = document.forms["myForm"]["about-you"].value;
  
    try {
      if (name == "") throw "Name must be filled out";
      if (email == "") throw "Email must be filled out";
      if (dob == "") throw "DOB must be filled out";
      if (interest == "") throw "Interest must be filled out";
      if (about_you == "") throw "About you must be filled out";
    } catch (err) {
      alert(err);
    }
  
    let url = window.location.href;
    url = url + "?name=" + name;
    url = url + "?email=" + email;
    url = url + "?dob=" + dob;
    url = url + "?interest=" + interest;
    url = url + "?interest=" + interest;
    url = url + "?interest=" + interest;
    url = url + "?about-you=" + about_you;
    // let params = new URL(url).searchParams;
    //   console.log(params.get("name"));
    //   console.log(url);
    window.open(url);
  }