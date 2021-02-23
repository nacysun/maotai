$(function() {
    function rote() {
        if (window.orientation == 180 || window.orientation == 0) {
            console.log('竖屏');
            $('.box').addClass('shu');
        }
        if (window.orientation == 90 || window.orientation == -90) {
            console.log('横屏');
            $('.box').removeClass('shu');
            $('.content').show();
            loading();
        }
    }
    window.addEventListener('load', rote);
    window.addEventListener('orientationchange', function() {
        rote();
    });


    /* loading */
    var sW = document.body.clientWidth;
    var sH = document.body.clientHeight;

    function loading() {
        var x = 0;
        var timer = setInterval(function() {
            x++;
            if (x == 16) {
                $('.lad1-1').addClass('show');
            } else if (x == 36) {
                $('.lad1-2').addClass('show');
            } else if (x == 56) {
                $('.lad1-3').addClass('show');
            } else if (x == 76) {
                $('.lad1-4').addClass('show');
            } else if (x == 90) {
                $('.lad1-5').addClass('show');
            }
            if (x == 100) {
                clearInterval(timer);
                $('.load').fadeOut(300);
                $('.loading').fadeOut(300);
                $('.bottle').fadeIn(300, function() {
                    $(this).addClass('first');
                    setTimeout(function() {
                        $('.p1-1').fadeOut(300);
                        $('.shake-box').fadeIn(300);
                    }, 2800);
                });
            }
            if (x < 10) {
                $('.load-three').css('backgroundPositionX', -x * 20 / 750 * sW + 'px');
            } else if (x < 100) {
                var a = String(x)[1];
                var b = String(x)[0];
                $('.load-two').css({ 'display': 'block', 'backgroundPositionX': -b * 20 / 750 * sW + 'px' });
                $('.load-three').css('backgroundPositionX', -a * 20 / 750 * sW + 'px');
            } else if (x == 100) {
                $('.load-three').css('backgroundPositionX', '0px');
                $('.load-two').css('backgroundPositionX', '0px');
                $('.load-one').css({ 'display': 'block', 'backgroundPositionX': -20 / 750 * sW + 'px' });
            }
            $('.load-pre').css('width', 7.8 * x / 750 * sW + 'px');
        }, 80);
    }

    /* bottle 摇一摇 */
    $('.smell').click(move);

    function move() {
        $('.p1-2').addClass('p1-5');
        $('.p1-2').attr('src', 'img/p1_5.png');
        $('.bottle').removeClass('first').addClass('second');
        setTimeout(function() {
            $('.smell').addClass('third');
            $('.p1-2').attr('src', 'img/p1_6.png');
            $('.p1-2').addClass('p1-6 all-aniamte').removeClass('animte-box');
            setTimeout(function() {
                $('.p1-2').attr('src', 'img/p1_7.png');
                $('.p1-2').addClass('p1-7');
                setTimeout(function() {
                    $('.p1-2').attr('src', 'img/p1_8.png');
                    $('.p1-2').addClass('p1-8');
                    setTimeout(function() {
                        $('.bottle').fadeOut(300);
                        $('.make').fadeIn(300);
                    }, 6000);
                }, 200);
            }, 200);
        }, 2000);
        $(this).css('pointer-events', 'none');
    }

    /* make */
    $('.make-btn').on('click', function() {
        $('.make').fadeOut(300);
        $('.stepOne').fadeIn(300);
    });

    /* stepOne */
    function stepOne() {
        $('.move-btn').stop().on('click', function() {
            $('.move').fadeOut(300);
            $('.stepOne .hint').fadeIn(300);
            $('.p3-7').fadeOut(300);
            $('.p3-8').fadeOut(300);
        });
        var jindu = 256 / 5; //记录进度条
        var sum = 0; //记录次数
        $('.move-btn').on('click', function(e) {
            sum++;
            e.preventDefault();
            $('.measure-inner').css('height', jindu * sum / 750 * sW + 'px');
            if (sum * 20 < 10) {
                $('.plan-three').css('backgroundPositionX', -sum * 20 * 20 / 750 * sW + 'px');
            } else if (sum * 20 < 100) {
                var a = String(sum * 20)[1];
                var b = String(sum * 20)[0];
                $('.plan-two').css({ 'display': 'block', 'backgroundPositionX': -b * 20 / 750 * sW + 'px' });
                $('.plan-three').css('backgroundPositionX', -a * 20 / 750 * sW + 'px');
            } else if (sum * 20 == 100) {
                $('.plan-three').css('backgroundPositionX', '0px');
                $('.plan-two').css('backgroundPositionX', '0px');
                $('.plan-one').css({ 'display': 'block', 'backgroundPositionX': -20 / 750 * sW + 'px' });
            }
            $('.p3-12').css('opacity', 0.2 * sum);
            $('.p3-3').addClass('cai-left');
            $('.p3-3-1').addClass('cai-right');
            setTimeout(function() {
                $('.p3-3').removeClass('cai-left');
                $('.p3-3-1').removeClass('cai-right');
            }, 500);
            if (sum === 5) {
                $('.measure-inner').css('height', '256px');
                $('.stepOne .next-btn').addClass('next');
                $('.stepOne .hint').fadeOut(300);
                $('.move-btn').css('pointer-events', 'none');
            }
            $('.stepOne .next').on('click', function(e) {
                $('.stepOne').fadeOut(300);
                $('.stepTwo').fadeIn(300);
            });
        });
    }
    stepOne();


    /* stepTwo */
    function stepTwo() {
        $('.move-c').on('click', function() {
            $('.move-c').fadeOut(300);
            $('.p4-4').fadeIn(300);
            $('.two-first').fadeOut(300);
            $('.two-second ').fadeIn(300);
            $('.p4-5-1').fadeIn(300);
            $('.p4-5').fadeOut(300);
        });
        $('.move-con').on('click', function() {
            $('.move-con').addClass('move-bj');
            $('.move-con').addClass('dao');
            setTimeout(function() {
                $('.p4-17').fadeIn(300);
            }, 2000)
            setTimeout(function() {
                $('.p4-14').css('top', 0);
                $('.s-t-box').addClass('fog');
                $('.two-second').fadeOut(300);
                $('.p4-5').fadeIn(300);
                $('.p4-5-1').fadeOut(300);
                $('.stepTwo .next-btn').addClass('next');
                $('.stepTwo .next').on('click', function() {
                    $('.stepTwo').fadeOut(300);
                    $('.stepThree').fadeIn(300);
                });
            }, 2000);
        });
    }
    stepTwo();

    /* stepThree */
    var falg = 0;
    $('.s-h-move').on('click', function() {
        if (!falg) {
            $('.three-first').fadeOut(300);
            $('.three-second').fadeIn(300);
        } else {
            $('.s-h-move').addClass('s-h-move1')
            $('.stepThree .next-btn').addClass('next');
            $('.stepThree .next').on('click', function() {
                $('.stepFour').fadeIn(300);
                $('.stepThree').fadeOut(300);
            });
        }
        falg++;
    });

    /* stepFour */
    var random = Math.floor(Math.random() * 5 + 4);

    function stepFour() {
        $('.lid').on('click', function() {
            $('.stepFour .title').fadeOut(300);
            $('.stepFour .hint').fadeOut(300);
            $('.stepFour .next-btn').fadeOut(300);
            $('.stepFour').addClass('taste');
            $('.stepFour .p5-bg').fadeIn(3000);
            $('.p7-4').attr('src', 'img/p7_' + random + '.png');
            setTimeout(function() {
                $('.taste').fadeIn();
                $('.stepFour').fadeOut();
            }, 5500);
        })
    }
    $('.lid').click(stepFour);

    /* taste */
    $('.left-btn').on('click', function() {
        location.reload();
    });

    $('.right-btn').on('click', function() {
        $('.taste').fadeOut(300);
        $('.video').fadeIn(300);
    });
});