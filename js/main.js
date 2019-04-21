$(document).ready(function () {

    var today = new Date();
    var min_date = new Date();
    var dd = String(today.getDate()).padStart(2, '0');  //get today
    var tomorrow = String(today.getDate()+1).padStart(2, '0'); //get tomorrow
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0! get this month
    var yyyy = today.getFullYear(); //get this year
    today = yyyy + '-' + mm + '-' + dd;
    min_date = yyyy + '-' + mm + '-' + tomorrow;
    $('#deadline').attr('min',min_date); //set the max date on the datepicker tag
    var todo_list = [];  // list will be stored in this variable

})
