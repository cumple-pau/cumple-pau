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
            background: radial-gradient(
                circle,
                rgba(220,245,255,.55),
                rgba(120,200,255,.16) 42%,
                transparent 72%
            );
            filter: blur(10px);
            opacity: 0;
            animation: seNarniaAura 3s ease .15s forwards;
        }

        .se-wardrobe-area {
            position: relative;
            width: 178px;
            height: 238px;
            perspective: 1100px;
            transform: translateY(0) scale(.96);
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
            border-radius: 9px 9px 4px 4px;
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
            border: 2px solid rgba(20,10,5,.5);
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

        .se-snow:nth-child(1) { left: 8%; animation-delay: .1s; }
        .se-snow:nth-child(2) { left: 22%; animation-delay: .6s; }
        .se-snow:nth-child(3) { left: 38%; animation-delay: .25s; }
        .se-snow:nth-child(4) { left: 56%; animation-delay: .9s; }
        .se-snow:nth-child(5) { left: 74%; animation-delay: .45s; }
        .se-snow:nth-child(6) { left: 90%; animation-delay: 1s; }


        /* =====================================================
           NARNIA — FAROLA
           ===================================================== */

        .se-narnia-lamp {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 6vh;
            animation: seLampFade 3s ease forwards;
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
            border-radius: 9px 9px 5px 5px;
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

        .se-lamp-snow:nth-child(6) { left: 12%; animation-delay: .1s; }
        .se-lamp-snow:nth-child(7) { left: 27%; animation-delay: .8s; }
        .se-lamp-snow:nth-child(8) { left: 43%; animation-delay: .35s; }
        .se-lamp-snow:nth-child(9) { left: 62%; animation-delay: 1.1s; }
        .se-lamp-snow:nth-child(10) { left: 78%; animation-delay: .5s; }
        .se-lamp-snow:nth-child(11) { left: 91%; animation-delay: 1.4s; }


        /* =====================================================
           NARNIA — ASLAN
           ===================================================== */

        .se-narnia-aslan {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;
            animation: seAslanFade 3.4s ease forwards;
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
           BELLA Y LA BESTIA — ROSA
           ===================================================== */

        .se-bella {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;
            animation: seBellaFade 3s ease forwards;
        }

        .se-rose-container {
            position: relative;
            width: 165px;
            height: 190px;
            display: flex;
            justify-content: center;
            align-items: center;

            opacity: 0;

            animation:
                seRoseEntrance
                1.15s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-rose-container::before {
            content: "";
            position: absolute;
            width: 110px;
            height: 150px;
            bottom: 3px;
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(255,245,190,.28),
                    transparent 68%
                );
            filter: blur(7px);
            opacity: 0;
            animation:
                seRoseAura
                2.8s
                ease
                .35s
                forwards;
        }

        .se-rose-glow {
            position: absolute;
            width: 135px;
            height: 135px;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,70,100,.42),
                    rgba(255,100,130,.18) 38%,
                    transparent 70%
                );
            filter: blur(8px);
            animation:
                seRoseGlow
                1.5s
                ease-in-out
                infinite
                alternate;
        }

        .se-rose {
            position: relative;
            z-index: 2;
            font-size: 82px;

            opacity: 0;

            filter:
                drop-shadow(0 0 7px rgba(255,70,100,.7))
                drop-shadow(0 10px 10px rgba(0,0,0,.25));

            animation:
                seRoseBloom
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .15s
                forwards,
                seRoseFloat
                2.2s
                ease-in-out
                1.25s
                infinite;
        }

        .se-rose-petal {
            position: absolute;
            font-size: 17px;
            opacity: 0;
            animation:
                seRoseSpark
                1.9s
                ease-in-out
                infinite;
        }

        .se-rose-container::after {
            content: "✦  ✧  ✦";
            position: absolute;
            left: 50%;
            top: 50%;
            transform:
                translate(-50%, -50%)
                scale(.4);
            white-space: nowrap;
            font-size: 18px;
            letter-spacing: 18px;
            color: rgba(255,245,190,.9);
            text-shadow:
                0 0 10px rgba(255,210,90,.9);
            opacity: 0;
            animation:
                seRoseRing
                2.2s
                ease
                .65s
                forwards;
        }

        .se-rose-petal:nth-child(3) {
            left: 12px;
            top: 25px;
        }

        .se-rose-petal:nth-child(4) {
            right: 12px;
            top: 55px;
            animation-delay: .4s;
        }

        .se-rose-petal:nth-child(5) {
            left: 28px;
            bottom: 12px;
            animation-delay: .8s;
        }

        .se-rose-petal:nth-child(6) {
            right: 25px;
            bottom: 28px;
            animation-delay: 1.1s;
        }


        /* =====================================================
           BRIDGERTON — CARTA
           ===================================================== */

        .se-bridgerton {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;
            animation: seLetterFade 3.1s ease forwards;
        }

        .se-letter-scene {
            position: relative;
            width: 190px;
            height: 170px;
            perspective: 900px;
        }

        .se-letter-glow {
            position: absolute;
            width: 150px;
            height: 110px;
            left: 20px;
            top: 30px;
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(255,220,135,.65),
                    rgba(255,220,135,.18) 45%,
                    transparent 72%
                );
            filter: blur(8px);
            animation:
                seLetterGlow
                1.5s
                ease-in-out
                infinite
                alternate;
        }

        .se-envelope {
            position: absolute;
            width: 150px;
            height: 105px;
            left: 20px;
            top: 30px;
            border-radius: 5px;
            background:
                linear-gradient(
                    145deg,
                    #f8e8c8,
                    #dfc49a
                );
            border:
                2px solid rgba(95,65,35,.5);
            box-shadow:
                0 13px 25px rgba(0,0,0,.3);

            transform-style: preserve-3d;

            animation:
                seEnvelopeAppear
                .75s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-envelope::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background:
                linear-gradient(
                    135deg,
                    transparent 49%,
                    rgba(110,75,38,.25) 50%,
                    transparent 51%
                );
            opacity: .7;
            pointer-events: none;
        }

        .se-envelope-flap {
            position: absolute;
            z-index: 4;
            left: 0;
            top: 0;
            width: 100%;
            height: 60px;

            background:
                linear-gradient(
                    135deg,
                    #f3dfbb,
                    #d5b987
                );

            clip-path:
                polygon(
                    0 0,
                    100% 0,
                    50% 100%
                );

            transform-origin: top center;
            transform-style: preserve-3d;

            animation:
                seEnvelopeOpen
                1.15s
                cubic-bezier(.2,.8,.2,1)
                .65s
                forwards;
        }

        .se-letter-paper {
            position: absolute;
            z-index: 2;

            width: 122px;
            height: 90px;

            left: 34px;
            top: 42px;

            padding-top: 15px;
            box-sizing: border-box;

            text-align: center;

            font-family: Georgia, serif;
            font-size: 11px;
            letter-spacing: 1px;

            color: rgba(80,52,25,.8);

            background:
                linear-gradient(
                    #fff8e9,
                    #ead9b9
                );

            border:
                1px solid rgba(100,70,35,.35);

            box-shadow:
                0 5px 12px rgba(0,0,0,.18);

            transform:
                translateY(45px)
                scale(.9);

            opacity: 0;

            animation:
                seLetterRise
                1s
                cubic-bezier(.2,.8,.2,1)
                1s
                forwards;
        }

        .se-wax {
            position: absolute;
            z-index: 5;

            left: 50%;
            bottom: 7px;

            width: 24px;
            height: 24px;

            margin-left: -12px;

            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 9px;
            color: rgba(255,245,205,.8);

            background:
                radial-gradient(
                    circle at 35% 30%,
                    #c86b6b,
                    #7d2929
                );

            box-shadow:
                0 2px 6px rgba(0,0,0,.25);

            animation:
                seWaxAppear
                .7s
                ease
                1.35s
                both;
        }


        /* =====================================================
           PRINCESA POR SORPRESA — CORONA
           ===================================================== */

        .se-princess {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 9vh;
            animation:
                seCrownFade
                3s
                ease
                forwards;
        }

        .se-crown-container {
            position: relative;

            width: 160px;
            height: 145px;

            display: flex;
            justify-content: center;
            align-items: center;

            opacity: 0;

            animation:
                seCrownAppear
                1.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-crown-glow {
            position: absolute;

            width: 135px;
            height: 135px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,225,95,.72),
                    rgba(255,205,50,.22) 40%,
                    transparent 70%
                );

            filter: blur(7px);

            animation:
                seCrownGlow
                1.4s
                ease-in-out
                infinite
                alternate;
        }

        .se-crown {
            position: relative;
            z-index: 2;

            font-size: 78px;

            filter:
                drop-shadow(0 0 6px rgba(255,230,120,.9))
                drop-shadow(0 10px 10px rgba(0,0,0,.25));

            animation:
                seCrownFloat
                1.7s
                ease-in-out
                1s
                infinite;
        }

        .se-crown-spark {
            position: absolute;

            font-size: 18px;

            opacity: 0;

            animation:
                seCrownSpark
                1.6s
                ease-in-out
                infinite;
        }

        .se-crown-spark:nth-child(3) {
            left: 15px;
            top: 27px;
            animation-delay: .2s;
        }

        .se-crown-spark:nth-child(4) {
            right: 10px;
            top: 50px;
            animation-delay: .6s;
        }

        .se-crown-spark:nth-child(5) {
            left: 30px;
            bottom: 12px;
            animation-delay: 1s;
        }


        /* =====================================================
           HARRY POTTER — VUELO EN ESCOBA
           ===================================================== */

        .se-hp {
            overflow: hidden;
        }

        .se-hp-flight {
            position: absolute;

            left: -220px;
            top: 32%;

            width: 190px;
            height: 95px;

            display: flex;
            align-items: center;

            transform:
                translateX(0)
                rotate(-5deg);

            animation:
                seHarryFlight
                3s
                cubic-bezier(.2,.7,.2,1)
                forwards;
        }

        .se-hp-wizard {
            position: relative;
            z-index: 3;

            font-size: 48px;

            transform:
                translateY(-4px)
                rotate(-8deg);

            filter:
                drop-shadow(0 5px 5px rgba(0,0,0,.35));
        }

        .se-hp-broom {
            position: absolute;

            left: 57px;
            top: 48px;

            font-size: 47px;

            transform: rotate(-12deg);

            filter:
                drop-shadow(0 4px 4px rgba(0,0,0,.35));
        }

        .se-hp-trail {
            position: absolute;

            left: -45px;
            top: 47px;

            width: 105px;
            height: 4px;

            border-radius: 50%;

            background:
                rgba(255,255,255,.72);

            filter: blur(2px);

            opacity: .7;

            animation:
                seHpTrail
                1s
                ease-in-out
                infinite
                alternate;
        }

        .se-hp-star {
            position: absolute;

            font-size: 15px;

            animation:
                seHpStar
                1.4s
                ease-in-out
                infinite;
        }

        .se-hp-star:nth-child(4) {
            left: 10%;
            top: 25%;
        }

        .se-hp-star:nth-child(5) {
            left: 28%;
            top: 65%;
            animation-delay: .3s;
        }

        .se-hp-star:nth-child(6) {
            left: 47%;
            top: 18%;
            animation-delay: .6s;
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

            padding-top: 10vh;

            animation:
                seSunsetFade
                3.4s
                ease
                forwards;
        }

        .se-sunset-scene {
            position: relative;

            width: 280px;
            height: 220px;

            overflow: hidden;

            border-radius: 12px;

            opacity: 0;

            transform:
                translateY(25px)
                scale(.78);

            background:
                linear-gradient(
                    to bottom,
                    #f3ad67 0%,
                    #f7c887 32%,
                    #e8b46d 51%,
                    #718791 52%,
                    #2d4855 100%
                );

            box-shadow:
                0 15px 30px rgba(0,0,0,.35);

            animation:
                seSunsetEntrance
                1.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-sunset-scene::after {
            content: "";

            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;

            height: 75px;

            background:
                repeating-linear-gradient(
                    -4deg,
                    rgba(255,220,160,.1) 0 3px,
                    transparent 3px 12px
                );

            opacity: .8;

            animation:
                seSunsetWater
                2.5s
                ease-in-out
                infinite
                alternate;
        }

        .se-sunset-sun {
            position: absolute;

            left: 50%;
            top: 45px;

            width: 72px;
            height: 72px;

            margin-left: -36px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    #fff3b3 0%,
                    #ffd16b 46%,
                    #f2a052 70%,
                    transparent 72%
                );

            box-shadow:
                0 0 35px rgba(255,210,100,.72);

            opacity: 0;

            animation:
                seSunsetSun
                1.7s
                ease
                .25s
                forwards;
        }

        .se-sunset-horizon {
            position: absolute;

            left: 0;
            right: 0;

            top: 126px;

            height: 3px;

            background:
                rgba(255,225,160,.6);

            box-shadow:
                0 0 12px rgba(255,210,120,.45);

            z-index: 2;
        }

        .se-sunset-sea {
            position: absolute;

            left: 0;
            right: 0;

            bottom: 0;

            height: 91px;

            background:
                repeating-linear-gradient(
                    -5deg,
                    rgba(255,220,155,.09) 0 3px,
                    transparent 3px 12px
                );

            z-index: 1;

            animation:
                seSunsetWater
                2.5s
                ease-in-out
                infinite
                alternate;
        }

        .se-boat {
            position: absolute;

            left: 50%;
            top: 119px;

            width: 125px;
            height: 72px;

            margin-left: -62px;

            z-index: 5;

            opacity: 0;

            animation:
                seBoatAppear
                1.1s
                cubic-bezier(.2,.8,.2,1)
                .55s
                forwards;
        }

        .se-boat-hull {
            position: absolute;

            left: 5px;
            bottom: 8px;

            width: 112px;
            height: 27px;

            background:
                linear-gradient(
                    180deg,
                    #182125,
                    #070b0d
                );

            clip-path:
                polygon(
                    0 0,
                    100% 0,
                    82% 76%,
                    18% 100%
                );

            box-shadow:
                0 8px 12px rgba(0,0,0,.35);
        }

        .se-boat-mast {
            position: absolute;

            left: 61px;
            top: 0;

            width: 4px;
            height: 56px;

            border-radius: 3px;

            background:
                #111719;
        }

        .se-boat-sail {
            position: absolute;

            left: 64px;
            top: 4px;

            width: 45px;
            height: 45px;

            background:
                linear-gradient(
                    135deg,
                    rgba(250,240,210,.92),
                    rgba(190,174,145,.7)
                );

            clip-path:
                polygon(
                    0 0,
                    100% 100%,
                    0 100%
                );

            transform-origin: left bottom;

            animation:
                seSailWave
                1.8s
                ease-in-out
                infinite
                alternate;
        }

        .se-sunset-star {
            position: absolute;

            font-size: 15px;

            color: rgba(255,245,210,.9);

            opacity: 0;

            text-shadow:
                0 0 8px rgba(255,230,150,.8);

            z-index: 3;

            animation:
                seSunsetStar
                1.8s
                ease-in-out
                infinite;
        }

        .se-sunset-star:nth-child(6) {
            left: 12%;
            top: 30%;
        }

        .se-sunset-star:nth-child(7) {
            right: 12%;
            top: 23%;
            animation-delay: .55s;
        }

        .se-sunset-star:nth-child(8) {
            left: 25%;
            top: 18%;
            animation-delay: .9s;
        }

        .se-sunset-star:nth-child(9) {
            right: 27%;
            top: 34%;
            animation-delay: 1.25s;
        }
