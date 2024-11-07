function validate(){
    var name = document.getElementById("name").value;
    var name_regex = "/^[A-Za-z]+$/";

    var age = document.getElementById("age").value;
    var age_regex = "^[0-9]+$";

    var city = document.getElementById("city").value;

    if(!(name.match(name_regex)) || !(age.match(age_regex)) || (city=="")){
        if(!(name.match(name_regex))){
            document.getElementById("name_error").style.visibility = "visible";
        }
        if(!(age.match(age_regex))){
            document.getElementById("age_error").style.visibility = "visible";
        }
        if(city=""){
            document.getElementById("city_error").style.visibility = "visible";
        }
        return false;
    }
    else{
        return true;
    }
}