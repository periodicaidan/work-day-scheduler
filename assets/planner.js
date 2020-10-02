const NOW = moment();
const HOUR_TO_TIME = {
    9: '9AM',
    10: '10AM',
    11: '11AM',
    12: '12PM',
    13: '1PM',
    14: '2PM',
    15: '3PM',
    16: '4PM',
    17: '5PM'
}

$(document).ready(function () {
    $('#currentDay').text(NOW.format('dddd, MMMM Do'));

    for (let hour in HOUR_TO_TIME) {
        renderTimeBlock(hour);
    }
});

function faIcon(icon) {
    return $('<i>').addClass(`fas fa-${icon}`);
}

function renderTimeBlock(hour) {
    let timeBlock = $('<div>')
        .addClass('row time-block')
        .attr('data-hour', hour)
        .css('margin-top', '5px')
        .append(
            $('<div>')
                .addClass('col-1 hour')
                .text(HOUR_TO_TIME[hour]),
            $('<textarea>')
                .attr('rows', 4)
                .addClass('col description')
                .addClass(relativeTimeOfDay(hour))
                .val(loadEvent(hour)),
            $('<button>')
                .addClass('col-1 saveBtn')
                .append(faIcon('save'))
                .on('click', function (e) {
                    let event = $(`[data-hour=${hour}]`).children('textarea').val();
                    saveEvent(hour, event);
                })
        );

    $('.container').append(timeBlock);
}

function relativeTimeOfDay(hour) {
    let timeDiff = NOW.hour() - hour;
    if (timeDiff > 0) {
        return 'past';
    } else if (timeDiff < 0) {
        return 'future';
    } else {
        return 'present';
    }
}

function saveEvent(hour, event) {
    localStorage.setItem(`evt-${hour}`, event);
}

function loadEvent(hour) {
    return localStorage.getItem(`evt-${hour}`) ?? '';
}