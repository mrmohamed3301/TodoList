/*functionality of the Todo list in javascript*/

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

    //sort the list
    function sort_list(){
        for (let i = 0; i < todo_list.length; i++) {
            for (let j = i+1; j < todo_list.length; j++) {
                if(todo_list[i]['deadline']>todo_list[j]['deadline']){
                    var temp = todo_list[i];
                    todo_list[i] = todo_list[j];
                    todo_list[j] = temp;
                }
            }
        }
    }

    //draw the list
    function draw_list() {
        $('.alert-group').html('');
        var txt = '';
        for (let i = 0; i < todo_list.length; i++) {
            //if the dealline< 3 then show red alert
            if(todo_list[i]['deadline']<=3) txt += '<div class="alert alert-danger alert-dismissible">';
            //if the dealline>3 and <10 then show yellow alert  
            if(todo_list[i]['deadline']>3 && todo_list[i]['deadline']<=10) txt += '<div class="alert alert-warning alert-dismissible">';
            // else then show grey alert 
            if(todo_list[i]['deadline']>10) txt += '<div class="alert alert-secondary alert-dismissible">'; 
            
            txt += '<button type="button" class="close">×</button>';
            txt += '<p><strong>' + todo_list[i]['title'] + '</strong></p>';
            if(todo_list[i]['deadline']>1) txt += '<p>' + todo_list[i]['deadline'] + ' days.</p>';
            else txt += '<p>' + todo_list[i]['deadline'] + ' day.</p>';
            txt += '</div>';
        }
        $('.alert-group').append(txt);
    }

    //when you click the submit button
    $('#list_form').on('submit', function (e) {
        e.preventDefault();
        var deadline_date = $('#deadline').val();
        //get the remaing date to deadline from today
        var deadline = datediff(parseDate(today), parseDate(deadline_date));  
        
        var item = {
            title: $('#title').val(),
            deadline: deadline
        }
        todo_list.push(item);  //add new list into todo_list 
        sort_list(); //sort the list
        draw_list(); //draw the list
    });

    //when you click close button on each list
    $(document).on('click', '.close' , function (e){
        e.preventDefault();
        var close_items = $('.close');
        var index = close_items.index($(this));
        todo_list.splice(index, 1);   //clear the selected list
        draw_list();   // redraw the list again.
    });
})
