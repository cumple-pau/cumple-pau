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
                    #5b351f 18%,
                    #70452a 50%,
                    #4b2a18 82%,
                    #2d190f 100%
                );
            box-shadow:
                0 15px 35px rgba(0,0,0,.35),
                inset 0 0 0 5px rgba(255,220,170,.16);
            transform-style: preserve-3d;
        }

        .se-wardrobe::before {
            content: "";
            position: absolute;
            inset: 8px;
            border: 2px solid rgba(255,224,180,.2);
            border-radius: 5px;
        }

        .se-wardrobe-door {
            position: absolute;
            top: 10px;
            bottom: 10px;
            width: 69px;
            background:
                linear-gradient(
                    90deg,
                    #4a2817,
                    #71472b,
                    #4b2918
                );
            border: 2px solid rgba(255,220,175,.2);
            transform-style: preserve-3d;
            backface-visibility: visible;
        }

        .se-wardrobe-door.left {
            left: 7px;
            transform-origin: left center;
            animation:
                seDoorLeft
                1.6s
                cubic-bezier(.2,.8,.2,1)
                .7s
                forwards;
        }

        .se-wardrobe-door.right {
            right: 7px;
            transform-origin: right center;
            animation:
                seDoorRight
                1.6s
                cubic-bezier(.2,.8,.2,1)
                .7s
                forwards;
        }

        .se-wardrobe-door::after {
            content: "";
            position: absolute;
            width: 7px;
            height: 7px;
            top: 50%;
            border-radius: 50%;
            background: #d6b36a;
            box-shadow: 0 0 8px rgba(255,225,150,.8);
        }

        .se-wardrobe-door.left::after {
            right: 6px;
        }

        .se-wardrobe-door.right::after {
            left: 6px;
        }

        .se-wardrobe-snow {
            position: absolute;
            font-size: 14px;
            color: white;
            text-shadow: 0 0 7px white;
            opacity: 0;
            animation:
                seSnow
                2.8s
                linear
                infinite;
        }

        .se-wardrobe-snow.s1 {
            left: 25%;
            animation-delay: .4s;
        }

        .se-wardrobe-snow.s2 {
            left: 45%;
            animation-delay: 1.1s;
        }

        .se-wardrobe-snow.s3 {
            left: 68%;
            animation-delay: .8s;
        }

        .se-wardrobe-snow.s4 {
            left: 82%;
            animation-delay: 1.7s;
        }


        /* =====================================================
           FAROLA
           ===================================================== */

        .se-lamp-scene {
            position: relative;
            width: 190px;
            height: 300px;
            margin: 0 auto;
            animation:
                seLampEntrance
                1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-lamp-glow {
            position: absolute;
            width: 170px;
            height: 170px;
            left: 10px;
            top: 5px;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,242,180,.8),
                    rgba(255,205,100,.3) 38%,
                    transparent 72%
                );
            filter: blur(8px);
            opacity: 0;
            animation:
                seLampGlow
                2.5s
                ease-in-out
                .4s
                forwards;
        }

        .se-lamp-post {
            position: absolute;
            left: 50%;
            bottom: 5px;
            width: 13px;
            height: 235px;
            transform: translateX(-50%);
            border-radius: 8px;
            background:
                linear-gradient(
                    90deg,
                    #222,
                    #555,
                    #1b1b1b
                );
            box-shadow: 4px 0 10px rgba(0,0,0,.2);
        }

        .se-lamp-base {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 80px;
            height: 15px;
            transform: translateX(-50%);
            border-radius: 50%;
            background: #272727;
            box-shadow: 0 5px 10px rgba(0,0,0,.25);
        }

        .se-lamp-top {
            position: absolute;
            left: 50%;
            top: 35px;
            width: 82px;
            height: 75px;
            transform: translateX(-50%);
        }

        .se-lamp-roof {
            position: absolute;
            top: 0;
            left: 50%;
            width: 95px;
            height: 25px;
            transform: translateX(-50%);
            clip-path: polygon(
                50% 0,
                100% 100%,
                0 100%
            );
            background:
                linear-gradient(
                    90deg,
                    #202020,
                    #555,
                    #202020
                );
        }

        .se-lamp-glass {
            position: absolute;
            left: 50%;
            top: 20px;
            width: 58px;
            height: 50px;
            transform: translateX(-50%);
            border-radius: 10px 10px 15px 15px;
            background:
                radial-gradient(
                    circle,
                    rgba(255,250,190,.95),
                    rgba(255,206,80,.55) 45%,
                    rgba(255,170,50,.15)
                );
            border: 3px solid #292929;
            box-shadow:
                0 0 25px rgba(255,210,90,.75);
            animation:
                seLampFlicker
                1.8s
                ease-in-out
                .8s
                infinite alternate;
        }

        .se-lamp-arm {
            position: absolute;
            top: 75px;
            left: 50%;
            width: 78px;
            height: 10px;
            transform: translateX(-50%);
            border-radius: 10px;
            background: #292929;
        }

        .se-lamp-snow {
            position: absolute;
            font-size: 13px;
            color: white;
            text-shadow: 0 0 7px white;
            opacity: 0;
            animation:
                seLampSnow
                3.5s
                linear
                infinite;
        }

        .se-lamp-snow.s1 {
            left: 12%;
            animation-delay: .2s;
        }

        .se-lamp-snow.s2 {
            left: 30%;
            animation-delay: 1.2s;
        }

        .se-lamp-snow.s3 {
            left: 55%;
            animation-delay: .6s;
        }

        .se-lamp-snow.s4 {
            left: 76%;
            animation-delay: 1.8s;
        }


        /* =====================================================
           ASLAN
           ===================================================== */

        .se-aslan-scene {
            position: relative;
            width: 220px;
            height: 250px;
            margin: 0 auto;
            animation:
                seAslanEntrance
                1.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-aslan-aura {
            position: absolute;
            left: 50%;
            top: 30px;
            width: 190px;
            height: 190px;
            transform: translateX(-50%);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,236,155,.8),
                    rgba(255,190,70,.25) 45%,
                    transparent 72%
                );
            filter: blur(7px);
            opacity: 0;
            animation:
                seAslanAura
                2.8s
                ease-out
                .25s
                forwards;
        }

        .se-aslan {
            position: absolute;
            left: 50%;
            top: 42px;
            transform: translateX(-50%);
            font-size: 125px;
            line-height: 1;
            filter:
                drop-shadow(0 8px 12px rgba(0,0,0,.25))
                drop-shadow(0 0 14px rgba(255,218,120,.4));
            animation:
                seAslanRise
                1.2s
                cubic-bezier(.2,.8,.2,1)
                .15s
                forwards;
        }

        .se-aslan-ring {
            position: absolute;
            left: 50%;
            top: 52%;
            width: 100px;
            height: 100px;
            transform: translate(-50%,-50%);
            border: 2px solid rgba(255,225,130,.65);
            border-radius: 50%;
            opacity: 0;
            animation:
                seAslanRing
                2.6s
                ease-out
                .5s
                forwards;
        }

        .se-aslan-spark {
            position: absolute;
            font-size: 18px;
            color: #fff4bd;
            text-shadow:
                0 0 7px white,
                0 0 15px rgba(255,210,80,.9);
            opacity: 0;
            animation:
                seAslanSpark
                2s
                ease-in-out
                infinite;
        }

        .se-aslan-spark.s1 {
            left: 20px;
            top: 55px;
            animation-delay: .3s;
        }

        .se-aslan-spark.s2 {
            right: 15px;
            top: 90px;
            animation-delay: .8s;
        }

        .se-aslan-spark.s3 {
            left: 45px;
            bottom: 45px;
            animation-delay: 1.2s;
        }

        .se-aslan-spark.s4 {
            right: 42px;
            bottom: 35px;
            animation-delay: 1.6s;
        }


        /* =====================================================
           BELLA Y LA BESTIA — ROSA
           ===================================================== */

        .se-bella {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-rose-container {
            position: relative;
            width: 180px;
            height: 230px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-rose-glow {
            position: absolute;
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    rgba(255,120,150,.45),
                    transparent 70%
                );
            filter: blur(8px);
            animation:
                seRoseAura
                2.8s
                ease-in-out
                infinite;
        }

        .se-rose {
            position: relative;
            z-index: 2;
            font-size: 105px;
            line-height: 1;
            filter:
                drop-shadow(0 7px 10px rgba(80,0,20,.3))
                drop-shadow(0 0 18px rgba(255,100,140,.35));
        }

        .se-rose-petal {
            position: absolute;
            font-size: 18px;
            color: #ff9ab0;
            text-shadow: 0 0 8px rgba(255,100,140,.8);
            animation:
                seRoseSpark
                2.2s
                ease-in-out
                infinite;
        }

        .se-rose-petal:nth-child(3) {
            left: 15px;
            top: 45px;
            animation-delay: .2s;
        }

        .se-rose-petal:nth-child(4) {
            right: 15px;
            top: 75px;
            animation-delay: .7s;
        }

        .se-rose-petal:nth-child(5) {
            left: 35px;
            bottom: 35px;
            animation-delay: 1.1s;
        }

        .se-rose-petal:nth-child(6) {
            right: 30px;
            bottom: 50px;
            animation-delay: 1.5s;
        }


        /* =====================================================
           BRIDGERTON — CARTA
           ===================================================== */

        .se-bridgerton {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-letter-scene {
            position: relative;
            width: 240px;
            height: 220px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-letter-glow {
            position: absolute;
            width: 230px;
            height: 180px;
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(255,214,120,.45),
                    transparent 70%
                );
            filter: blur(8px);
            animation:
                seLetterGlow
                2.5s
                ease-in-out
                infinite alternate;
        }

        .se-envelope {
            position: relative;
            width: 190px;
            height: 125px;
            border-radius: 5px;
            background:
                linear-gradient(
                    135deg,
                    #fff7df,
                    #ead7ae
                );
            box-shadow:
                0 15px 30px rgba(70,45,15,.25);
            animation:
                seEnvelopeAppear
                1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-letter-paper {
            position: absolute;
            z-index: 1;
            left: 25px;
            right: 25px;
            top: 8px;
            height: 105px;
            padding: 12px 8px;
            box-sizing: border-box;
            text-align: center;
            font-family: Georgia, serif;
            font-size: 13px;
            line-height: 1.35;
            color: #715629;
            background: #fffaf0;
            border: 1px solid rgba(120,90,40,.25);
            box-shadow: 0 3px 8px rgba(0,0,0,.12);
            animation:
                seLetterRise
                1.1s
                ease-out
                .65s
                forwards;
        }

        .se-envelope-flap {
            position: absolute;
            z-index: 3;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
            border-left: 95px solid transparent;
            border-right: 95px solid transparent;
            border-top: 65px solid #dfc48e;
            transform-origin: 50% 0;
            animation:
                seEnvelopeOpen
                1.15s
                cubic-bezier(.2,.8,.2,1)
                .7s
                forwards;
        }

        .se-wax {
            position: absolute;
            z-index: 4;
            left: 50%;
            top: 55px;
            width: 34px;
            height: 34px;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: #9a2639;
            color: #f8d8a0;
            font-size: 14px;
            box-shadow: 0 3px 8px rgba(0,0,0,.2);
            animation:
                seWaxAppear
                .8s
                ease-out
                1.35s
                forwards;
        }


        /* =====================================================
           PRINCESA — CORONA
           ===================================================== */

        .se-princess {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-crown-container {
            position: relative;
            width: 190px;
            height: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            animation:
                seCrownAppear
                1.15s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-crown-glow {
            position: absolute;
            width: 170px;
            height: 130px;
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(255,220,100,.55),
                    transparent 70%
                );
            filter: blur(8px);
            animation:
                seCrownGlow
                2.5s
                ease-in-out
                infinite alternate;
        }

        .se-crown {
            position: relative;
            z-index: 2;
            font-size: 110px;
            line-height: 1;
            filter:
                drop-shadow(0 7px 8px rgba(90,55,0,.25))
                drop-shadow(0 0 16px rgba(255,205,70,.5));
            animation:
                seCrownFloat
                2.4s
                ease-in-out
                1.3s
                infinite;
        }

        .se-crown-spark {
            position: absolute;
            font-size: 19px;
            color: #fff0a0;
            text-shadow:
                0 0 7px white,
                0 0 15px rgba(255,205,80,.9);
            opacity: 0;
            animation:
                seCrownSpark
                2s
                ease-in-out
                infinite;
        }

        .se-crown-spark:nth-child(3) {
            left: 18px;
            top: 40px;
            animation-delay: .3s;
        }

        .se-crown-spark:nth-child(4) {
            right: 12px;
            top: 65px;
            animation-delay: .8s;
        }

        .se-crown-spark:nth-child(5) {
            left: 48px;
            bottom: 18px;
            animation-delay: 1.25s;
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
            width: 170px;
            height: 70px;
            animation:
                seHarryFlight
                3.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-hp-wizard {
            position: absolute;
            left: 45px;
            top: -5px;
            font-size: 38px;
            z-index: 2;
            filter:
                drop-shadow(0 0 8px rgba(150,110,255,.8));
        }

        .se-hp-broom {
            position: absolute;
            left: 0;
            top: 35px;
            font-size: 45px;
            transform: rotate(-10deg);
            z-index: 1;
        }

        .se-hp-trail {
            position: absolute;
            left: 15px;
            top: 35px;
            width: 130px;
            height: 4px;
            border-radius: 50%;
            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(180,140,255,.8),
                    transparent
                );
            filter: blur(2px);
            animation:
                seHpTrail
                .7s
                ease-in-out
                infinite alternate;
        }

        .se-hp-star {
            position: absolute;
            color: #e9dcff;
            font-size: 18px;
            opacity: .2;
            text-shadow:
                0 0 7px white,
                0 0 15px rgba(150,110,255,.8);
            animation:
                seHpStar
                1.7s
                ease-in-out
                infinite;
        }

        .se-hp-star:nth-child(2) {
            left: 20%;
            top: 35%;
            animation-delay: .2s;
        }

        .se-hp-star:nth-child(3) {
            left: 63%;
            top: 25%;
            animation-delay: .8s;
        }

        .se-hp-star:nth-child(4) {
            left: 78%;
            top: 58%;
            animation-delay: 1.2s;
        }


        /* =====================================================
           OUTER BANKS — MAPA
           ===================================================== */

        .se-obx {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-map-wrapper {
            position: relative;
            width: 260px;
            height: 210px;
            perspective: 900px;
        }

        .se-map {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 205px;
            height: 145px;
            transform:
                translate(-50%,-50%)
                rotateX(0deg)
                scale(1);
            border-radius: 8px;
            background:
                linear-gradient(
                    135deg,
                    #d7bc8c,
                    #ead8af,
                    #c9ad79
                );
            border: 3px solid #76582f;
            box-shadow:
                0 12px 25px rgba(70,45,15,.3);
            animation:
                seMapOpen
                1.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-map::before {
            content: "";
            position: absolute;
            inset: 15px;
            border:
                1px dashed
                rgba(90,60,25,.45);
            border-radius: 5px;
        }

        .se-map-title {
            position: absolute;
            left: 50%;
            top: 18px;
            transform: translateX(-50%);
            font-family: Georgia, serif;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 2px;
            color: #634a28;
        }

        .se-map-pin {
            position: absolute;
            left: 48%;
            top: 52%;
            font-size: 30px;
            animation:
                sePinPulse
                1.6s
                ease-in-out
                1.2s
                infinite;
        }

        .se-compass {
            position: absolute;
            right: 0;
            bottom: 10px;
            font-size: 48px;
            filter:
                drop-shadow(0 4px 6px rgba(0,0,0,.2));
            animation:
                seCompassAppear
                .8s
                ease-out
                .8s
                forwards,
                seCompassSpin
                2.3s
                cubic-bezier(.2,.8,.2,1)
                1.5s
                forwards;
        }

        .se-obx-stars span {
            position: absolute;
            font-size: 18px;
            color: #fff1bd;
            text-shadow:
                0 0 7px white,
                0 0 14px rgba(255,200,80,.8);
            opacity: 0;
            animation:
                seObxSpark
                1.8s
                ease-in-out
                infinite;
        }

        .se-obx-stars span:nth-child(1) {
            left: 5px;
            top: 25px;
            animation-delay: .2s;
        }

        .se-obx-stars span:nth-child(2) {
            right: 25px;
            top: 30px;
            animation-delay: .7s;
        }

        .se-obx-stars span:nth-child(3) {
            left: 35px;
            bottom: 12px;
            animation-delay: 1.1s;
        }


        /* =====================================================
           OUTER BANKS — ATARDECER
           ===================================================== */

        .se-summer90 {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .se-summer90-sun {
            position: absolute;
            left: 50%;
            top: 25%;
            width: 100px;
            height: 100px;
            transform: translateX(-50%);
            border-radius: 50%;
            background:
                radial-gradient(
                    circle,
                    #fff5bd,
                    #ffc85c 55%,
                    rgba(255,170,60,.1) 72%,
                    transparent 74%
                );
            box-shadow:
                0 0 45px rgba(255,180,70,.5);
            animation:
                seSummerSun
                2.8s
                ease-in-out
                infinite;
        }

        .se-summer90-main {
            position: relative;
            z-index: 2;
            font-size: 95px;
            filter:
                drop-shadow(0 7px 10px rgba(100,40,10,.2));
            animation:
                seSummerAppear
                1.05s
                cubic-bezier(.2,.8,.2,1)
                forwards,
                seSummerFloat
                2.5s
                ease-in-out
                1.2s
                infinite;
        }

        .se-summer90-wave {
            position: absolute;
            left: 50%;
            top: 63%;
            width: 300px;
            height: 45px;
            border-radius: 50%;
            border-top: 3px solid rgba(120,200,230,.6);
            border-bottom: 2px solid rgba(255,255,255,.45);
            transform: translateX(-50%);
            animation:
                seSummerWave
                2s
                ease-in-out
                infinite alternate;
        }

        .se-summer90-wave.wave2 {
            top: 70%;
            width: 250px;
            opacity: .6;
            animation-delay: .6s;
        }

        .se-summer90-spark {
            position: absolute;
            font-size: 18px;
            color: #fff0a8;
            text-shadow:
                0 0 7px white,
                0 0 15px rgba(255,180,70,.9);
            animation:
                seSummerSpark
                1.7s
                ease-in-out
                infinite;
        }

        .se-summer90-spark.spark1 {
            left: 25%;
            top: 32%;
            animation-delay: .2s;
        }

        .se-summer90-spark.spark2 {
            right: 25%;
            top: 40%;
            animation-delay: .8s;
        }

        .se-summer90-spark.spark3 {
            left: 65%;
            top: 65%;
            animation-delay: 1.2s;
        }


        /* =====================================================
           100/10 — CONSTELACIÓN
           ===================================================== */

        .se-constellation100 {
            animation:
                seConstellationFade
                4.2s
                ease
                forwards;
        }

        .se-constellation100-glow {
            position: absolute;
            width: 330px;
            height: 250px;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            border-radius: 50%;
            background:
                radial-gradient(
                    ellipse,
                    rgba(180,190,255,.35),
                    transparent 70%
                );
            animation:
                seConstellationGlow
                2.5s
                ease-in-out
                infinite;
        }

        .se-constellation100-star {
            position: absolute;
            left: 50%;
            top: 50%;
            z-index: 3;
            font-size: 30px;
            opacity: 0;
            color: white;
            text-shadow:
                0 0 7px white,
                0 0 18px rgba(150,170,255,.9);
            filter:
                drop-shadow(0 0 7px white)
                drop-shadow(0 0 18px rgba(150,170,255,.9));
            animation:
                seConstellationStar
                1s
                ease-out
                forwards,
                seConstellationPulse
                2s
                ease-in-out
                1s
                infinite;
        }

        .se-constellation100 .star1 {
            transform: translate(-125px,-60px);
        }

        .se-constellation100 .star2 {
            transform: translate(-55px,-105px);
            animation-delay: .15s;
        }

        .se-constellation100 .star3 {
            transform: translate(25px,-65px);
            animation-delay: .3s;
        }

        .se-constellation100 .star4 {
            transform: translate(115px,-90px);
            animation-delay: .45s;
        }

        .se-constellation100 .star5 {
            transform: translate(90px,25px);
            animation-delay: .6s;
        }

        .se-constellation100 .star6 {
            transform: translate(10px,75px);
            animation-delay: .75s;
        }

        .se-constellation100 .star7 {
            transform: translate(-80px,45px);
            animation-delay: .9s;
        }

        .se-constellation100-line {
            position: absolute;
            left: 50%;
            top: 50%;
            height: 2px;
            transform-origin: left center;
            background:
                linear-gradient(
                    90deg,
                    rgba(180,200,255,.05),
                    rgba(200,215,255,.8)
                );
            box-shadow:
                0 0 6px rgba(170,190,255,.6);
            opacity: 0;
            animation:
                seConstellationLine
                .8s
                ease-out
                forwards;
        }

        .se-constellation100 .line1 {
            width: 72px;
            transform: rotate(-154deg);
            animation-delay: .4s;
        }

        .se-constellation100 .line2 {
            width: 80px;
            transform: rotate(-56deg);
            animation-delay: .55s;
        }

        .se-constellation100 .line3 {
            width: 73px;
            transform: rotate(-15deg);
            animation-delay: .7s;
        }

        .se-constellation100 .line4 {
            width: 80px;
            transform: rotate(26deg);
            animation-delay: .85s;
        }

        .se-constellation100 .line5 {
            width: 82px;
            transform: rotate(143deg);
            animation-delay: 1s;
        }

        .se-constellation100 .line6 {
            width: 100px;
            transform: rotate(173deg);
            animation-delay: 1.15s;
        }


        /* =====================================================
           ANIMACIONES
           ===================================================== */

        @keyframes seStarAppear {
            from {
                opacity: 0;
                transform: scale(.2) rotate(-90deg);
            }

            to {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }

        @keyframes seStarPulse {
            0%,100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.12);
            }
        }

        @keyframes seStarGlow {
            0%,100% {
                transform: scale(.8);
                opacity: .45;
            }

            50% {
                transform: scale(1.25);
                opacity: 1;
            }
        }

        @keyframes seStarSpark {
            from {
                opacity: 0;
                transform: scale(.2);
            }

            50% {
                opacity: 1;
            }

            to {
                opacity: 0;
                transform: scale(1.2);
            }
        }


        @keyframes seIceAppear {
            from {
                opacity: 0;
                transform: scale(.2) rotate(-45deg);
            }

            to {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }

        @keyframes seIceFloat {
            0%,100% {
                transform: translateY(0) rotate(-3deg);
            }

            50% {
                transform: translateY(-15px) rotate(3deg);
            }
        }

        @keyframes seIceGlow {
            0%,100% {
                transform: scale(.8);
                opacity: .35;
            }

            50% {
                transform: scale(1.25);
                opacity: .9;
            }
        }

        @keyframes seIceShard {
            from {
                opacity: 0;
                transform: scale(.2);
            }

            50% {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }

        @keyframes seIceFade {
            0%,85% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        @keyframes seButterflyAppear {
            from {
                opacity: 0;
                transform: scale(.3) translateY(50px);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes seButterflyFlight {
            0%,100% {
                transform: translate(0,0) rotate(-3deg);
            }

            25% {
                transform: translate(25px,-20px) rotate(5deg);
            }

            50% {
                transform: translate(0,-35px) rotate(-2deg);
            }

            75% {
                transform: translate(-25px,-15px) rotate(5deg);
            }
        }

        @keyframes seButterflyGlow {
            0%,100% {
                transform: scale(.8);
                opacity: .3;
            }

            50% {
                transform: scale(1.2);
                opacity: .8;
            }
        }

        @keyframes seButterflySpark {
            from {
                opacity: 0;
                transform: scale(.2);
            }

            50% {
                opacity: 1;
            }

            to {
                opacity: 0;
            }
        }


        @keyframes seSummerAppear {
            from {
                opacity: 0;
                transform: scale(.4) translateY(40px);
            }

            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes seSummerFloat {
            0%,100% {
                transform: translateY(0) rotate(-2deg);
            }

            50% {
                transform: translateY(-12px) rotate(2deg);
            }
        }

        @keyframes seSummerSun {
            0%,100% {
                transform: scale(.8);
                opacity: .4;
            }

            50% {
                transform: scale(1.25);
                opacity: .8;
            }
        }

        @keyframes seSummerWave {
            from {
                opacity: 0;
                transform: translateY(100px) scaleX(.4);
            }

            to {
                opacity: 1;
                transform: translateY(100px) scaleX(1);
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


        @keyframes seConstellationStar {
            from {
                opacity: 0;
                transform: scale(.1);
            }

            to {
                opacity: 1;
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
                transform: scale(.8);
                opacity: .3;
            }

            50% {
                transform: scale(1.15);
                opacity: .8;
            }
        }

        @keyframes seConstellationFade {
            0%,90% {
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
            0%,100% {
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
            0%,100% {
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
            0%,100% {
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
            0%,100% {
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
            0%,100% {
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

            82% {
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
            0%,100% {
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
            0%,100% {
                transform: scale(.9);
            }

            50% {
                transform: scale(1.15);
            }
        }

        @keyframes seObxSpark {
            0%,100% {
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
            0%,100% {
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
            0% {
                opacity: 0;
            }

            10% {
                opacity: 1;
            }

            82% {
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
            document.getElementById(
                "special-effects-layer"
            );

        if (!layer) {

            layer = document.createElement("div");

            layer.id =
                "special-effects-layer";

            document.body.appendChild(layer);
        }


        /* =====================================================
           NARNIA — ESTRELLA
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
           NARNIA — CRISTAL HIELO
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
           NARNIA — MARIPOSA
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
           CONSTELACIÓN — 100/10
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

        function protectFinalSlideObjects(
            slide,
            index
        ) {

            if (
                !slide ||
                index !== 10
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
                            .forEach(
                                function (el) {

                                    if (
                                        !el.classList.contains("slide") &&
                                        !el.closest(
                                            "#special-effects-layer"
                                        )
                                    ) {
                                        objects.add(el);
                                    }

                                }
                            );

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

                    }

                }
            );
        }
       /* =========================================================
   2. UTILIDADES DE EFECTOS
   ========================================================= */

function removeEffectAfter(ms) {
    clearTimeout(effectTimeout);

    effectTimeout = setTimeout(() => {
        if (layer) {
            layer.innerHTML = "";
        }
    }, ms);
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(random(min, max + 1));
}

function createElement(className, content = "") {
    const el = document.createElement("div");

    el.className = className;

    if (content !== "") {
        el.innerHTML = content;
    }

    return el;
}

function setRandomPosition(el) {
    el.style.left = `${random(5, 95)}%`;
    el.style.top = `${random(5, 95)}%`;
}

function setRandomDelay(el, min = 0, max = 2) {
    el.style.animationDelay = `${random(min, max)}s`;
}

function setRandomDuration(el, min = 2, max = 5) {
    el.style.animationDuration = `${random(min, max)}s`;
}

function appendParticles(count, className, content = "") {
    if (!layer) return;

    for (let i = 0; i < count; i++) {
        const particle = createElement(className, content);

        setRandomPosition(particle);
        setRandomDelay(particle);
        setRandomDuration(particle);

        layer.appendChild(particle);
    }
}
/* =========================================================
   NARNIA — CRISTAL DE HIELO
   ========================================================= */

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


/* =========================================================
   NARNIA — MARIPOSA
   ========================================================= */

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


/* =========================================================
   BELLA Y LA BESTIA — ROSA
   ========================================================= */

function createBella() {

    layer.innerHTML = `
        <div class="se-effect se-bella">

            <div class="se-rose-container">

                <div class="se-rose-glow"></div>

                <div class="se-rose">
                    🌹
                </div>

                <span class="se-rose-petal petal1">❀</span>
                <span class="se-rose-petal petal2">✿</span>
                <span class="se-rose-petal petal3">❀</span>
                <span class="se-rose-petal petal4">✿</span>
                <span class="se-rose-petal petal5">❀</span>

            </div>

        </div>
    `;

    removeEffectAfter(3600);
}


/* =========================================================
   BRIDGERTON — CARTA ELEGANTE
   ========================================================= */

function createBridgerton() {

    layer.innerHTML = `
        <div class="se-effect se-bridgerton">

            <div class="se-letter-scene">

                <div class="se-letter-glow"></div>

                <div class="se-letter">
                    <div class="se-letter-seal">
                        ✦
                    </div>

                    <div class="se-letter-paper">
                        ♡
                    </div>
                </div>

                <span class="se-bridgerton-spark spark1">
                    ✦
                </span>

                <span class="se-bridgerton-spark spark2">
                    ✧
                </span>

                <span class="se-bridgerton-spark spark3">
                    ✦
                </span>

                <span class="se-bridgerton-spark spark4">
                    ✧
                </span>

            </div>

        </div>
    `;

    removeEffectAfter(3600);
}


/* =========================================================
   DISNEY — CORONA / CUENTO
   ========================================================= */

function createPrincess() {

    layer.innerHTML = `
        <div class="se-effect se-princess">

            <div class="se-crown-container">

                <div class="se-crown-glow"></div>

                <div class="se-crown">
                    👑
                </div>

                <span class="se-crown-star star1">✦</span>
                <span class="se-crown-star star2">✧</span>
                <span class="se-crown-star star3">✦</span>
                <span class="se-crown-star star4">✧</span>

            </div>

        </div>
    `;

    removeEffectAfter(3500);
}


/* =========================================================
   HARRY POTTER — MAGIA
   ========================================================= */

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
