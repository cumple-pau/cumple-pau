/* =========================================================
   SPECIAL EFFECTS
   Objetos protagonistas de cada temática
   Archivo independiente: no modifica script.js ni style.css
   ========================================================= */

(function () {
    "use strict";

    function initSpecialEffects() {

        /* =====================================================
           CSS PROPIO
           ===================================================== */

        const style = document.createElement("style");

        style.textContent = `

        #special-effects-layer {
            position: fixed;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 100;
        }

        .se-effect {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
        }


        /* =====================================================
           NARNIA — ARMARIO
           ===================================================== */

        .se-narnia {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 5vh;
            animation: seNarniaFade 3.2s ease forwards;
        }

        .se-narnia::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 4vh;
            width: 260px;
            height: 260px;
            transform: translateX(-50%) scale(.35);
            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(220,245,255,.55),
                    rgba(120,200,255,.16) 42%,
                    transparent 72%
                );

            filter: blur(10px);
            opacity: 0;

            animation:
                seNarniaAura
                3s
                ease
                .15s
                forwards;
        }

        .se-wardrobe-area {
            position: relative;

            width: 178px;
            height: 238px;

            perspective: 1100px;

            transform:
                translateY(0)
                scale(.96);

            animation:
                seWardrobeEntrance
                .9s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-wardrobe-light {
            position: absolute;

            width: 115px;
            height: 180px;

            left: 27px;
            top: 18px;

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,255,255,.98) 0%,
                    rgba(211,239,255,.85) 25%,
                    rgba(137,204,255,.45) 50%,
                    transparent 75%
                );

            filter: blur(6px);
            opacity: 0;

            animation:
                seNarniaLight
                2.7s
                cubic-bezier(.2,.8,.2,1)
                .35s
                forwards;
        }

        .se-wardrobe {
            position: absolute;

            width: 150px;
            height: 205px;

            left: 10px;
            top: 10px;

            border-radius:
                9px 9px 4px 4px;

            background:
                linear-gradient(
                    90deg,
                    #3a2114 0%,
                    #70462a 10%,
                    #52301d 45%,
                    #70462a 90%,
                    #351d12 100%
                );

            box-shadow:
                0 16px 35px rgba(0,0,0,.45),
                inset 0 0 0 5px rgba(25,12,6,.5);
        }

        .se-wardrobe-inside {
            position: absolute;
            inset: 9px;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 4px;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,255,255,.98),
                    rgba(166,220,255,.55) 42%,
                    rgba(36,72,92,.9) 100%
                );

            box-shadow:
                inset 0 0 38px rgba(255,255,255,.65);

            font-size: 30px;
        }

        .se-door {
            position: absolute;

            top: 5px;

            width: 72px;
            height: 195px;

            border-radius: 5px;

            background:
                linear-gradient(
                    90deg,
                    #321b10,
                    #71472a 17%,
                    #4b2b1a 50%,
                    #70452a 83%,
                    #2e190e
                );

            border: 3px solid #25130a;

            box-shadow:
                inset 0 0 0 3px rgba(255,255,255,.05);

            transform-style: preserve-3d;
            backface-visibility: hidden;
        }

        .se-door::before {
            content: "";

            position: absolute;
            inset: 13px;

            border:
                2px solid rgba(20,10,5,.5);

            border-radius: 3px;
        }

        .se-door::after {
            content: "";

            position: absolute;

            width: 7px;
            height: 7px;

            top: 50%;

            border-radius: 50%;

            background: #d7ad52;

            box-shadow:
                0 0 8px rgba(255,215,110,.85);
        }

        .se-door-left {
            left: 2px;

            transform-origin: left center;

            z-index: 3;

            animation:
                seDoorLeft
                1.35s
                cubic-bezier(.15,.85,.15,1)
                .45s
                forwards;
        }

        .se-door-left::after {
            right: 8px;
        }

        .se-door-right {
            right: 2px;

            transform-origin: right center;

            z-index: 3;

            animation:
                seDoorRight
                1.35s
                cubic-bezier(.15,.85,.15,1)
                .45s
                forwards;
        }

        .se-door-right::after {
            left: 8px;
        }

        .se-snow {
            position: absolute;

            width: 6px;
            height: 6px;

            border-radius: 50%;

            background: white;

            opacity: 0;

            animation:
                seSnow
                1.8s
                ease-in-out
                infinite;
        }

        .se-snow:nth-child(1) {
            left: 8%;
            animation-delay: .1s;
        }

        .se-snow:nth-child(2) {
            left: 22%;
            animation-delay: .6s;
        }

        .se-snow:nth-child(3) {
            left: 38%;
            animation-delay: .25s;
        }

        .se-snow:nth-child(4) {
            left: 56%;
            animation-delay: .9s;
        }

        .se-snow:nth-child(5) {
            left: 74%;
            animation-delay: .45s;
        }

        .se-snow:nth-child(6) {
            left: 90%;
            animation-delay: 1s;
        }


        /* =====================================================
           NARNIA — FAROLA
           ===================================================== */

        .se-narnia-lamp {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            padding-top: 6vh;

            animation:
                seLampFade
                3s
                ease
                forwards;
        }

        .se-lamp-scene {
            position: relative;

            width: 150px;
            height: 275px;

            transform:
                translateY(25px)
                scale(.75);

            opacity: 0;

            animation:
                seLampEntrance
                1.15s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards;
        }

        .se-lamp-glow {
            position: absolute;

            left: 20px;
            top: 10px;

            width: 110px;
            height: 145px;

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,245,190,.95) 0%,
                    rgba(255,224,125,.55) 25%,
                    rgba(180,210,255,.2) 55%,
                    transparent 75%
                );

            filter: blur(9px);

            opacity: 0;

            animation:
                seLampGlow
                2.4s
                ease-in-out
                .55s
                forwards;
        }

        .se-lamp-post {
            position: absolute;

            left: 68px;
            top: 75px;

            width: 14px;
            height: 165px;

            border-radius: 5px;

            background:
                linear-gradient(
                    90deg,
                    #1b2020,
                    #555b58 25%,
                    #292e2d 55%,
                    #101414
                );

            box-shadow:
                4px 8px 12px rgba(0,0,0,.35);
        }

        .se-lamp-base {
            position: absolute;

            left: 47px;
            bottom: 22px;

            width: 56px;
            height: 14px;

            border-radius: 50%;

            background:
                linear-gradient(
                    90deg,
                    #151918,
                    #555b58,
                    #151918
                );

            box-shadow:
                0 6px 12px rgba(0,0,0,.4);
        }

        .se-lamp-top {
            position: absolute;

            left: 48px;
            top: 48px;

            width: 54px;
            height: 42px;

            border-radius:
                9px 9px 5px 5px;

            background:
                linear-gradient(
                    90deg,
                    #202524,
                    #626764 25%,
                    #292e2c 60%,
                    #141817
                );

            border:
                2px solid #171b1a;

            box-shadow:
                0 7px 12px rgba(0,0,0,.35);
        }

        .se-lamp-glass {
            position: absolute;

            left: 8px;
            top: 8px;

            width: 34px;
            height: 25px;

            border-radius: 5px;

            background:
                radial-gradient(
                    circle,
                    rgba(255,255,225,1),
                    rgba(255,218,110,.8) 45%,
                    rgba(255,177,60,.25) 75%,
                    transparent
                );

            box-shadow:
                0 0 15px rgba(255,220,125,.95),
                inset 0 0 8px rgba(255,255,255,.8);

            animation:
                seLampFlicker
                1.25s
                ease-in-out
                infinite
                alternate;
        }

        .se-lamp-cap {
            position: absolute;

            left: 57px;
            top: 36px;

            width: 36px;
            height: 13px;

            border-radius:
                50% 50% 4px 4px;

            background:
                linear-gradient(
                    90deg,
                    #161a19,
                    #606663,
                    #171b1a
                );
        }

        .se-lamp-snow {
            position: absolute;

            width: 5px;
            height: 5px;

            border-radius: 50%;

            background: white;

            opacity: 0;

            animation:
                seLampSnow
                2.3s
                linear
                infinite;
        }

        .se-lamp-snow:nth-child(6) {
            left: 12%;
            animation-delay: .1s;
        }

        .se-lamp-snow:nth-child(7) {
            left: 27%;
            animation-delay: .8s;
        }

        .se-lamp-snow:nth-child(8) {
            left: 43%;
            animation-delay: .35s;
        }

        .se-lamp-snow:nth-child(9) {
            left: 62%;
            animation-delay: 1.1s;
        }

        .se-lamp-snow:nth-child(10) {
            left: 78%;
            animation-delay: .5s;
        }

        .se-lamp-snow:nth-child(11) {
            left: 91%;
            animation-delay: 1.4s;
        }


        /* =====================================================
           NARNIA — ASLAN
           ===================================================== */

        .se-narnia-aslan {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            padding-top: 10vh;

            animation:
                seAslanFade
                3.4s
                ease
                forwards;
        }

        .se-aslan-scene {
            position: relative;

            width: 230px;
            height: 230px;

            display: flex;
            justify-content: center;
            align-items: center;

            opacity: 0;

            transform:
                translateY(35px)
                scale(.65);

            animation:
                seAslanEntrance
                1.35s
                cubic-bezier(.16,.8,.2,1)
                .1s
                forwards;
        }

        .se-aslan-aura {
            position: absolute;

            width: 210px;
            height: 210px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,240,165,.75) 0%,
                    rgba(255,211,91,.35) 30%,
                    rgba(255,184,65,.12) 52%,
                    transparent 73%
                );

            filter: blur(8px);

            opacity: 0;

            animation:
                seAslanAura
                2.8s
                ease-in-out
                .35s
                forwards;
        }

        .se-aslan {
            position: relative;

            z-index: 3;

            font-size: 125px;

            filter:
                drop-shadow(0 0 7px rgba(255,225,130,.9))
                drop-shadow(0 13px 15px rgba(0,0,0,.35));

            animation:
                seAslanRise
                1.3s
                cubic-bezier(.2,.8,.2,1)
                .25s
                both;
        }

        .se-aslan-light {
            position: absolute;

            width: 180px;
            height: 180px;

            border-radius: 50%;

            border:
                2px solid rgba(255,235,160,.45);

            opacity: 0;

            transform: scale(.35);

            animation:
                seAslanRing
                2.2s
                ease-out
                .7s
                forwards;
        }

        .se-aslan-star {
            position: absolute;

            z-index: 4;

            font-size: 19px;

            color: #fff3bd;

            text-shadow:
                0 0 8px rgba(255,220,100,.95);

            opacity: 0;

            animation:
                seAslanSpark
                2s
                ease-in-out
                infinite;
        }

        .se-aslan-star:nth-child(5) {
            left: 18px;
            top: 45px;
            animation-delay: .2s;
        }

        .se-aslan-star:nth-child(6) {
            right: 20px;
            top: 65px;
            animation-delay: .7s;
        }

        .se-aslan-star:nth-child(7) {
            left: 40px;
            bottom: 28px;
            animation-delay: 1.1s;
        }

        .se-aslan-star:nth-child(8) {
            right: 38px;
            bottom: 38px;
            animation-delay: 1.5s;
        }


        /* =====================================================
           OUTER BANKS — MAPA + BRÚJULA
           ===================================================== */

        .se-obx {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            padding-top: 9vh;

            animation:
                seMapFade
                2.7s
                ease
                forwards;
        }

        .se-map-wrapper {
            position: relative;

            width: 195px;
            height: 150px;

            transform: rotate(-2deg);
        }

        .se-map {
            position: absolute;

            left: 10px;
            top: 18px;

            width: 175px;
            height: 118px;

            border-radius: 5px;

            background:
                linear-gradient(
                    135deg,
                    rgba(235,222,180,.97),
                    rgba(192,179,135,.97)
                );

            border:
                2px solid rgba(85,60,30,.65);

            box-shadow:
                0 12px 25px rgba(0,0,0,.3);

            transform-origin: top center;

            animation:
                seMapOpen
                1s
                cubic-bezier(.2,.8,.2,1)
                forwards;

            overflow: hidden;
        }

        .se-map::before {
            content: "";

            position: absolute;

            width: 125px;
            height: 55px;

            left: 25px;
            top: 27px;

            border-top:
                3px dashed rgba(100,70,35,.7);

            border-radius: 50%;

            transform: rotate(-10deg);
        }

        .se-map::after {
            content: "✦";

            position: absolute;

            left: 116px;
            top: 47px;

            font-size: 24px;

            color: rgba(83,53,26,.8);
        }

        .se-map-title {
            position: absolute;

            left: 13px;
            top: 8px;

            font-family: Georgia, serif;

            font-size: 11px;

            letter-spacing: 2px;

            color: rgba(60,42,25,.8);
        }

        .se-map-pin {
            position: absolute;

            left: 43px;
            bottom: 13px;

            font-size: 23px;

            animation:
                sePinPulse
                1.2s
                ease-in-out
                infinite;
        }

        .se-compass {
            position: absolute;

            right: -8px;
            top: -8px;

            width: 70px;
            height: 70px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    #ead28b 0%,
                    #b28b43 62%,
                    #604820 100%
                );

            border:
                3px solid #4d3519;

            box-shadow:
                0 7px 16px rgba(0,0,0,.4),
                0 0 15px rgba(255,216,104,.45);

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 38px;

            z-index: 4;

            animation:
                seCompassAppear
                .6s
                ease
                .5s
                both,
                seCompassSpin
                2s
                ease-in-out
                .8s;
        }

        .se-obx-stars {
            position: absolute;
            inset: 0;
        }

        .se-obx-stars span {
            position: absolute;

            font-size: 14px;

            opacity: 0;

            animation:
                seObxSpark
                1.7s
                ease-in-out
                infinite;
        }

        .se-obx-stars span:nth-child(1) {
            left: 2%;
            top: 15%;
        }

        .se-obx-stars span:nth-child(2) {
            right: 8%;
            bottom: 20%;
            animation-delay: .5s;
        }

        .se-obx-stars span:nth-child(3) {
            left: 20%;
            bottom: 3%;
            animation-delay: .9s;
        }


        /* =====================================================
           OUTER BANKS — ATARDECER + BARCO
           ===================================================== */

        .se-obx-sunset {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            padding-top: 8vh;

            animation:
                seSunsetFade
                3.3s
                ease
                forwards;
        }

        .se-sunset-scene {
            position: relative;

            width: 300px;
            height: 220px;

            overflow: hidden;

            border-radius: 50%;

            transform:
                translateY(25px)
                scale(.72);

            opacity: 0;

            animation:
                seSunsetEntrance
                1.2s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards;
        }

        .se-sunset-sky {
            position: absolute;

            inset: 0;

            border-radius: 50%;

            background:
                linear-gradient(
                    180deg,
                    #172a4d 0%,
                    #4e6587 38%,
                    #d18a65 68%,
                    #f2bd70 100%
                );
        }

        .se-sunset-sun {
            position: absolute;

            left: 50%;
            top: 48px;

            width: 62px;
            height: 62px;

            margin-left: -31px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    #fff6bd 0%,
                    #ffd879 45%,
                    #e99b5b 75%,
                    transparent 76%
                );

            box-shadow:
                0 0 25px rgba(255,210,120,.75);

            animation:
                seSunsetSun
                2.3s
                ease-in-out
                .35s
                forwards;
        }

        .se-sunset-sea {
            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;

            height: 78px;

            background:
                linear-gradient(
                    180deg,
                    rgba(31,63,83,.9),
                    rgba(12,35,52,.98)
                );
        }

        .se-sunset-sea::before {
            content: "";

            position: absolute;

            left: 45px;
            top: 18px;

            width: 210px;
            height: 2px;

            background:
                rgba(255,220,150,.65);

            box-shadow:
                0 10px 0 rgba(255,220,150,.35),
                0 20px 0 rgba(255,220,150,.2);
        }

        .se-sunset-boat {
            position: absolute;

            left: 50%;

            bottom: 50px;

            width: 105px;
            height: 48px;

            margin-left: -52px;

            animation:
                seBoatFloat
                2.1s
                ease-in-out
                .6s
                infinite;
        }

        .se-boat-hull {
            position: absolute;

            left: 0;
            bottom: 2px;

            width: 105px;
            height: 25px;

            background:
                linear-gradient(
                    180deg,
                    #3a2b24,
                    #171516
                );

            clip-path:
                polygon(
                    0 0,
                    100% 0,
                    82% 100%,
                    18% 100%
                );
        }

        .se-boat-sail {
            position: absolute;

            left: 48px;
            top: 0;

            width: 3px;
            height: 40px;

            background:
                #292727;

            transform-origin: bottom center;
        }

        .se-boat-sail::before {
            content: "";

            position: absolute;

            left: 3px;
            top: 3px;

            width: 36px;
            height: 30px;

            background:
                linear-gradient(
                    135deg,
                    rgba(255,245,215,.95),
                    rgba(224,205,170,.8)
                );

            clip-path:
                polygon(
                    0 0,
                    100% 100%,
                    0 100%
                );
        }

        .se-sunset-bird {
            position: absolute;

            font-size: 16px;

            color: rgba(20,25,32,.8);

            opacity: 0;

            animation:
                seBirdFlight
                2.5s
                ease-in-out
                infinite;
        }

        .se-sunset-bird:nth-child(4) {
            left: 18%;
            top: 30%;
            animation-delay: .3s;
        }

        .se-sunset-bird:nth-child(5) {
            left: 68%;
            top: 23%;
            animation-delay: 1s;
        }

        .se-sunset-bird:nth-child(6) {
            left: 82%;
            top: 39%;
            animation-delay: 1.6s;
        }

        .se-sunset-spark {
            position: absolute;

            width: 4px;
            height: 4px;

            border-radius: 50%;

            background: rgba(255,235,170,.9);

            opacity: 0;

            animation:
                seSunsetSpark
                1.8s
                ease-in-out
                infinite;
        }

        .se-sunset-spark:nth-child(7) {
            left: 25%;
            bottom: 24%;
        }

        .se-sunset-spark:nth-child(8) {
            left: 72%;
            bottom: 17%;
            animation-delay: .6s;
        }

        .se-sunset-spark:nth-child(9) {
            left: 55%;
            bottom: 29%;
            animation-delay: 1.1s;
        }


        /* =====================================================
           OBJETOS FINALES
           ===================================================== */

        .se-final-safe-object,
        .se-infinity-object {
            pointer-events: none !important;
            z-index: 2 !important;
        }

        .se-final-compass {
            position: absolute !important;

            left: 12px !important;
            right: auto !important;
            top: 12px !important;
            bottom: auto !important;

            transform:
                scale(.72)
                rotate(-8deg) !important;
        }

        .se-final-map {
            position: absolute !important;

            right: 10px !important;
            left: auto !important;
            top: 10px !important;
            bottom: auto !important;

            transform:
                scale(.62)
                rotate(5deg) !important;

            transform-origin:
                top right !important;
        }

        .se-final-wand {
            position: absolute !important;

            right: 12px !important;
            left: auto !important;
            bottom: 70px !important;
            top: auto !important;

            transform:
                scale(.72)
                rotate(-18deg) !important;

            transform-origin:
                bottom right !important;
        }

        .se-infinity-object {
            position: absolute !important;

            max-width: 105px !important;
            max-height: 105px !important;
        }

        .se-infinity-object:nth-of-type(1) {
            left: 10px !important;
            top: 12px !important;
        }

        .se-infinity-object:nth-of-type(2) {
            right: 10px !important;
            top: 12px !important;
        }

        .se-infinity-object:nth-of-type(3) {
            right: 14px !important;
            bottom: 72px !important;
        }


        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 600px) {

            .se-wardrobe-area {
                transform: scale(.82);
            }

            .se-lamp-scene {
                transform: scale(.82);
            }

            .se-aslan-scene {
                transform: scale(.78);
            }

            .se-rose-container {
                transform: scale(.82);
            }

            .se-letter-scene {
                transform: scale(.82);
            }

            .se-crown-container {
                transform: scale(.82);
            }

            .se-map-wrapper {
                transform:
                    scale(.82)
                    rotate(-2deg);
            }

            .se-hp-flight {
                transform:
                    scale(.85)
                    rotate(-5deg);
            }

            .se-sunset-scene {
                transform:
                    translateY(20px)
                    scale(.7);
            }
        }


        /* =====================================================
           ANIMACIONES — ARMARIO
           ===================================================== */

        @keyframes seDoorLeft {
            0% {
                transform: rotateY(0deg);
            }

            55% {
                transform: rotateY(-55deg);
            }

            100% {
                transform: rotateY(-96deg);
            }
        }

        @keyframes seDoorRight {
            0% {
                transform: rotateY(0deg);
            }

            55% {
                transform: rotateY(55deg);
            }

            100% {
                transform: rotateY(96deg);
            }
        }

        @keyframes seWardrobeEntrance {
            0% {
                opacity: 0;
                transform:
                    translateY(22px)
                    scale(.78);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(.96);
            }
        }

        @keyframes seNarniaAura {
            0% {
                opacity: 0;
                transform:
                    translateX(-50%)
                    scale(.35);
            }

            35% {
                opacity: .9;
                transform:
                    translateX(-50%)
                    scale(1.05);
            }

            100% {
                opacity: .18;
                transform:
                    translateX(-50%)
                    scale(1.25);
            }
        }

        @keyframes seNarniaLight {
            0% {
                opacity: 0;
                transform: scale(.6);
            }

            35% {
                opacity: 1;
                transform: scale(1.15);
            }

            75% {
                opacity: .8;
                transform: scale(1);
            }

            100% {
                opacity: 0;
                transform: scale(1.25);
            }
        }

        @keyframes seSnow {
            0% {
                opacity: 0;
                transform:
                    translateY(-20px)
                    scale(.5);
            }

            30% {
                opacity: .9;
            }

            100% {
                opacity: 0;
                transform:
                    translateY(230px)
                    rotate(180deg)
                    scale(1);
            }
        }

        @keyframes seNarniaFade {
            0% {
                opacity: 0;
            }

            12% {
                opacity: 1;
            }

            78% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — FAROLA
           ===================================================== */

        @keyframes seLampEntrance {
            0% {
                opacity: 0;
                transform:
                    translateY(35px)
                    scale(.55);
            }

            55% {
                opacity: 1;
                transform:
                    translateY(-5px)
                    scale(1.03);
            }

            75% {
                transform:
                    translateY(2px)
                    scale(.98);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }
        }

        @keyframes seLampGlow {
            0% {
                opacity: 0;
                transform: scale(.45);
            }

            35% {
                opacity: .95;
                transform: scale(1.05);
            }

            65% {
                opacity: .65;
                transform: scale(.95);
            }

            100% {
                opacity: .45;
                transform: scale(1);
            }
        }

        @keyframes seLampFlicker {
            0% {
                opacity: .7;
                transform: scale(.92);
            }

            30% {
                opacity: 1;
                transform: scale(1.06);
            }

            55% {
                opacity: .78;
                transform: scale(.96);
            }

            75% {
                opacity: 1;
                transform: scale(1.03);
            }

            100% {
                opacity: .82;
                transform: scale(.98);
            }
        }

        @keyframes seLampSnow {
            0% {
                opacity: 0;
                transform:
                    translateY(-20px)
                    translateX(0)
                    scale(.4);
            }

            25% {
                opacity: .9;
            }

            70% {
                opacity: .7;
            }

            100% {
                opacity: 0;
                transform:
                    translateY(280px)
                    translateX(18px)
                    rotate(180deg)
                    scale(1);
            }
        }

        @keyframes seLampFade {
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            80% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — ASLAN
           ===================================================== */

        @keyframes seAslanEntrance {
            0% {
                opacity: 0;

                transform:
                    translateY(45px)
                    scale(.5);

                filter:
                    brightness(.4);
            }

            45% {
                opacity: 1;

                transform:
                    translateY(-8px)
                    scale(1.08);

                filter:
                    brightness(1.25);
            }

            70% {
                transform:
                    translateY(2px)
                    scale(.97);

                filter:
                    brightness(1.05);
            }

            100% {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);

                filter:
                    brightness(1);
            }
        }

        @keyframes seAslanAura {
            0% {
                opacity: 0;
                transform: scale(.35);
            }

            35% {
                opacity: .95;
                transform: scale(1.05);
            }

            70% {
                opacity: .55;
                transform: scale(1.15);
            }

            100% {
                opacity: .3;
                transform: scale(1.25);
            }
        }

        @keyframes seAslanRise {
            0% {
                transform:
                    translateY(35px)
                    scale(.65)
                    rotate(-3deg);

                opacity: 0;
            }

            55% {
                transform:
                    translateY(-5px)
                    scale(1.06)
                    rotate(2deg);

                opacity: 1;
            }

            100% {
                transform:
                    translateY(0)
                    scale(1)
                    rotate(0deg);

                opacity: 1;
            }
        }

        @keyframes seAslanRing {
            0% {
                opacity: 0;
                transform: scale(.3);
            }

            30% {
                opacity: .9;
            }

            100% {
                opacity: 0;
                transform: scale(1.45);
            }
        }

        @keyframes seAslanSpark {
            0%, 100% {
                opacity: 0;

                transform:
                    scale(.4)
                    translateY(5px)
                    rotate(0deg);
            }

            45% {
                opacity: 1;

                transform:
                    scale(1.2)
                    translateY(-6px)
                    rotate(90deg);
            }

            70% {
                opacity: .35;

                transform:
                    scale(.8)
                    translateY(-2px)
                    rotate(180deg);
            }
        }

        @keyframes seAslanFade {
            0% {
                opacity: 0;
            }

            12% {
                opacity: 1;
            }

            78% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — OUTER BANKS MAPA
           ===================================================== */

        @keyframes seMapOpen {
            0% {
                opacity: 0;

                transform:
                    rotateX(-70deg)
                    scale(.7);
            }

            100% {
                opacity: 1;

                transform:
                    rotateX(0deg)
                    scale(1);
            }
        }

        @keyframes seCompassAppear {
            0% {
                opacity: 0;

                transform:
                    scale(.3)
                    rotate(-90deg);
            }

            100% {
                opacity: 1;

                transform:
                    scale(1)
                    rotate(0deg);
            }
        }

        @keyframes seCompassSpin {
            0% {
                transform: rotate(0deg);
            }

            45% {
                transform: rotate(190deg);
            }

            70% {
                transform: rotate(140deg);
            }

            100% {
                transform: rotate(180deg);
            }
        }

        @keyframes sePinPulse {
            0%, 100% {
                transform: scale(.9);
            }

            50% {
                transform: scale(1.15);
            }
        }

        @keyframes seObxSpark {
            0%, 100% {
                opacity: 0;
                transform: scale(.5);
            }

            50% {
                opacity: 1;
                transform: scale(1.2);
            }
        }

        @keyframes seMapFade {
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            78% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — OUTER BANKS ATARDECER
           ===================================================== */

        @keyframes seSunsetEntrance {
            0% {
                opacity: 0;

                transform:
                    translateY(45px)
                    scale(.5);
            }

            50% {
                opacity: 1;

                transform:
                    translateY(-4px)
                    scale(1.03);
            }

            100% {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1);
            }
        }

        @keyframes seSunsetSun {
            0% {
                opacity: 0;

                transform:
                    translateY(25px)
                    scale(.5);
            }

            50% {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1.08);
            }

            100% {
                opacity: 1;

                transform:
                    translateY(4px)
                    scale(1);
            }
        }

        @keyframes seBoatFloat {
            0%, 100% {
                transform:
                    translateY(0)
                    rotate(-1deg);
            }

            50% {
                transform:
                    translateY(-7px)
                    rotate(1deg);
            }
        }

        @keyframes seBirdFlight {
            0% {
                opacity: 0;

                transform:
                    translateX(-15px)
                    translateY(8px)
                    scale(.7);
            }

            25% {
                opacity: .8;
            }

            75% {
                opacity: .8;
            }

            100% {
                opacity: 0;

                transform:
                    translateX(30px)
                    translateY(-8px)
                    scale(1);
            }
        }

        @keyframes seSunsetSpark {
            0%, 100% {
                opacity: 0;

                transform:
                    scale(.4)
                    translateY(4px);
            }

            50% {
                opacity: 1;

                transform:
                    scale(1)
                    translateY(-5px);
            }
        }

        @keyframes seSunsetFade {
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            80% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — BELLA Y LA BESTIA
           ===================================================== */

        @keyframes seRoseEntrance {
            0% {
                opacity: 0;

                transform:
                    translateY(45px)
                    scale(.55);
            }

            65% {
                opacity: 1;

                transform:
                    translateY(-4px)
                    scale(1.04);
            }

            100% {
                opacity: 1;

                transform:
                    translateY(14px)
                    scale(1);
            }
        }

        @keyframes seRoseBloom {
            0% {
                transform:
                    scale(.35)
                    rotate(-14deg);

                opacity: 0;
            }

            55% {
                transform:
                    scale(1.14)
                    rotate(4deg);

                opacity: 1;
            }

            100% {
                transform:
                    scale(1)
                    rotate(0deg);

                opacity: 1;
            }
        }

        @keyframes seRoseFloat {
            0%, 100% {
                transform:
                    translateY(3px)
                    rotate(-2deg);
            }

            50% {
                transform:
                    translateY(-10px)
                    rotate(2deg);
            }
        }

        @keyframes seRoseAura {
            0% {
                opacity: 0;
                transform: scale(.45);
            }

            45% {
                opacity: .8;
                transform: scale(1);
            }

            100% {
                opacity: .2;
                transform: scale(1.15);
            }
        }

        @keyframes seRoseRing {
            0% {
                opacity: 0;

                transform:
                    translate(-50%, -50%)
                    scale(.4)
                    rotate(-20deg);
            }

            35% {
                opacity: 1;
            }

            100% {
                opacity: 0;

                transform:
                    translate(-50%, -50%)
                    scale(1.5)
                    rotate(20deg);
            }
        }

        @keyframes seRoseGlow {
            from {
                opacity: .45;
                transform: scale(.85);
            }

            to {
                opacity: 1;
                transform: scale(1.15);
            }
        }

        @keyframes seRoseSpark {
            0%, 100% {
                opacity: 0;

                transform:
                    translateY(4px)
                    scale(.5)
                    rotate(0deg);
            }

            50% {
                opacity: 1;

                transform:
                    translateY(-6px)
                    scale(1.15)
                    rotate(90deg);
            }
        }

        @keyframes seBellaFade {
            0% {
                opacity: 0;
            }

            12% {
                opacity: 1;
            }

            78% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — BRIDGERTON
           ===================================================== */

        @keyframes seEnvelopeAppear {
            0% {
                opacity: 0;

                transform:
                    translateY(30px)
                    rotate(-8deg)
                    scale(.8);
            }

            100% {
                opacity: 1;

                transform:
                    translateY(0)
                    rotate(0)
                    scale(1);
            }
        }

        @keyframes seEnvelopeOpen {
            0% {
                transform:
                    rotateX(0deg);
            }

            100% {
                transform:
                    rotateX(-170deg);
            }
        }

        @keyframes seLetterRise {
            0% {
                opacity: 0;

                transform:
                    translateY(45px)
                    scale(.9);
            }

            100% {
                opacity: 1;

                transform:
                    translateY(-20px)
                    scale(1);
            }
        }

        @keyframes seWaxAppear {
            0% {
                opacity: 0;
                transform: scale(.2);
            }

            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes seLetterGlow {
            from {
                opacity: .4;
                transform: scale(.85);
            }

            to {
                opacity: .9;
                transform: scale(1.12);
            }
        }

        @keyframes seLetterFade {
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            80% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — PRINCESA
           ===================================================== */

        @keyframes seCrownAppear {
            0% {
                opacity: 0;

                transform:
                    translateY(-35px)
                    scale(.5)
                    rotate(-8deg);
            }

            20% {
                opacity: 1;

                transform:
                    translateY(0)
                    scale(1.1)
                    rotate(3deg);
            }

            32% {
                transform:
                    translateY(0)
                    scale(1)
                    rotate(0deg);
            }

            75% {
                opacity: 1;
            }

            100% {
                opacity: 0;

                transform:
                    translateY(-10px)
                    scale(.95);
            }
        }

        @keyframes seCrownFloat {
            0%, 100% {
                transform:
                    translateY(2px)
                    rotate(-2deg);
            }

            50% {
                transform:
                    translateY(-7px)
                    rotate(2deg);
            }
        }

        @keyframes seCrownGlow {
            from {
                opacity: .5;
                transform: scale(.85);
            }

            to {
                opacity: 1;
                transform: scale(1.15);
            }
        }

        @keyframes seCrownSpark {
            0%, 100% {
                opacity: 0;

                transform:
                    scale(.5)
                    rotate(0deg);
            }

            45% {
                opacity: 1;

                transform:
                    scale(1.2)
                    rotate(90deg);
            }
        }

        @keyframes seCrownFade {
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            78% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — HARRY POTTER
           ===================================================== */

        @keyframes seHarryFlight {
            0% {
                left: -190px;
                top: 37%;

                transform:
                    rotate(-7deg)
                    scale(.85);
            }

            45% {
                top: 27%;

                transform:
                    rotate(2deg)
                    scale(1);
            }

            70% {
                top: 31%;

                transform:
                    rotate(-3deg)
                    scale(1);
            }

            100% {
                left: calc(100% + 30px);
                top: 22%;

                transform:
                    rotate(5deg)
                    scale(.8);
            }
        }

        @keyframes seHpTrail {
            from {
                opacity: .3;
                transform: scaleX(.7);
            }

            to {
                opacity: .8;
                transform: scaleX(1.2);
            }
        }

        @keyframes seHpStar {
            0%, 100% {
                opacity: .2;

                transform:
                    translateY(4px)
                    scale(.7);
            }

            50% {
                opacity: 1;

                transform:
                    translateY(-5px)
                    scale(1);
            }
        }


        /* =====================================================
           ACCESIBILIDAD
           ===================================================== */

        @media (prefers-reduced-motion: reduce) {

            .se-effect,
            .se-effect * {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
            }
        }

        `;

        document.head.appendChild(style);


        /* =====================================================
           CAPA
           ===================================================== */

        let layer =
            document.getElementById(
                "special-effects-layer"
            );

        if (!layer) {

            layer =
                document.createElement("div");

            layer.id =
                "special-effects-layer";

            document.body.appendChild(layer);
        }


        /* =====================================================
           NARNIA — ARMARIO
           ===================================================== */

        function createNarniaWardrobe() {

            layer.innerHTML = `

                <div class="se-effect se-narnia">

                    <div class="se-wardrobe-area">

                        <div class="se-wardrobe-light"></div>

                        <div class="se-wardrobe">

                            <div class="se-wardrobe-inside">
                                ✨
                            </div>

                            <div class="se-door se-door-left"></div>

                            <div class="se-door se-door-right"></div>

                        </div>

                    </div>

                    <span class="se-snow"></span>
                    <span class="se-snow"></span>
                    <span class="se-snow"></span>
                    <span class="se-snow"></span>
                    <span class="se-snow"></span>
                    <span class="se-snow"></span>

                </div>
            `;

            removeEffectAfter(3200);
        }


        /* =====================================================
           NARNIA — FAROLA
           ===================================================== */

        function createNarniaLamp() {

            layer.innerHTML = `

                <div class="se-effect se-narnia-lamp">

                    <div class="se-lamp-scene">

                        <div class="se-lamp-glow"></div>

                        <div class="se-lamp-post"></div>

                        <div class="se-lamp-base"></div>

                        <div class="se-lamp-top">

                            <div class="se-lamp-glass"></div>

                        </div>

                        <div class="se-lamp-cap"></div>

                        <span class="se-lamp-snow">✦</span>
                        <span class="se-lamp-snow">✧</span>
                        <span class="se-lamp-snow">✦</span>
                        <span class="se-lamp-snow">✧</span>
                        <span class="se-lamp-snow">✦</span>
                        <span class="se-lamp-snow">✧</span>

                    </div>

                </div>
            `;

            removeEffectAfter(3000);
        }


        /* =====================================================
           NARNIA — ASLAN
           ===================================================== */

        function createNarniaAslan() {

            layer.innerHTML = `

                <div class="se-effect se-narnia-aslan">

                    <div class="se-aslan-scene">

                        <div class="se-aslan-aura"></div>

                        <div class="se-aslan-light"></div>

                        <div class="se-aslan">
                            🦁
                        </div>

                        <span class="se-aslan-star">✦</span>
                        <span class="se-aslan-star">✧</span>
                        <span class="se-aslan-star">✦</span>
                        <span class="se-aslan-star">✧</span>

                    </div>

                </div>
            `;

            removeEffectAfter(3400);
        }


        /* =====================================================
           BELLA Y LA BESTIA
           ===================================================== */

        function createBella() {

            layer.innerHTML = `

                <div class="se-effect se-bella">

                    <div class="se-rose-container">

                        <div class="se-rose-glow"></div>

                        <div class="se-rose">
                            🌹
                        </div>

                        <span class="se-rose-petal">✦</span>
                        <span class="se-rose-petal">✧</span>
                        <span class="se-rose-petal">✦</span>
                        <span class="se-rose-petal">✧</span>

                    </div>

                </div>
            `;

            removeEffectAfter(2800);
        }


        /* =====================================================
           BRIDGERTON
           ===================================================== */

        function createBridgerton() {

            layer.innerHTML = `

                <div class="se-effect se-bridgerton">

                    <div class="se-letter-scene">

                        <div class="se-letter-glow"></div>

                        <div class="se-envelope">

                            <div class="se-letter-paper">
                                UNA CARTA
                                <br>
                                ESPECIAL
                                <br>
                                ✦
                            </div>

                            <div class="se-envelope-flap"></div>

                            <div class="se-wax">
                                ✦
                            </div>

                        </div>

                    </div>

                </div>
            `;

            removeEffectAfter(2900);
        }


        /* =====================================================
           PRINCESA POR SORPRESA
           ===================================================== */

        function createPrincess() {

            layer.innerHTML = `

                <div class="se-effect se-princess">

                    <div class="se-crown-container">

                        <div class="se-crown-glow"></div>

                        <div class="se-crown">
                            👑
                        </div>

                        <span class="se-crown-spark">✦</span>
                        <span class="se-crown-spark">✧</span>
                        <span class="se-crown-spark">✦</span>

                    </div>

                </div>
            `;

            removeEffectAfter(2700);
        }


        /* =====================================================
           HARRY POTTER
           ===================================================== */

        function createHarry() {

            layer.innerHTML = `

                <div class="se-effect se-hp">

                    <div class="se-hp-flight">

                        <div class="se-hp-trail"></div>

                        <div class="se-hp-wizard">
                            🧙‍♂️
                        </div>

                        <div class="se-hp-broom">
                            🧹
                        </div>

                    </div>

                    <span class="se-hp-star">✦</span>
                    <span class="se-hp-star">✧</span>
                    <span class="se-hp-star">✦</span>

                </div>
            `;

            removeEffectAfter(3000);
        }


        /* =====================================================
           OUTER BANKS — MAPA
           ===================================================== */

        function createOuterBanksMap() {

            layer.innerHTML = `

                <div class="se-effect se-obx">

                    <div class="se-map-wrapper">

                        <div class="se-map">

                            <div class="se-map-title">
                                OUTER BANKS
                            </div>

                            <div class="se-map-pin">
                                📍
                            </div>

                        </div>

                        <div class="se-compass">
                            🧭
                        </div>

                        <div class="se-obx-stars">

                            <span>✦</span>
                            <span>✧</span>
                            <span>✦</span>

                        </div>

                    </div>

                </div>
            `;

            removeEffectAfter(2800);
        }


        /* =====================================================
           OUTER BANKS — ATARDECER + BARCO
           ===================================================== */

        function createOuterBanksSunset() {

            layer.innerHTML = `

                <div class="se-effect se-obx-sunset">

                    <div class="se-sunset-scene">

                        <div class="se-sunset-sky"></div>

                        <div class="se-sunset-sun"></div>

                        <div class="se-sunset-sea"></div>

                        <div class="se-sunset-boat">

                            <div class="se-boat-hull"></div>

                            <div class="se-boat-sail"></div>

                        </div>

                        <span class="se-sunset-bird">⌁</span>
                        <span class="se-sunset-bird">⌁</span>
                        <span class="se-sunset-bird">⌁</span>

                        <span class="se-sunset-spark"></span>
                        <span class="se-sunset-spark"></span>
                        <span class="se-sunset-spark"></span>

                    </div>

                </div>
            `;

            removeEffectAfter(3300);
        }


        /* =====================================================
           DIAPOSITIVAS FINALES
           ===================================================== */

        function protectFinalSlideObjects(
            slide,
            index
        ) {

            if (
                !slide ||
                (index !== 10 && index !== 11)
            ) {
                return;
            }


            const selectors = [

                ".compass",
                ".compass-object",
                ".compass-decoration",

                ".map",
                ".map-object",
                ".map-decoration",

                ".wand",
                ".wand-object",
                ".wand-decoration",

                ".magic-wand",
                ".magic-wand-object",

                ".wand-effect",
                ".compass-effect",
                ".map-effect",

                "[class*='compass']",
                "[class*='map']",
                "[class*='wand']",

                "[class*='brujula']",
                "[class*='brújula']",

                "[class*='varita']"
            ];


            const objects = new Set();


            selectors.forEach(
                function (selector) {

                    try {

                        slide
                            .querySelectorAll(selector)
                            .forEach(function (el) {

                                if (
                                    !el.classList.contains("slide") &&
                                    !el.closest(
                                        "#special-effects-layer"
                                    )
                                ) {
                                    objects.add(el);
                                }

                            });

                    } catch (_) {}

                }
            );


            objects.forEach(
                function (el) {

                    el.classList.add(
                        "se-final-safe-object"
                    );


                    if (index === 10) {

                        if (
                            el.matches(
                                "[class*='compass'], " +
                                "[class*='brujula'], " +
                                "[class*='brújula'], " +
                                ".compass, " +
                                ".compass-object, " +
                                ".compass-decoration"
                            )
                        ) {

                            el.classList.add(
                                "se-final-compass"
                            );

                        } else if (
                            el.matches(
                                "[class*='map'], " +
                                ".map, " +
                                ".map-object, " +
                                ".map-decoration"
                            )
                        ) {

                            el.classList.add(
                                "se-final-map"
                            );

                        } else if (
                            el.matches(
                                "[class*='wand'], " +
                                "[class*='varita'], " +
                                ".wand, " +
                                ".wand-object, " +
                                ".wand-decoration, " +
                                ".magic-wand, " +
                                ".magic-wand-object"
                            )
                        ) {

                            el.classList.add(
                                "se-final-wand"
                            );
                        }

                    } else {

                        el.classList.add(
                            "se-infinity-object"
                        );
                    }

                }
            );
        }


        /* =====================================================
           BORRAR EFECTO
           ===================================================== */

        let removeTimer = null;


        function removeEffectAfter(time) {

            if (removeTimer) {
                clearTimeout(removeTimer);
            }


            removeTimer =
                setTimeout(
                    function () {

                        layer.innerHTML = "";

                    },
                    time
                );
        }


        /* =====================================================
           RELACIÓN DIAPOSITIVA → OBJETO
           ===================================================== */

        function triggerForSlide(slide) {

            if (!slide) return;


            const slides =
                Array.from(
                    document.querySelectorAll(
                        ".slide"
                    )
                );


            const index =
                slides.indexOf(slide);


            if (index === -1) return;


            /*
                0  = Portada

                1  = 10/10 Narnia
                     → ARMARIO

                2  = 20/10 Outer Banks
                     → MAPA + BRÚJULA

                3  = 30/10 Bella y la Bestia
                     → ROSA

                4  = 40/10 Bridgerton
                     → CARTA

                5  = 50/10 Princesa por Sorpresa
                     → CORONA

                6  = 60/10 Narnia
                     → FAROLA

                7  = 70/10 Harry Potter
                     → ESCOBA

                8  = 80/10 Narnia
                     → ASLAN

                9  = 90/10 Outer Banks
                     → ATARDECER + BARCO

                10 = 100/10 Final
                11 = Infinito
            */


            /* =================================================
               NARNIA — ARMARIO
               SOLO 10/10
               ================================================= */

            if (index === 1) {

                createNarniaWardrobe();

                return;
            }


            /* =================================================
               OUTER BANKS — MAPA
               SOLO 20/10
               ================================================= */

            if (index === 2) {

                createOuterBanksMap();

                return;
            }


            /* =================================================
               BELLA Y LA BESTIA
               ================================================= */

            if (index === 3) {

                createBella();

                return;
            }


            /* =================================================
               BRIDGERTON
               ================================================= */

            if (index === 4) {

                createBridgerton();

                return;
            }


            /* =================================================
               PRINCESA POR SORPRESA
               ================================================= */

            if (index === 5) {

                createPrincess();

                return;
            }


            /* =================================================
               NARNIA — FAROLA
               SOLO 60/10
               ================================================= */

            if (index === 6) {

                createNarniaLamp();

                return;
            }


            /* =================================================
               HARRY POTTER
               ================================================= */

            if (index === 7) {

                createHarry();

                return;
            }


            /* =================================================
               NARNIA — ASLAN
               SOLO 80/10
               ================================================= */

            if (index === 8) {

                createNarniaAslan();

                return;
            }


            /* =================================================
               OUTER BANKS — ATARDECER
               SOLO 90/10
               ================================================= */

            if (index === 9) {

                createOuterBanksSunset();

                return;
            }


            /* =================================================
               CUALQUIER OTRA DIAPOSITIVA
               ================================================= */

            layer.innerHTML = "";
        }


        /* =====================================================
           DETECTAR CAMBIO DE DIAPOSITIVA
           ===================================================== */

        const slides =
            document.querySelectorAll(
                ".slide"
            );


        if (!slides.length) {

            console.warn(
                "special-effects.js: no se encontraron diapositivas."
            );

            return;
        }


        let lastActiveSlide = null;

        let checkScheduled = false;


        function checkActiveSlide() {

            checkScheduled = false;


            const activeSlide =
                document.querySelector(
                    ".slide.active"
                );


            if (!activeSlide) return;


            if (
                activeSlide !==
                lastActiveSlide
            ) {

                lastActiveSlide =
                    activeSlide;


                const slides =
                    Array.from(
                        document.querySelectorAll(
                            ".slide"
                        )
                    );


                const activeIndex =
                    slides.indexOf(
                        activeSlide
                    );


                triggerForSlide(
                    activeSlide
                );


                protectFinalSlideObjects(
                    activeSlide,
                    activeIndex
                );


                setTimeout(
                    function () {

                        protectFinalSlideObjects(
                            activeSlide,
                            activeIndex
                        );

                    },
                    80
                );


                setTimeout(
                    function () {

                        protectFinalSlideObjects(
                            activeSlide,
                            activeIndex
                        );

                    },
                    350
                );
            }
        }


        function scheduleCheck() {

            if (checkScheduled) return;

            checkScheduled = true;


            requestAnimationFrame(
                checkActiveSlide
            );
        }


        /* =====================================================
           OBSERVADOR
           ===================================================== */

        const observer =
            new MutationObserver(
                function (mutations) {

                    for (
                        const mutation
                        of mutations
                    ) {

                        if (
                            mutation.type ===
                                "attributes" &&
                            mutation.attributeName ===
                                "class"
                        ) {

                            scheduleCheck();

                            break;
                        }
                    }

                }
            );


        slides.forEach(
            function (slide) {

                observer.observe(
                    slide,
                    {
                        attributes: true,
                        attributeFilter: ["class"]
                    }
                );

            }
        );


        /* =====================================================
           INICIALIZAR
           ===================================================== */

        scheduleCheck();


        console.log(
            "✨ Special Effects cargado correctamente."
        );
    }


    /* =========================================================
       ARRANQUE SEGURO
       ========================================================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSpecialEffects
        );

    } else {

        initSpecialEffects();

    }

})();
