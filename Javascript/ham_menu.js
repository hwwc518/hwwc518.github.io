/*
$(document).ready(function(){
    $(".burger_nav").on("click",function(){
        $("header nav ul").toggleClass("open");
    })
})
*/

@charset "utf-8";
# welcome {
    position: relative;
    top: 40 %;
    width: 100 %;
    text - align: center;
    font: 2.5e m Catamaran, calibri, sans - serif, tahoma;
    color: #404040
}

# canvas,
.mountain,
.mountainTop {
    position: absolute
}

#canvas {
    width: 100 %;
    height: 100 %;
    bottom: 0;
    overflow: hidden;
    background - color: transparent
}

.mountain {
    width: 0;
    height: 0;
    bottom: -35 vw;
    border - left: 40 vw solid transparent;
    border - right: 40 vw solid transparent
}

.mountainTop {
    border - left: 8 vw solid transparent;
    border - right: 8 vw solid transparent;
    border - bottom: 15 vw solid# fff;
    left: -8 vw
}

.mountainTop: after,
.mountainTop: before {
    content: '';
    position: absolute;
    border - left: 4 vw solid transparent;
    border - right: 4 vw solid transparent;
    z - index: -1
}

.mountainTop: after {
    left: -6 vw;
    bottom: -20 vw;
    border - top: 8 vw solid# fff
}

.mountainTop: before {
    left: -2 vw;
    bottom: -24 vw;
    border - top: 12 vw solid# fff
}

.cloud {
    margin: 10 vh;
    height: 10 vh;
    width: 30 vh;
    position: relative;
    background: #fff;
    opacity: .8;
    - webkit - border - radius: 5 vh;
    - moz - border - radius: 5 vh;
    border - radius: 5 vh
}

.cloud: after,
.cloud: before {
    background: #fff;
    content: '';
    position: absolute;
    z - index: 0
}

.cloud: after {
    height: 10 vh;
    width: 10 vh;
    right: 3 vh;
    top: -50 %;
    - webkit - border - radius: 5 vh;
    - moz - border - radius: 5 vh;
    border - radius: 5 vh
}

.cloud: before {
    height: 16 vh;
    width: 16 vh;
    left: 4 vh;
    top: -90 %;
    - webkit - border - radius: 8 vh;
    - moz - border - radius: 8 vh;
    border - radius: 8 vh
}

# firstCloud {
    -webkit - animation: animateCloud 40 s linear;
    - moz - animation: animateCloud 40 s linear;
    animation: animateCloud 40 s linear;
    animation - fill - mode: forwards;
    - webkit - animation - fill - mode: forwards
}

# bigCloud {
    -webkit - animation: animateCloud 50 s linear infinite;
    - moz - animation: animateCloud 50 s linear infinite;
    animation: animateCloud 50 s linear infinite
}

# mediumCloud {
    -webkit - animation: animateCloud 42 s linear infinite;
    - moz - animation: animateCloud 42 s linear infinite;
    animation: animateCloud 42 s linear infinite
}

# smallCloud {
    -webkit - animation: animateCloud 35 s linear infinite;
    - moz - animation: animateCloud 35 s linear infinite;
    animation: animateCloud 35 s linear infinite
}

@ - webkit - keyframes animateCloud {
    0 % {
        margin - left: -10 %
    }
    100 % {
        margin - left: 110 %
    }
}

@ - moz - keyframes animateCloud {
    0 % {
        margin - left: -10 %
    }
    100 % {
        margin - left: 110 %
    }
}

@keyframes animateCloud {
    0 % {
        margin - left: -10 %
    }
    100 % {
        margin - left: 110 %
    }
}
