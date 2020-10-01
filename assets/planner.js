const DATETIME_FORMAT = 'dddd, MMMM Do';
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
    17: '5PM',
}

window.onload = () => {
    $('#currentDay').text(NOW.format(DATETIME_FORMAT));
    renderTimeBlock(9);
    renderTimeBlock(10);
    renderTimeBlock(11);
    renderTimeBlock(12);
    renderTimeBlock(13);
    renderTimeBlock(14);
    renderTimeBlock(15);
    renderTimeBlock(16);
    renderTimeBlock(17);
}

function faIcon(icon) {
    return $('<i>').addClass(`fas fa-${icon}`);
}

function renderTimeBlock(hour, event) {
    let timeBlock = $('<div>')
        .addClass('row time-block')
        .css('margin-top', '5px')
        .append(
            $('<div>')
                .addClass('col-1 hour')
                .text(HOUR_TO_TIME[hour]),
            $('<textarea>')
                .attr('rows', 4)
                .addClass('col description')
                .addClass(relativeTimeOfDay(hour))
                .val(event),
            $('<button>')
                .addClass('col-1 saveBtn')
                .append(faIcon('save'))
        );

    $('.container').append(timeBlock);
}

function relativeTimeOfDay(hour) {
    switch (Math.sign(NOW.hour() - hour)) {
        // `hour` is earlier than `NOW`
        case 1:
            return 'past';

        // `hour` is the same time as `NOW`
        case 0:
            return 'present';
        
        // `hour` is later than `NOW`
        case -1:
            return 'future';
    }
}

$('.saveBtn').on('click', e => {
    // TODO: Save the contents of TA
})