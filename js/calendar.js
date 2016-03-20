
$(document).ready(function() {
    $('#calendar').fullCalendar({
		header: {
            left: 'next,prev today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
		lang: 'he',
		isRTL: true,
        editable: false,
		eventLimit: true,
        fixedWeekCount: false,
        //timezone: false,
        events:	getEventsFromStorage()
    });
    $("body").keydown(function(e) {
        if (e.keyCode == 37) {
            $('#calendar').fullCalendar('prev');
        } else if (e.keyCode == 39) {
            $('#calendar').fullCalendar('next');
        }
    });
});



function getEventsFromStorage()
{
	var arr = [];
	if(localStorage.getItem("list") == undefined)
        return;
                
    var list = JSON.parse(localStorage.getItem("list"));
    $.each(list, function(i, item) {
		var titleOfItem = item.CourseName + ', תרגיל מספר ' + item.MissionId;
		var task = {title : titleOfItem, start: item.FinalDate};
		arr.push(task);
	});	
	
	return arr;
}