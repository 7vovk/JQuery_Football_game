var gkPosition = Math.floor(Math.random() * 4) + 1;

//top left corner click
$('#pos1').one('click', function(){
    $('#ball').animate({
        width: 50,
        height: 50,
        top: 257,
        left: 415
    }).animate({
        top: 470
    }, {duration: 1000, easing: 'easeOutBounce'})
    $('p').css({
        display: 'block'
    })
    $('#restart').css({
        cursor: 'pointer'
    })
    if (gkPosition == 1){
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(0deg)",
            top: 250,
            left: 410
        })
        setTimeout('alert("CATCH!")', 400);
    } else if (gkPosition == 2) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateY(180deg)",
            top: 250,
            left: 685
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 3) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateX(180deg)",
            top: 330,
            left: 415
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 4) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(180deg)",
            top: 330,
            left: 690
        })
        setTimeout('alert("GOAL!")', 400);
    }
})

//top right corner click
$('#pos2').one('click', function(){
    $('#ball').animate({
        width: 50,
        height: 50,
        top: 257,
        left: 897
    }).animate({
        top: 470
    }, {duration: 1000, easing: 'easeOutBounce'})
    $('p').css({
        display: 'block'
    })
    $('#restart').css({
        cursor: 'pointer'
    })
    if (gkPosition == 1){
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(0deg)",
            top: 250,
            left: 410
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 2) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateY(180deg)",
            top: 250,
            left: 685
        })
        setTimeout('alert("CATCH!")', 400);
    } else if (gkPosition == 3) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateX(180deg)",
            top: 330,
            left: 415
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 4) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(180deg)",
            top: 330,
            left: 690
        })
        setTimeout('alert("GOAL!")', 400);
    }
})

//bottom left corner click
$('#pos3').one('click', function(){
    $('#ball').animate({
        width: 50,
        height: 50,
        top: 447,
        left: 415
    }).animate({
        top: 470
    }, {duration: 700, easing: 'easeOutBounce'})
    $('p').css({
        display: 'block'
    })
    $('#restart').css({
        cursor: 'pointer'
    })
    if (gkPosition == 1){
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(0deg)",
            top: 250,
            left: 410
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 2) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateY(180deg)",
            top: 250,
            left: 685
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 3) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateX(180deg)",
            top: 330,
            left: 415
        })
        setTimeout('alert("CATCH!")', 400);
    } else if (gkPosition == 4) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(180deg)",
            top: 330,
            left: 690
        })
        setTimeout('alert("GOAL!")', 400);
    }
})

//bottom right corner click
$('#pos4').one('click', function(){
    $('#ball').animate({
        width: 50,
        height: 50,
        top: 447,
        left: 897
    }).animate({
        top: 470
    }, {duration: 700, easing: 'easeOutBounce'})
    $('p').css({
        display: 'block'
    })
    $('#restart').css({
        cursor: 'pointer'
    })
    if (gkPosition == 1){
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(0deg)",
            top: 250,
            left: 410
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 2) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateY(180deg)",
            top: 250,
            left: 685
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 3) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotateX(180deg)",
            top: 330,
            left: 415
        })
        setTimeout('alert("GOAL!")', 400);
    } else if (gkPosition == 4) {
        $('#gkeeper').css({
            backgroundImage: 'url(images/gkeeper-jump.png)',
            width: 261,
            height: 178,
            transform: "rotate(180deg)",
            top: 330,
            left: 690
        })
        setTimeout('alert("CATCH!")', 400);
    }
})

//restart
$('#restart').on('click', function(){
    location.reload();
})
