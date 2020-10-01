const DATETIME_FORMAT = 'dddd, MMMM Do';

const now = moment();
console.log(now);

window.onload = () => {
    $('#currentDay').text(now.format(DATETIME_FORMAT));
    renderTimeBlock('9AM', 'Do stuff');
}

function faIcon(icon) {
    return $('<i>').addClass(`fas fa-${icon}`);
}

function renderTimeBlock(time, event) {
    let timeBlock = $('<div>')
        .addClass('row time-block')
        .append(
            $('<div>')
                .addClass('col-1 hour')
                .text(time),
            $('<textarea>')
                .attr('rows', 4)
                .addClass('col description')
                // TODO: Set dynamically
                .addClass('present')
                .val(event),
            $('<button>')
                .addClass('col-1 saveBtn')
                .append(faIcon('save'))
        );

    $('.container').append(timeBlock);
}

$('.saveBtn').on('click', e => {
    // TODO: Save the contents of TA
})