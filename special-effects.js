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
           NARNIA — ESTRELLA 10/10
           ===================================================== */

        .se-star10 {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 7vh;
            animation:
                seStar10Fade
                3.2s
                ease
                forwards;
        }

        .se-star10-glow {
            position: absolute;
            left: 50%;
            top: 12vh;
            width: 190px;
            height: 190px;
            transform:
                translateX(-50%)
                scale(.35);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,245,190,.75),
                    rgba(180,220,255,.28) 42%,
                    rgba(130,180,255,.08) 60%,
                    transparent 76%
                );
            filter: blur(13px);
            opacity: 0;
            animation:
                seStar10Glow
                2.8s
                ease-out
                .1s
                forwards;
        }

        .se-star10-main {
            position: relative;
            z-index: 2;
            font-size: 105px;
            line-height: 1;
            opacity: 0;
            filter:
                drop-shadow(0 7px 12px rgba(0,0,0,.2))
                drop-shadow(0 0 12px rgba(255,240,150,.8))
                drop-shadow(0 0 28px rgba(160,210,255,.7));
            animation:
                seStar10Appear
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards,
                seStar10Float
                2.4s
                ease-in-out
                1.2s
                infinite;
        }

        .se-star10-spark {
            position: absolute;
            color: #fff8c9;
            font-size: 21px;
            opacity: 0;
            filter:
                drop-shadow(0 0 7px white)
                drop-shadow(0 0 12px rgba(160,210,255,.8));
            animation:
                seStar10Spark
                1.8s
                ease-in-out
                infinite;
        }

        .se-star10-spark.spark1 {
            left: 24%;
            top: 27%;
            animation-delay: .25s;
        }

        .se-star10-spark.spark2 {
            right: 24%;
            top: 31%;
            animation-delay: .7s;
        }

        .se-star10-spark.spark3 {
            left: 34%;
            bottom: 29%;
            animation-delay: 1.05s;
        }

        .se-star10-spark.spark4 {
            right: 32%;
            bottom: 25%;
            animation-delay: 1.4s;
        }

        .se-star10-spark.spark5 {
            left: 50%;
            top: 22%;
            animation-delay: 1.75s;
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
                    #fff5ba,
                    #ffd76a 45%,
                    #c58b28 100%
                );
            box-shadow:
                0 0 18px rgba(255,215,100,.85);
        }

        .se-lamp-cap {
            position: absolute;
            left: 42px;
            top: 40px;
            width: 66px;
            height: 8px;
            border-radius: 50%;
            background: #292d2b;
        }

        .se-lamp-arm {
            position: absolute;
            left: 76px;
            top: 40px;
            width: 8px;
            height: 32px;
            background: #292d2b;
            border-radius: 4px;
        }

        .se-lamp-snow {
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: white;
            opacity: 0;
            animation:
                seLampSnow
                2.2s
                ease-in-out
                infinite;
        }


        /* =====================================================
           ASLAN
           ===================================================== */

        .se-aslan-scene {
            position: relative;
            width: 230px;
            height: 230px;
            display: flex;
            justify-content: center;
            align-items: center;
            animation:
                seAslanEntrance
                1.15s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-aslan-aura {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,225,120,.6),
                    rgba(255,190,50,.18) 45%,
                    transparent 72%
                );
            filter: blur(10px);
            opacity: 0;
            animation:
                seAslanAura
                2.8s
                ease-out
                .15s
                forwards;
        }

        .se-aslan-main {
            position: relative;
            z-index: 2;
            font-size: 95px;
            line-height: 1;
            filter:
                drop-shadow(0 8px 15px rgba(0,0,0,.35))
                drop-shadow(0 0 18px rgba(255,220,110,.65));
            animation:
                seAslanRise
                1.15s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards;
        }

        .se-aslan-ring {
            position: absolute;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            border: 2px solid rgba(255,220,120,.7);
            opacity: 0;
            animation:
                seAslanRing
                2.4s
                ease-out
                .5s
                forwards;
        }

        .se-aslan-spark {
            position: absolute;
            font-size: 20px;
            color: #fff5bf;
            opacity: 0;
            animation:
                seAslanSpark
                1.8s
                ease-in-out
                infinite;
        }

        .se-aslan-spark:nth-child(1) {
            left: 18%;
            top: 25%;
            animation-delay: .4s;
        }

        .se-aslan-spark:nth-child(2) {
            right: 15%;
            top: 35%;
            animation-delay: .9s;
        }

        .se-aslan-spark:nth-child(3) {
            left: 27%;
            bottom: 20%;
            animation-delay: 1.2s;
        }

        .se-aslan-spark:nth-child(4) {
            right: 27%;
            bottom: 25%;
            animation-delay: 1.6s;
        }


        /* =====================================================
           BELLA Y LA BESTIA — ROSA
           ===================================================== */

        .se-bella {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 6vh;
            animation:
                seBellaFade
                3s
                ease
                forwards;
        }

        .se-rose-container {
            position: relative;
            width: 190px;
            height: 210px;
            will-change: transform;
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

        .se-rose-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,80,120,.45),
                    rgba(255,40,90,.15) 45%,
                    transparent 75%
                );
            filter: blur(12px);
            opacity: 0;
            animation:
                seRoseAura
                2.4s
                ease-out
                .2s
                forwards;
        }

        .se-rose {
            position: absolute;
            left: 50%;
            top: 50%;
            transform:
                translate(-50%, -50%)
                scale(.35)
                rotate(-14deg);
            font-size: 90px;
            line-height: 1;
            opacity: 0;
            filter:
                drop-shadow(0 8px 16px rgba(0,0,0,.25))
                drop-shadow(0 0 15px rgba(255,60,100,.6));
            animation:
                seRoseBloom
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .15s
                forwards;
        }

        .se-rose-petal {
            position: absolute;
            color: #ffb5c5;
            font-size: 19px;
            opacity: 0;
            animation:
                seRoseSpark
                1.7s
                ease-in-out
                infinite;
        }

        .se-rose-petal:nth-child(2) {
            left: 17%;
            top: 30%;
            animation-delay: .3s;
        }

        .se-rose-petal:nth-child(3) {
            right: 15%;
            top: 27%;
            animation-delay: .8s;
        }

        .se-rose-petal:nth-child(4) {
            left: 24%;
            bottom: 22%;
            animation-delay: 1.1s;
        }

        .se-rose-petal:nth-child(5) {
            right: 22%;
            bottom: 28%;
            animation-delay: 1.5s;
        }


        /* =====================================================
           BRIDGERTON — CARTA
           ===================================================== */

        .se-bridgerton {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 8vh;
            animation:
                seLetterFade
                3.1s
                ease
                forwards;
        }

        .se-letter-scene {
            position: relative;
            width: 220px;
            height: 180px;
            perspective: 900px;
            animation:
                seEnvelopeAppear
                1.05s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-letter-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 210px;
            height: 130px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(255,215,120,.42),
                    rgba(255,190,80,.13) 50%,
                    transparent 75%
                );
            filter: blur(12px);
            opacity: 0;
            animation:
                seLetterGlow
                2.4s
                ease-in-out
                .5s
                infinite alternate;
        }

        .se-envelope {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 180px;
            height: 120px;
            transform:
                translate(-50%, -50%);
            background:
                linear-gradient(
                    135deg,
                    #f9e8bd,
                    #e4c58c
                );
            border-radius: 5px;
            box-shadow:
                0 14px 25px rgba(80,50,10,.3),
                inset 0 0 0 2px rgba(120,80,25,.2);
            transform-style: preserve-3d;
        }

        .se-letter-paper {
            position: absolute;
            left: 20px;
            top: -35px;
            width: 140px;
            height: 90px;
            padding: 13px;
            box-sizing: border-box;
            background:
                linear-gradient(
                    135deg,
                    #fffaf0,
                    #f2e4c2
                );
            color: #7c5b25;
            font-family: Georgia, serif;
            font-size: 11px;
            text-align: center;
            line-height: 1.35;
            box-shadow:
                0 8px 14px rgba(0,0,0,.18);
            opacity: 0;
            animation:
                seLetterRise
                1.2s
                cubic-bezier(.2,.8,.2,1)
                .7s
                forwards;
        }

        .se-envelope-flap {
            position: absolute;
            left: 0;
            top: 0;
            width: 180px;
            height: 70px;
            background:
                linear-gradient(
                    135deg,
                    #ecd39f,
                    #c9a565
                );
            clip-path:
                polygon(
                    0 0,
                    100% 0,
                    50% 100%
                );
            transform-origin: top center;
            z-index: 4;
            animation:
                seEnvelopeOpen
                .95s
                cubic-bezier(.2,.8,.2,1)
                .5s
                forwards;
        }

        .se-wax {
            position: absolute;
            left: 50%;
            bottom: 37px;
            width: 31px;
            height: 31px;
            transform:
                translateX(-50%)
                scale(.2)
                rotate(-15deg);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle at 35% 30%,
                    #d94a57,
                    #8c1e2a 70%
                );
            color: #ffd9a0;
            font-size: 13px;
            box-shadow:
                0 4px 8px rgba(0,0,0,.25);
            opacity: 0;
            animation:
                seWaxAppear
                .8s
                cubic-bezier(.2,.8,.2,1)
                .9s
                forwards;
            z-index: 5;
        }


        /* =====================================================
           PRINCESA POR SORPRESA — CORONA
           ===================================================== */

        .se-princess {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 6vh;
            animation:
                seCrownFade
                3s
                ease
                forwards;
        }

        .se-crown-container {
            position: relative;
            width: 190px;
            height: 170px;
            transform:
                translateY(0)
                scale(.82);
            animation:
                seCrownAppear
                1.15s
                cubic-bezier(.2,.8,.2,1)
                forwards,
                seCrownFloat
                2.6s
                ease-in-out
                1.3s
                infinite;
        }

        .se-crown-glow {
            position: absolute;
            left: 50%;
            top: 45%;
            width: 170px;
            height: 110px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(255,220,80,.6),
                    rgba(255,180,40,.15) 50%,
                    transparent 75%
                );
            filter: blur(12px);
            opacity: .5;
            animation:
                seCrownGlow
                1.9s
                ease-in-out
                infinite alternate;
        }

        .se-crown {
            position: absolute;
            left: 50%;
            top: 45%;
            transform:
                translate(-50%, -50%);
            font-size: 100px;
            line-height: 1;
            filter:
                drop-shadow(0 8px 12px rgba(0,0,0,.3))
                drop-shadow(0 0 14px rgba(255,215,80,.7));
        }

        .se-crown-spark {
            position: absolute;
            color: #fff3a7;
            font-size: 20px;
            opacity: 0;
            animation:
                seCrownSpark
                1.7s
                ease-in-out
                infinite;
        }

        .se-crown-spark:nth-child(2) {
            left: 15%;
            top: 20%;
            animation-delay: .3s;
        }

        .se-crown-spark:nth-child(3) {
            right: 12%;
            top: 28%;
            animation-delay: .9s;
        }

        .se-crown-spark:nth-child(4) {
            left: 25%;
            bottom: 15%;
            animation-delay: 1.4s;
        }


        /* =====================================================
           HARRY POTTER
           ===================================================== */

        .se-hp {
            position: relative;
        }

        .se-hp-flight {
            position: absolute;
            left: -220px;
            top: 37%;
            width: 190px;
            height: 80px;
            animation:
                seHarryFlight
                3s
                cubic-bezier(.25,.7,.25,1)
                forwards;
        }

        .se-hp-wizard {
            position: absolute;
            left: 50px;
            top: 5px;
            font-size: 46px;
            transform: scaleX(-1);
            filter:
                drop-shadow(0 5px 10px rgba(0,0,0,.3));
        }

        .se-hp-broom {
            position: absolute;
            left: 0;
            top: 35px;
            font-size: 35px;
            transform: rotate(-8deg);
        }

        .se-hp-trail {
            position: absolute;
            left: 5px;
            top: 47px;
            width: 90px;
            height: 5px;
            border-radius: 50%;
            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,215,90,.7),
                    transparent
                );
            filter: blur(2px);
            transform-origin: right center;
            animation:
                seHpTrail
                .7s
                ease-in-out
                infinite alternate;
        }

        .se-hp-star {
            position: absolute;
            color: #ffe99b;
            font-size: 19px;
            opacity: .2;
            animation:
                seHpStar
                1.4s
                ease-in-out
                infinite;
        }

        .se-hp-star:nth-child(2) {
            left: 24%;
            top: 22%;
            animation-delay: .2s;
        }

        .se-hp-star:nth-child(3) {
            right: 25%;
            top: 38%;
            animation-delay: .7s;
        }

        .se-hp-star:nth-child(4) {
            left: 42%;
            bottom: 25%;
            animation-delay: 1.1s;
        }


        /* =====================================================
           OUTER BANKS — MAPA
           ===================================================== */

        .se-obx {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 7vh;
            animation:
                seMapFade
                2.8s
                ease
                forwards;
        }

        .se-map-wrapper {
            position: relative;
            width: 230px;
            height: 190px;
            transform:
                scale(.82)
                rotate(-2deg);
        }

        .se-map {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 205px;
            height: 145px;
            transform:
                translate(-50%, -50%)
                rotateX(-70deg)
                scale(.7);
            transform-origin: center center;
            background:
                linear-gradient(
                    135deg,
                    #e8c88e,
                    #b99155
                );
            border:
                4px solid #76532b;
            border-radius: 5px;
            box-shadow:
                0 12px 25px rgba(0,0,0,.35);
            opacity: 0;
            animation:
                seMapOpen
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards;
        }

        .se-map::before,
        .se-map::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            border: 1px dashed rgba(100,70,30,.35);
        }

        .se-map::before {
            width: 110px;
            height: 70px;
            left: 20px;
            top: 35px;
        }

        .se-map::after {
            width: 70px;
            height: 40px;
            right: 15px;
            bottom: 15px;
        }

        .se-map-title {
            position: absolute;
            left: 0;
            right: 0;
            top: 10px;
            text-align: center;
            color: #5a3a1b;
            font-family: Georgia, serif;
            font-weight: bold;
            font-size: 13px;
            letter-spacing: 2px;
        }

        .se-map-pin {
            position: absolute;
            left: 52%;
            top: 48%;
            font-size: 28px;
            transform: translate(-50%, -50%);
            animation:
                sePinPulse
                1.4s
                ease-in-out
                infinite;
        }

        .se-compass {
            position: absolute;
            right: 2px;
            bottom: 5px;
            font-size: 45px;
            filter:
                drop-shadow(0 5px 8px rgba(0,0,0,.25));
            animation:
                seCompassAppear
                .8s
                cubic-bezier(.2,.8,.2,1)
                .7s
                forwards,
                seCompassSpin
                2.2s
                cubic-bezier(.2,.8,.2,1)
                .9s
                forwards;
        }

        .se-obx-stars {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }

        .se-obx-stars span {
            position: absolute;
            color: #fff3b0;
            opacity: 0;
            animation:
                seObxSpark
                1.6s
                ease-in-out
                infinite;
        }

        .se-obx-stars span:nth-child(1) {
            left: 15%;
            top: 20%;
            animation-delay: .4s;
        }

        .se-obx-stars span:nth-child(2) {
            right: 15%;
            top: 25%;
            animation-delay: .8s;
        }

        .se-obx-stars span:nth-child(3) {
            left: 30%;
            bottom: 15%;
            animation-delay: 1.2s;
        }


        /* =====================================================
           OUTER BANKS — VERANO
           ===================================================== */

        .se-summer90 {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 8vh;
            animation:
                seSummerFade
                4s
                ease
                forwards;
        }

        .se-summer90-sun {
            position: absolute;
            left: 50%;
            top: 50px;
            width: 150px;
            height: 150px;
            transform:
                translateX(-50%)
                scale(.8);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,240,155,.8),
                    rgba(255,175,70,.3) 50%,
                    transparent 72%
                );
            filter: blur(8px);
            opacity: .4;
            animation:
                seSummerSun
                2.5s
                ease-in-out
                infinite alternate;
        }

        .se-summer90-main {
            position: relative;
            z-index: 2;
            font-size: 88px;
            line-height: 1;
            filter:
                drop-shadow(0 8px 14px rgba(0,0,0,.2));
            animation:
                seSummerAppear
                1.05s
                cubic-bezier(.2,.8,.2,1)
                forwards,
                seSummerFloat
                2.4s
                ease-in-out
                1.1s
                infinite;
        }

        .se-summer90-wave {
            position: absolute;
            left: 50%;
            top: 175px;
            width: 280px;
            height: 65px;
            transform:
                translateX(-50%)
                translateY(100px)
                scaleX(.4);
            border-radius: 50%;
            border-top: 4px solid rgba(100,190,220,.45);
            border-bottom: 3px solid rgba(255,255,255,.3);
            opacity: 0;
            animation:
                seSummerWave
                1.2s
                ease-out
                .45s
                forwards;
        }

        .se-summer90-wave.wave2 {
            top: 190px;
            width: 230px;
            animation-delay: .75s;
        }

        .se-summer90-spark {
            position: absolute;
            color: #fff1a4;
            font-size: 20px;
            opacity: 0;
            animation:
                seSummerSpark
                1.6s
                ease-in-out
                infinite;
        }

        .se-summer90-spark.spark1 {
            left: 25%;
            top: 30%;
            animation-delay: .2s;
        }

        .se-summer90-spark.spark2 {
            right: 23%;
            top: 38%;
            animation-delay: .7s;
        }

        .se-summer90-spark.spark3 {
            left: 40%;
            bottom: 22%;
            animation-delay: 1.1s;
        }


        /* =====================================================
           CONSTELACIÓN 100/10
           ===================================================== */

        .se-constellation100 {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            animation:
                seConstellationFade
                4.2s
                ease
                forwards;
        }

        .se-constellation100-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 250px;
            height: 250px;
            transform:
                translate(-50%, -50%)
                scale(.8);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(190,215,255,.4),
                    rgba(130,160,255,.12) 45%,
                    transparent 75%
                );
            filter: blur(12px);
            animation:
                seConstellationGlow
                2.8s
                ease-in-out
                infinite alternate;
        }

        .se-constellation100-line {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 85px;
            height: 2px;
            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(190,220,255,.9),
                    transparent
                );
            transform-origin: left center;
            opacity: 0;
            animation:
                seConstellationLine
                .9s
                ease
                forwards;
        }

        .se-constellation100 .line1 {
            transform:
                translate(-95px,-90px)
                rotate(20deg);
            animation-delay: .15s;
        }

        .se-constellation100 .line2 {
            transform:
                translate(-35px,-85px)
                rotate(25deg);
            animation-delay: .3s;
        }

        .se-constellation100 .line3 {
            transform:
                translate(45px,-70px)
                rotate(-15deg);
            animation-delay: .45s;
        }

        .se-constellation100 .line4 {
            transform:
                translate(105px,-65px)
                rotate(75deg);
            animation-delay: .6s;
        }

        .se-constellation100 .line5 {
            transform:
                translate(75px,35px)
                rotate(160deg);
            animation-delay: .75s;
        }

        .se-constellation100 .line6 {
            transform:
                translate(0,70px)
                rotate(170deg);
            animation-delay: .9s;
        }

        .se-constellation100-star {
            position: absolute;
            color: white;
            font-size: 24px;
            opacity: 0;
            filter:
                drop-shadow(0 0 7px white)
                drop-shadow(0 0 18px rgba(150,170,255,.9));
            animation:
                seConstellationStar
                .8s
                ease
                forwards,
                seConstellationPulse
                1.8s
                ease-in-out
                1s
                infinite;
        }

        .se-constellation100 .star1 {
            left: calc(50% - 105px);
            top: calc(50% - 65px);
            animation-delay: .1s, 1s;
        }

        .se-constellation100 .star2 {
            left: calc(50% - 35px);
            top: calc(50% - 85px);
            animation-delay: .25s, 1.1s;
        }

        .se-constellation100 .star3 {
            left: calc(50% + 45px);
            top: calc(50% - 70px);
            animation-delay: .4s, 1.2s;
        }

        .se-constellation100 .star4 {
            left: calc(50% + 105px);
            top: calc(50% - 65px);
            animation-delay: .55s, 1.3s;
        }

        .se-constellation100 .star5 {
            left: calc(50% + 75px);
            top: calc(50% + 35px);
            animation-delay: .7s, 1.4s;
        }

        .se-constellation100 .star6 {
            left: calc(50% - 5px);
            top: calc(50% + 70px);
            animation-delay: .85s, 1.5s;
        }

        .se-constellation100 .star7 {
            left: calc(50% - 75px);
            top: calc(50% + 20px);
            animation-delay: 1s, 1.6s;
        }


        /* =====================================================
           60/10 — CRISTAL DE HIELO
           ===================================================== */

        .se-ice60 {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 8vh;
            animation:
                seIceFade
                3.4s
                ease
                forwards;
        }

        .se-ice60-glow {
            position: absolute;
            left: 50%;
            top: 12vh;
            width: 200px;
            height: 200px;
            transform:
                translateX(-50%)
                scale(.35);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(220,250,255,.9),
                    rgba(120,205,255,.38) 38%,
                    rgba(90,160,255,.12) 58%,
                    transparent 76%
                );
            filter: blur(13px);
            opacity: 0;
            animation:
                seIceGlow
                2.8s
                ease-out
                .15s
                forwards;
        }

        .se-ice60-main {
            position: relative;
            z-index: 2;
            font-size: 105px;
            line-height: 1;
            opacity: 0;
            filter:
                drop-shadow(0 8px 15px rgba(0,0,0,.18))
                drop-shadow(0 0 12px rgba(200,245,255,.9))
                drop-shadow(0 0 30px rgba(100,190,255,.75));
            animation:
                seIceAppear
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards,
                seIceFloat
                2.5s
                ease-in-out
                1.15s
                infinite;
        }

        .se-ice60-shard {
            position: absolute;
            color: #e8fbff;
            font-size: 20px;
            opacity: 0;
            filter:
                drop-shadow(0 0 7px white)
                drop-shadow(0 0 14px rgba(120,210,255,.8));
            animation:
                seIceShard
                1.8s
                ease-in-out
                infinite;
        }

        .se-ice60-shard.shard1 {
            left: 24%;
            top: 27%;
            animation-delay: .2s;
        }

        .se-ice60-shard.shard2 {
            right: 23%;
            top: 32%;
            animation-delay: .65s;
        }

        .se-ice60-shard.shard3 {
            left: 30%;
            bottom: 25%;
            animation-delay: 1s;
        }

        .se-ice60-shard.shard4 {
            right: 29%;
            bottom: 28%;
            animation-delay: 1.4s;
        }


        /* =====================================================
           80/10 — MARIPOSA
           ===================================================== */

        .se-butterfly80 {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 9vh;
            animation:
                seButterflyFade
                3.8s
                ease
                forwards;
        }

        .se-butterfly80-glow {
            position: absolute;
            left: 50%;
            top: 13vh;
            width: 190px;
            height: 190px;
            transform:
                translateX(-50%)
                scale(.35);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,215,245,.72),
                    rgba(200,160,255,.3) 40%,
                    rgba(130,200,255,.12) 58%,
                    transparent 76%
                );
            filter: blur(14px);
            opacity: 0;
            animation:
                seButterflyGlow
                2.8s
                ease-out
                .1s
                forwards;
        }

        .se-butterfly80-main {
            position: relative;
            z-index: 2;
            font-size: 95px;
            line-height: 1;
            opacity: 0;
            filter:
                drop-shadow(0 8px 15px rgba(0,0,0,.2))
                drop-shadow(0 0 13px rgba(255,190,240,.8))
                drop-shadow(0 0 25px rgba(170,180,255,.65));
            animation:
                seButterflyAppear
                1.05s
                cubic-bezier(.2,.8,.2,1)
                .1s
                forwards,
                seButterflyFlight
                3.2s
                ease-in-out
                1.2s
                infinite;
        }

        .se-butterfly80-spark {
            position: absolute;
            color: #fff1fc;
            font-size: 20px;
            opacity: 0;
            filter:
                drop-shadow(0 0 7px white)
                drop-shadow(0 0 15px rgba(210,170,255,.8));
            animation:
                seButterflySpark
                1.7s
                ease-in-out
                infinite;
        }

        .se-butterfly80-spark.spark1 {
            left: 21%;
            top: 28%;
            animation-delay: .25s;
        }

        .se-butterfly80-spark.spark2 {
            right: 22%;
            top: 24%;
            animation-delay: .7s;
        }

        .se-butterfly80-spark.spark3 {
            left: 28%;
            bottom: 27%;
            animation-delay: 1.05s;
        }

        .se-butterfly80-spark.spark4 {
            right: 27%;
            bottom: 23%;
            animation-delay: 1.45s;
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
           ANIMACIONES — 10/10
           ===================================================== */

        @keyframes seStar10Appear {
            0% {
                opacity: 0;
                transform:
                    scale(.2)
                    rotate(-90deg);
            }

            55% {
                opacity: 1;
                transform:
                    scale(1.15)
                    rotate(8deg);
            }

            100% {
                opacity: 1;
                transform:
                    scale(1)
                    rotate(0deg);
            }
        }

        @keyframes seStar10Float {
            0%, 100% {
                transform:
                    translateY(0)
                    rotate(-3deg);
            }

            50% {
                transform:
                    translateY(-12px)
                    rotate(3deg);
            }
        }

        @keyframes seStar10Glow {
            0% {
                opacity: 0;
                transform:
                    translateX(-50%)
                    scale(.3);
            }

            35% {
                opacity: .9;
                transform:
                    translateX(-50%)
                    scale(1);
            }

            70% {
                opacity: .5;
                transform:
                    translateX(-50%)
                    scale(1.15);
            }

            100% {
                opacity: .2;
                transform:
                    translateX(-50%)
                    scale(1.3);
            }
        }

        @keyframes seStar10Spark {
            0%, 100% {
                opacity: 0;
                transform:
                    scale(.25)
                    rotate(-20deg);
            }

            45% {
                opacity: 1;
                transform:
                    scale(1.15)
                    rotate(20deg);
            }

            70% {
                opacity: .3;
                transform:
                    scale(.7)
                    rotate(45deg);
            }
        }

        @keyframes seStar10Fade {
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
                    translate(-50%, -50%)
                    scale(.35)
                    rotate(-14deg);
            }

            55% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.14)
                    rotate(4deg);
            }

            100% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1)
                    rotate(0deg);
            }
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
                transform:
                    translate(-50%, -50%)
                    scale(.45);
            }

            45% {
                opacity: .8;
                transform:
                    translate(-50%, -50%)
                    scale(1);
            }

            100% {
                opacity: .2;
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
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
                    translateX(-50%)
                    scale(.2)
                    rotate(-15deg);
            }

            70% {
                opacity: 1;
                transform:
                    translateX(-50%)
                    scale(1.08)
                    rotate(3deg);
            }

            100% {
                opacity: 1;
                transform:
                    translateX(-50%)
                    scale(1)
                    rotate(0deg);
            }
        }

        @keyframes seLetterGlow {
            from {
                opacity: .4;
                transform:
                    translate(-50%, -50%)
                    scale(.85);
            }

            to {
                opacity: .9;
                transform:
                    translate(-50%, -50%)
                    scale(1.12);
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
                transform:
                    translate(-50%, -50%)
                    scale(.85);
            }

            to {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
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
                transform:
                    translate(-50%, -50%)
                    scale(.9);
            }

            50% {
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
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

        @keyframes seSummerAppear {
            from {
                opacity: 0;
                transform:
                    scale(.4)
                    translateY(40px);
            }

            to {
                opacity: 1;
                transform:
                    scale(1)
                    translateY(0);
            }
        }

        @keyframes seSummerFloat {
            0%,100% {
                transform:
                    translateY(0)
                    rotate(-2deg);
            }

            50% {
                transform:
                    translateY(-12px)
                    rotate(2deg);
            }
        }

        @keyframes seSummerSun {
            0%,100% {
                transform:
                    scale(.8);
                opacity: .4;
            }

            50% {
                transform:
                    scale(1.25);
                opacity: .8;
            }
        }

        @keyframes seSummerWave {
            from {
                opacity: 0;
                transform:
                    translateX(-50%)
                    translateY(100px)
                    scaleX(.4);
            }

            to {
                opacity: 1;
                transform:
                    translateX(-50%)
                    translateY(100px)
                    scaleX(1);
            }
        }

        @keyframes seSummerSpark {
            from {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }

        @keyframes seSummerFade {
            0%,90% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES — 60/10
           ===================================================== */

        @keyframes seIceAppear {
            0% {
                opacity: 0;
                transform:
                    scale(.2)
                    rotate(-45deg);
            }

            55% {
                opacity: 1;
                transform:
                    scale(1.15)
                    rotate(8deg);
            }

            100% {
                opacity: 1;
                transform:
                    scale(1)
                    rotate(0deg);
            }
        }

        @keyframes seIceFloat {
            0%,100% {
                transform:
                    translateY(0)
                    rotate(-3deg);
            }

            50% {
                transform:
                    translateY(-13px)
                    rotate(3deg);
            }
        }

        @keyframes seIceGlow {
            0% {
                opacity: 0;
                transform:
                    translateX(-50%)
                    scale(.3);
            }

            35% {
                opacity: .9;
                transform:
                    translateX(-50%)
                    scale(1);
            }

            70% {
                opacity: .55;
                transform:
                    translateX(-50%)
                    scale(1.15);
            }

            100% {
                opacity: .2;
                transform:
                    translateX(-50%)
                    scale(1.3);
            }
        }

        @keyframes seIceShard {
            0%,100% {
                opacity: 0;
                transform:
                    scale(.25)
                    translateY(5px)
                    rotate(0deg);
            }

            45% {
                opacity: 1;
                transform:
                    scale(1.15)
                    translateY(-6px)
                    rotate(45deg);
            }

            70% {
                opacity: .25;
                transform:
                    scale(.65)
                    translateY(-2px)
                    rotate(90deg);
            }
        }

        @keyframes seIceFade {
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
           ANIMACIONES — 80/10
           ===================================================== */

        @keyframes seButterflyAppear {
            0% {
                opacity: 0;
                transform:
                    scale(.3)
                    translateY(50px);
            }

            55% {
                opacity: 1;
                transform:
                    scale(1.12)
                    translateY(-5px);
            }

            100% {
                opacity: 1;
                transform:
                    scale(1)
                    translateY(0);
            }
        }

        @keyframes seButterflyFlight {
            0%,100% {
                transform:
                    translate(0,0)
                    rotate(-3deg);
            }

            25% {
                transform:
                    translate(22px,-17px)
                    rotate(5deg);
            }

            50% {
                transform:
                    translate(0,-32px)
                    rotate(-2deg);
            }

            75% {
                transform:
                    translate(-22px,-14px)
                    rotate(5deg);
            }
        }

        @keyframes seButterflyGlow {
            0% {
                opacity: 0;
                transform:
                    translateX(-50%)
                    scale(.3);
            }

            35% {
                opacity: .85;
                transform:
                    translateX(-50%)
                    scale(1);
            }

            70% {
                opacity: .45;
                transform:
                    translateX(-50%)
                    scale(1.15);
            }

            100% {
                opacity: .18;
                transform:
                    translateX(-50%)
                    scale(1.3);
            }
        }

        @keyframes seButterflySpark {
            0%,100% {
                opacity: 0;
                transform:
                    scale(.2)
                    translateY(5px);
            }

            50% {
                opacity: 1;
                transform:
                    scale(1.15)
                    translateY(-7px);
            }
        }

        @keyframes seButterflyFade {
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
           ANIMACIONES — CONSTELACIÓN 100/10
           ===================================================== */

        @keyframes seConstellationStar {
            from {
                opacity: 0;
                transform: scale(.1);
            }

            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes seConstellationPulse {
            0%,100% {
                filter:
                    drop-shadow(0 0 7px white)
                    drop-shadow(0 0 18px rgba(150,170,255,.9));
            }

            50% {
                filter:
                    drop-shadow(0 0 12px white)
                    drop-shadow(0 0 30px rgba(150,170,255,1));
            }
        }

        @keyframes seConstellationLine {
            from {
                opacity: 0;
            }

            to {
                opacity: .8;
            }
        }

        @keyframes seConstellationGlow {
            0%,100% {
                transform:
                    translate(-50%, -50%)
                    scale(.8);
                opacity: .3;
            }

            50% {
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
                opacity: .8;
            }
        }

        @keyframes seConstellationFade {
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            90% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           MÓVIL
           ===================================================== */

        @media (max-width: 600px) {

            .se-star10 {
                transform: scale(.82);
                transform-origin: top center;
            }

            .se-ice60 {
                transform: scale(.82);
                transform-origin: top center;
            }

            .se-butterfly80 {
                transform: scale(.82);
                transform-origin: top center;
            }

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

            .se-summer90 {
                transform: scale(.82);
                transform-origin: top center;
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

            layer.id =
                "special-effects-layer";

            document.body.appendChild(layer);
        }


        /* =====================================================
           NARNIA — ESTRELLA 10/10
           ===================================================== */

        function createStar10() {

            layer.innerHTML = `
                <div class="se-effect se-star10">

                    <div class="se-star10-glow"></div>

                    <div class="se-star10-main">
                        ✨
                    </div>

                    <div class="se-star10-spark spark1">✦</div>
                    <div class="se-star10-spark spark2">✧</div>
                    <div class="se-star10-spark spark3">✦</div>
                    <div class="se-star10-spark spark4">✧</div>
                    <div class="se-star10-spark spark5">✦</div>

                </div>
            `;

            removeEffectAfter(3200);
        }


        /* =====================================================
           NARNIA — CRISTAL HIELO 60/10
           ===================================================== */

        function createIce60() {

            layer.innerHTML = `
                <div class="se-effect se-ice60">

                    <div class="se-ice60-glow"></div>

                    <div class="se-ice60-main">
                        ❄️
                    </div>

                    <div class="se-ice60-shard shard1">✦</div>
                    <div class="se-ice60-shard shard2">✧</div>
                    <div class="se-ice60-shard shard3">❄</div>
                    <div class="se-ice60-shard shard4">✦</div>

                </div>
            `;

            removeEffectAfter(3400);
        }


        /* =====================================================
           NARNIA — MARIPOSA 80/10
           ===================================================== */

        function createButterfly80() {

            layer.innerHTML = `
                <div class="se-effect se-butterfly80">

                    <div class="se-butterfly80-glow"></div>

                    <div class="se-butterfly80-main">
                        🦋
                    </div>

                    <div class="se-butterfly80-spark spark1">✦</div>
                    <div class="se-butterfly80-spark spark2">✧</div>
                    <div class="se-butterfly80-spark spark3">✦</div>
                    <div class="se-butterfly80-spark spark4">✧</div>

                </div>
            `;

            removeEffectAfter(3800);
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
           OUTER BANKS — DETALLE VERANIEGO
           ===================================================== */

        function createSummer90() {

            layer.innerHTML = `
                <div class="se-effect se-summer90">

                    <div class="se-summer90-sun"></div>

                    <div class="se-summer90-main">
                        🌺
                    </div>

                    <div class="se-summer90-wave wave1"></div>
                    <div class="se-summer90-wave wave2"></div>

                    <div class="se-summer90-spark spark1">✦</div>
                    <div class="se-summer90-spark spark2">✧</div>
                    <div class="se-summer90-spark spark3">✦</div>

                </div>
            `;

            removeEffectAfter(4000);
        }


        /* =====================================================
           CONSTELACIÓN 100/10
           ===================================================== */

        function createConstellation100() {

            layer.innerHTML = `
                <div class="se-effect se-constellation100">

                    <div class="se-constellation100-glow"></div>

                    <div class="se-constellation100-line line1"></div>
                    <div class="se-constellation100-line line2"></div>
                    <div class="se-constellation100-line line3"></div>
                    <div class="se-constellation100-line line4"></div>
                    <div class="se-constellation100-line line5"></div>
                    <div class="se-constellation100-line line6"></div>

                    <div class="se-constellation100-star star1">✦</div>
                    <div class="se-constellation100-star star2">✦</div>
                    <div class="se-constellation100-star star3">✦</div>
                    <div class="se-constellation100-star star4">✦</div>
                    <div class="se-constellation100-star star5">✦</div>
                    <div class="se-constellation100-star star6">✦</div>
                    <div class="se-constellation100-star star7">✦</div>

                </div>
            `;

            removeEffectAfter(4200);
        }


        /* =====================================================
           DIAPOSITIVAS FINALES
           ===================================================== */

        function protectFinalSlideObjects(slide, index) {

            if (!slide || index !== 10) {
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
                                !el.closest("#special-effects-layer")
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

            if (!slide) {
                return;
            }

            const slides =
                Array.from(
                    document.querySelectorAll(".slide")
                );

            const index =
                slides.indexOf(slide);

            if (index === -1) {
                return;
            }


            /*
                0  = Portada
                1  = 10/10
                2  = Outer Banks
                3  = Bella y la Bestia
                4  = Bridgerton
                5  = Princesa por sorpresa
                6  = 60/10
                7  = Harry Potter
                8  = 80/10
                9  = 90/10
                10 = 100/10
                11 = ∞/10
            */


            if (index === 1) {

                createStar10();

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

                createIce60();

                return;
            }


            if (index === 7) {

                createHarry();

                return;
            }


            if (index === 8) {

                createButterfly80();

                return;
            }


            if (index === 9) {

                createSummer90();

                return;
            }


            if (index === 10) {

                createConstellation100();

                return;
            }


            if (index === 11) {

                layer.innerHTML = "";

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


            if (!activeSlide) {
                return;
            }


            if (
                activeSlide !==
                lastActiveSlide
            ) {

                lastActiveSlide =
                    activeSlide;


                const allSlides =
                    Array.from(
                        document.querySelectorAll(".slide")
                    );


                const activeIndex =
                    allSlides.indexOf(
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

            if (checkScheduled) {
                return;
            }

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
