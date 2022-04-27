<<<<<<< HEAD
$(document).ready(function () {
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [60, 254, 32, 5243];
        let charCode = 65; //65 = A.
        for (let i = 0; i < 4; i++) {

            let container = document.getElementById("circle" + String.fromCharCode(charCode));

            let circle = new ProgressBar.Circle(container, {
                color: '#64DAF9',
                strokeWidth: 8,
                duration: duration[i],
                from: {
                    color: '#AAA'
                },
                to: {
                    color: '#64DAF9'
                },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    let value = Math.round(circle.value() * number[i]);
                    circle.setText(value);
                }

            });
            circle.animate(1.0);
            charCode++;
        }
    }

    // Iniciar progressbar pelo offset
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 700) && stop == 0) {
            animationData();
            stop++;
        }
    });
});

//Filtro do portfolio

$('.filter-btn').on('click', function () {
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if (type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
    } else if (type == 'dev-btn') {
        eachBoxes('dev', boxes);
    } else if (type == 'seo-btn') {
        eachBoxes('seo', boxes);
    } else {
        eachBoxes('all', boxes);
    }
});

function eachBoxes(type, boxes) {

    if (type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function () {
            if (!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        })
    }
=======
$(document).ready(function () {
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [60, 254, 32, 5243];
        let charCode = 65;
        for (let i = 0; i < 4; i++) {

            let container = document.getElementById("circle" + String.fromCharCode(charCode));

            let circle = new ProgressBar.Circle(container, {
                color: '#64DAF9',
                strokeWidth: 8,
                duration: duration[i],
                from: {
                    color: '#AAA'
                },
                to: {
                    color: '#64DAF9'
                },
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    let value = Math.round(circle.value() * number[i]);
                    circle.setText(value);
                }

            });
            circle.animate(1.0);
            charCode++;
        }
    }

    // Iniciar progressbar pelo offset
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll > (dataAreaOffset.top - 700) && stop == 0) {
            animationData();
            stop++;
        }
    });
});

//Filtro do portfolio

$('.filter-btn').on('click', function () {
    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if (type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
    } else if (type == 'dev-btn') {
        eachBoxes('dev', boxes);
    } else if (type == 'seo-btn') {
        eachBoxes('seo', boxes);
    } else {
        eachBoxes('all', boxes);
    }
});

function eachBoxes(type, boxes) {

    if (type == 'all') {
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function () {
            if (!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        })
    }
>>>>>>> fb0426cf40c0968ca97e1f8d46a81351cb42f955
}