/* =====================================================
   OBJETOS 100/10 E INFINITO
   OCULTOS
   ===================================================== */

.se-final-safe-object,
.se-infinity-object {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    animation: none !important;
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
            0% { opacity: 0; }
            12% { opacity: 1; }
            78% { opacity: 1; }
            100% { opacity: 0; }
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
            0% { opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
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
                filter: brightness(.4);
            }

            45% {
                opacity: 1;
                transform:
                    translateY(-8px)
                    scale(1.08);
                filter: brightness(1.25);
            }

            70% {
                transform:
                    translateY(2px)
                    scale(.97);
                filter: brightness(1.05);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
                filter: brightness(1);
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
            0% { opacity: 0; }
            12% { opacity: 1; }
            78% { opacity: 1; }
            100% { opacity: 0; }
        }


        /* =====================================================
           ANIMACIONES — ROSA
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
                    translateY(0)
                    scale(1);
            }
        }

        @keyframes seRoseBloom {
            0% {
                opacity: 0;
                transform:
                    scale(.35)
                    rotate(-14deg);
            }

            55% {
                opacity: 1;
                transform:
                    scale(1.14)
                    rotate(4deg);
            }

            100% {
                opacity: 1;
                transform:
                    scale(1)
                    rotate(0deg);
            }
        }

        /*
           IMPORTANTE:
           El movimiento de flotación ahora usa un
           pseudo-elemento independiente para no entrar
           en conflicto con seRoseBloom.
        */

        .se-rose-container {
            will-change: transform;
        }

        .se-rose {
            animation:
                seRoseBloom
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .15s
                forwards;
        }

        .se-rose-container {
            animation:
                seRoseEntrance
                1.15s
                cubic-bezier(.2,.8,.2,1)
                forwards,
                seRoseFloatContainer
                2.2s
                ease-in-out
                1.3s
                infinite;
        }

        @keyframes seRoseFloatContainer {
            0%, 100% {
                transform:
                    translateY(0);
            }

            50% {
                transform:
                    translateY(-9px);
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
            0% { opacity: 0; }
            12% { opacity: 1; }
            78% { opacity: 1; }
            100% { opacity: 0; }
        }


        /* =====================================================
           ANIMACIONES — CARTA
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
                    rotateX(-165deg);
            }
        }

        @keyframes seLetterRise {
            0% {
                opacity: 0;
                transform:
                    translateY(48px)
                    scale(.88);
            }

            60% {
                opacity: 1;
            }

            100% {
                opacity: 1;
                transform:
                    translateY(-23px)
                    scale(1);
            }
        }

        @keyframes seWaxAppear {
            0% {
                opacity: 0;
                transform:
                    scale(.2)
                    rotate(-15deg);
            }

            70% {
                opacity: 1;
                transform:
                    scale(1.08)
                    rotate(3deg);
            }

            100% {
                opacity: 1;
                transform:
                    scale(1)
                    rotate(0deg);
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
            0% { opacity: 0; }
            10% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
        }


        /* =====================================================
           ANIMACIONES — CORONA
           ===================================================== */

        @keyframes seCrownAppear {
            0% {
                opacity: 0;
                transform:
                    translateY(-35px)
                    scale(.5)
                    rotate(-8deg);
            }

            25% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1.1)
                    rotate(3deg);
            }

            45% {
                transform:
                    translateY(0)
                    scale(.98)
                    rotate(-1deg);
            }

            65% {
                transform:
                    translateY(0)
                    scale(1)
                    rotate(0deg);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1)
                    rotate(0deg);
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
            0% { opacity: 0; }
            10% { opacity: 1; }
            82% { opacity: 1; }
            100% { opacity: 0; }
        }


        /* =====================================================
           ANIMACIONES — HARRY POTTER
           ===================================================== */

        @keyframes seHarryFlight {
            0% {
                left: -220px;
                top: 37%;
                transform:
                    rotate(-7deg)
                    scale(.85);
            }

            38% {
                top: 27%;
                transform:
                    rotate(2deg)
                    scale(1);
            }

            62% {
                top: 31%;
                transform:
                    rotate(-3deg)
                    scale(1);
            }

            100% {
                left: calc(100% + 40px);
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
            0% { opacity: 0; }
            10% { opacity: 1; }
            78% { opacity: 1; }
            100% { opacity: 0; }
        }


        /* =====================================================
           ANIMACIONES — ATARDECER OUTER BANKS
           ===================================================== */

        @keyframes seSunsetEntrance {
            0% {
                opacity: 0;
                transform:
                    translateY(35px)
                    scale(.62);
            }

            55% {
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
                    translateY(18px)
                    scale(.65);
            }

            55% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1.08);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }
        }

        @keyframes seSunsetWater {
            from {
                transform:
                    translateX(-7px);
            }

            to {
                transform:
                    translateX(7px);
            }
        }

        @keyframes seBoatAppear {
            0% {
                opacity: 0;
                transform:
                    translateY(18px)
                    scale(.7);
            }

            55% {
                opacity: 1;
                transform:
                    translateY(-2px)
                    scale(1.03);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
            }
        }

        @keyframes seSailWave {
            from {
                transform:
                    skewY(-2deg)
                    rotate(-1deg);
            }

            to {
                transform:
                    skewY(2deg)
                    rotate(1deg);
            }
        }

        @keyframes seSunsetStar {
            0%, 100% {
                opacity: 0;
                transform:
                    scale(.45)
                    translateY(4px);
            }

            50% {
                opacity: 1;
                transform:
                    scale(1.15)
                    translateY(-4px);
            }
        }

        @keyframes seSunsetFade {
            0% { opacity: 0; }
            10% { opacity: 1; }
            82% { opacity: 1; }
            100% { opacity: 0; }
        }


        /* =====================================================
           MÓVIL
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

            .se-sunset-scene {
                transform:
                    scale(.82);
            }

            .se-hp-flight {
                transform:
                    scale(.85)
                    rotate(-5deg);
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
            document.getElementById("special-effects-layer");

        if (!layer) {

            layer = document.createElement("div");

            layer.id = "special-effects-layer";

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
           BELLA Y LA BESTIA — ROSA
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

            removeEffectAfter(3000);
        }


        /* =====================================================
           BRIDGERTON — CARTA
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

            removeEffectAfter(3100);
        }


        /* =====================================================
           PRINCESA POR SORPRESA — CORONA
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

            removeEffectAfter(3000);
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

            removeEffectAfter(3100);
        }


        /* =====================================================
           OUTER BANKS — MAPA + BRÚJULA
           ===================================================== */

        function createOuterBanks() {

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

                        <div class="se-sunset-sun"></div>

                        <div class="se-sunset-horizon"></div>

                        <div class="se-sunset-sea"></div>

                        <div class="se-boat">

                            <div class="se-boat-mast"></div>

                            <div class="se-boat-sail"></div>

                            <div class="se-boat-hull"></div>

                        </div>

                        <span class="se-sunset-star">✦</span>
                        <span class="se-sunset-star">✧</span>
                        <span class="se-sunset-star">✦</span>
                        <span class="se-sunset-star">✧</span>

                    </div>

                </div>
            `;

            removeEffectAfter(3400);
        }


        /* =====================================================
           DIAPOSITIVAS FINALES
           ===================================================== */

        function protectFinalSlideObjects(slide, index) {

            if (!slide || (index !== 10 && index !== 11)) {
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

            selectors.forEach(function (selector) {

                try {

                    slide.querySelectorAll(selector)
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
            });


            objects.forEach(function (el) {

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

            });
        }


        /* =====================================================
           BORRAR EFECTO
           ===================================================== */

        let removeTimer = null;

        function removeEffectAfter(time) {

            if (removeTimer) {
                clearTimeout(removeTimer);
            }

            removeTimer = setTimeout(function () {

                layer.innerHTML = "";

            }, time);
        }


        /* =====================================================
           RELACIÓN DIAPOSITIVA → OBJETO
           ===================================================== */

        function triggerForSlide(slide) {

            if (!slide) return;

            const slides =
                Array.from(
                    document.querySelectorAll(".slide")
                );

            const index =
                slides.indexOf(slide);

            if (index === -1) return;


            /*
                0  = Portada

                1  = 10/10 Narnia → ARMARIO
                2  = 20/10 Outer Banks → MAPA
                3  = 30/10 Bella y la Bestia → ROSA
                4  = 40/10 Bridgerton → CARTA
                5  = 50/10 Princesa por Sorpresa → CORONA
                6  = 60/10 Narnia → FAROLA
                7  = 70/10 Harry Potter → MAGO
                8  = 80/10 Narnia → ASLAN
                9  = 90/10 Outer Banks → ATARDECER + BARCO

                10 = 100/10 Final
                11 = Infinito
            */


            if (index === 1) {

                createNarniaWardrobe();

                return;
            }


            if (index === 2) {

                createOuterBanks();

                return;
            }


            if (index === 3) {

                createBella();

                return;
            }


            if (index === 4) {

                createBridgerton();

                return;
            }


            if (index === 5) {

                createPrincess();

                return;
            }


            if (index === 6) {

                createNarniaLamp();

                return;
            }


            if (index === 7) {

                createHarry();

                return;
            }


            if (index === 8) {

                createNarniaAslan();

                return;
            }


            if (index === 9) {

                createOuterBanksSunset();

                return;
            }


            layer.innerHTML = "";
        }


        /* =====================================================
           DETECTAR CAMBIO DE DIAPOSITIVA
           ===================================================== */

        const slides =
            document.querySelectorAll(".slide");


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


                setTimeout(function () {

                    protectFinalSlideObjects(
                        activeSlide,
                        activeIndex
                    );

                }, 80);


                setTimeout(function () {

                    protectFinalSlideObjects(
                        activeSlide,
                        activeIndex
                    );

                }, 350);
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


        slides.forEach(function (slide) {

            observer.observe(
                slide,
                {
                    attributes: true,
                    attributeFilter: ["class"]
                }
            );

        });


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
