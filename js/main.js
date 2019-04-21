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

    function parseDate(str) {
        var mdy = str.split('-');
        return new Date(mdy[0], mdy[1]-1, mdy[2]);
    }
    //get left dates from the first date to second date
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    }    

})
