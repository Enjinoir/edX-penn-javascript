//script to test on functionality

$('li').on({
    mouseenter: function() {
        $(this).css('color', 'red');
        $(this).css('font-size', '120%');
    },
    mouseleave: function() {
        $(this).css('color', 'black');
        $(this).css('font-size', '100%');
    },
    click: function() {
        $(this).css('background-color', 'green');
    }
});