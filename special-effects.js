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
            background: radial-gradient(circle, rgba(220,245,255,.55), rgba(120,200,255,.16) 42%, transparent 72%);
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
            animation: seWardrobeEntrance .9s cubic-bezier(.2,.8,.2,1) forwards;
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
                seNarniaLight 2.7s cubic-bezier(.2,.8,.2,1) .35s forwards;
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
                seDoorLeft 1.35s cubic-bezier(.15,.85,.15,1) .45s forwards;
        }

        .se-door-left::after {
            right: 8px;
        }

        .se-door-right {
            right: 2px;
            transform-origin: right center;
            z-index: 3;

            animation:
                seDoorRight 1.35s cubic-bezier(.15,.85,.15,1) .45s forwards;
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
                seSnow 1.8s ease-in-out infinite;
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
           BELLA Y LA BESTIA — ROSA
           ===================================================== */

        .se-bella {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;

            animation:
                seBellaFade 2.7s ease forwards;
        }

        .se-rose-container {
            position: relative;
            width: 165px;
            height: 190px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(14px);
            animation: seRoseEntrance 1.15s cubic-bezier(.2,.8,.2,1) forwards;
        }

        .se-rose-container::before {
            content: "";
            position: absolute;
            width: 110px;
            height: 150px;
            bottom: 3px;
            border-radius: 50%;
            background: radial-gradient(ellipse, rgba(255,245,190,.28), transparent 68%);
            filter: blur(7px);
            opacity: 0;
            animation: seRoseAura 2.8s ease .35s forwards;
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
                seRoseGlow 1.5s ease-in-out infinite alternate;
        }

        .se-rose {
            position: relative;
            z-index: 2;

            font-size: 82px;

            filter:
                drop-shadow(0 0 7px rgba(255,70,100,.7))
                drop-shadow(0 10px 10px rgba(0,0,0,.25));

            animation:
                seRoseBloom 1.05s cubic-bezier(.2,.8,.2,1) .15s both,
                seRoseFloat 2.2s ease-in-out 1.2s infinite;
        }

        .se-rose-petal {
            position: absolute;
            font-size: 17px;
            opacity: 0;
            animation:
                seRoseSpark 1.9s ease-in-out infinite;
        }

        .se-rose-container::after {
            content: "✦  ✧  ✦";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(.4);
            white-space: nowrap;
            font-size: 18px;
            letter-spacing: 18px;
            color: rgba(255,245,190,.9);
            text-shadow: 0 0 10px rgba(255,210,90,.9);
            opacity: 0;
            animation: seRoseRing 2.2s ease .65s forwards;
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

            animation:
                seLetterFade 2.8s ease forwards;
        }

        .se-letter-scene {
            position: relative;

            width: 190px;
            height: 170px;

            perspective: 800px;
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
                seLetterGlow 1.5s ease-in-out infinite alternate;
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

            border: 2px solid rgba(95,65,35,.5);

            box-shadow:
                0 13px 25px rgba(0,0,0,.3);

            animation:
                seEnvelopeAppear .75s cubic-bezier(.2,.8,.2,1) forwards;
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
        }

        .se-envelope-flap {
            position: absolute;

            z-index: 3;

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

            clip-path: polygon(
                0 0,
                100% 0,
                50% 100%
            );

            transform-origin: top center;

            animation:
                seEnvelopeOpen 1.15s cubic-bezier(.2,.8,.2,1) .65s forwards;
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

            border: 1px solid rgba(100,70,35,.35);

            box-shadow:
                0 5px 12px rgba(0,0,0,.18);

            transform:
                translateY(45px)
                scale(.9);

            opacity: 0;

            animation:
                seLetterRise 1s cubic-bezier(.2,.8,.2,1) 1s forwards;
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
                seWaxAppear .7s ease 1.35s both;
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
                seCrownFade 2.6s ease forwards;
        }

        .se-crown-container {
            position: relative;

            width: 160px;
            height: 145px;

            display: flex;
            justify-content: center;
            align-items: center;
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
                seCrownGlow 1.4s ease-in-out infinite alternate;
        }

        .se-crown {
            position: relative;
            z-index: 2;

            font-size: 78px;

            filter:
                drop-shadow(0 0 6px rgba(255,230,120,.9))
                drop-shadow(0 10px 10px rgba(0,0,0,.25));

            animation:
                seCrownFloat 1.7s ease-in-out infinite;
        }

        .se-crown-spark {
            position: absolute;

            font-size: 18px;

            opacity: 0;

            animation:
                seCrownSpark 1.6s ease-in-out infinite;
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

            left: -190px;
            top: 32%;

            width: 180px;
            height: 85px;

            display: flex;
            align-items: center;

            transform: rotate(-5deg);

            animation:
                seHarryFlight 2.8s cubic-bezier(.2,.7,.2,1) forwards;
        }

        .se-hp-wizard {
            position: relative;
            z-index: 3;

            font-size: 48px;

            transform: rotate(-8deg);

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

            left: -35px;
            top: 47px;

            width: 100px;
            height: 4px;

            border-radius: 50%;

            background: rgba(255,255,255,.72);

            filter: blur(2px);

            opacity: .7;

            animation:
                seHpTrail 1s ease-in-out infinite alternate;
        }

        .se-hp-star {
            position: absolute;

            font-size: 15px;

            animation:
                seHpStar 1.4s ease-in-out infinite;
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
                seMapFade 2.7s ease forwards;
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

            border: 2px solid rgba(85,60,30,.65);

            box-shadow:
                0 12px 25px rgba(0,0,0,.3);

            transform-origin: top center;

            animation:
                seMapOpen 1s cubic-bezier(.2,.8,.2,1) forwards;

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
                sePinPulse 1.2s ease-in-out infinite;
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

            border: 3px solid #4d3519;

            box-shadow:
                0 7px 16px rgba(0,0,0,.4),
                0 0 15px rgba(255,216,104,.45);

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 38px;

            z-index: 4;

            animation:
                seCompassAppear .6s ease .5s both,
                seCompassSpin 2s ease-in-out .8s;
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
                seObxSpark 1.7s ease-in-out infinite;
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
           OBJETOS 100/10 E INFINITO — ZONAS LIBRES
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
            transform: scale(.72) rotate(-8deg) !important;
        }

        .se-final-map {
            position: absolute !important;
            right: 10px !important;
            left: auto !important;
            top: 10px !important;
            bottom: auto !important;
            transform: scale(.62) rotate(5deg) !important;
            transform-origin: top right !important;
        }

        .se-final-wand {
            position: absolute !important;
            right: 12px !important;
            left: auto !important;
            bottom: 70px !important;
            top: auto !important;
            transform: scale(.72) rotate(-18deg) !important;
            transform-origin: bottom right !important;
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

        @media (max-width: 600px) {
            .se-final-compass {
                left: 5px !important;
                top: 6px !important;
                transform: scale(.58) rotate(-8deg) !important;
            }

            .se-final-map {
                right: 4px !important;
                top: 6px !important;
                transform: scale(.48) rotate(5deg) !important;
            }

            .se-final-wand {
                right: 6px !important;
                bottom: 62px !important;
                transform: scale(.58) rotate(-18deg) !important;
            }

            .se-infinity-object {
                max-width: 82px !important;
                max-height: 82px !important;
            }
        }

        /* =====================================================
           ANIMACIONES
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

        @keyframes seWardrobeEntrance {
            0% {
                opacity: 0;
                transform: translateY(22px) scale(.78);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(.96);
            }
        }

        @keyframes seNarniaAura {
            0% {
                opacity: 0;
                transform: translateX(-50%) scale(.35);
            }
            35% {
                opacity: .9;
                transform: translateX(-50%) scale(1.05);
            }
            100% {
                opacity: .18;
                transform: translateX(-50%) scale(1.25);
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


        @keyframes seRoseEntrance {
            0% {
                opacity: 0;
                transform: translateY(45px) scale(.55);
            }
            65% {
                opacity: 1;
                transform: translateY(-4px) scale(1.04);
            }
            100% {
                opacity: 1;
                transform: translateY(14px) scale(1);
            }
        }

        @keyframes seRoseBloom {
            0% {
                transform: scale(.35) rotate(-14deg);
                opacity: 0;
            }
            55% {
                transform: scale(1.14) rotate(4deg);
                opacity: 1;
            }
            100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
            }
        }

        @keyframes seRoseFloat {
            0%, 100% {
                transform: translateY(3px) rotate(-2deg);
            }
            50% {
                transform: translateY(-10px) rotate(2deg);
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
                transform: translate(-50%, -50%) scale(.4) rotate(-20deg);
            }
            35% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.5) rotate(20deg);
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
           MÓVIL
           ===================================================== */

        @media (max-width: 600px) {

            .se-wardrobe-area {
                transform: scale(.82);
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
           NARNIA
           ===================================================== */

        function createNarnia() {

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
           OUTER BANKS
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
           DIAPOSITIVAS FINALES — OBJETOS SIN TAPAR EL TEXTO
           ===================================================== */

        /*
           Estos estilos se aplican a los objetos originales que ya
           existen en las diapositivas 100/10 e Infinito.
           Se intentan varios selectores habituales para que el
           movimiento funcione aunque el objeto use una clase distinta.
        */
        function protectFinalSlideObjects(slide, index) {
            if (!slide || (index !== 10 && index !== 11)) return;

            const selectors = [
                ".compass", ".compass-object", ".compass-decoration",
                ".map", ".map-object", ".map-decoration",
                ".wand", ".wand-object", ".wand-decoration",
                ".magic-wand", ".magic-wand-object",
                ".wand-effect", ".compass-effect", ".map-effect",
                "[class*='compass']", "[class*='map']", "[class*='wand']",
                "[class*='brujula']", "[class*='brújula']",
                "[class*='varita']"
            ];

            const objects = new Set();
            selectors.forEach(function (selector) {
                try {
                    slide.querySelectorAll(selector).forEach(function (el) {
                        if (!el.classList.contains("slide") &&
                            !el.closest("#special-effects-layer")) {
                            objects.add(el);
                        }
                    });
                } catch (_) {}
            });

            objects.forEach(function (el) {
                el.classList.add("se-final-safe-object");

                if (index === 10) {
                    if (
                        el.matches("[class*='compass'], [class*='brujula'], [class*='brújula'], .compass, .compass-object, .compass-decoration"
                    )) {
                        el.classList.add("se-final-compass");
                    } else if (
                        el.matches("[class*='map'], .map, .map-object, .map-decoration"
                    )) {
                        el.classList.add("se-final-map");
                    } else if (
                        el.matches("[class*='wand'], [class*='varita'], .wand, .wand-object, .wand-decoration, .magic-wand, .magic-wand-object"
                    )) {
                        el.classList.add("se-final-wand");
                    }
                } else {
                    el.classList.add("se-infinity-object");
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

            const index = slides.indexOf(slide);

            if (index === -1) return;


            /*
                0  = Portada

                1  = 10/10 Narnia
                2  = 20/10 Outer Banks
                3  = 30/10 Bella y la Bestia
                4  = 40/10 Bridgerton
                5  = 50/10 Princesa por Sorpresa
                6  = 60/10 Narnia
                7  = 70/10 Harry Potter
                8  = 80/10 Narnia
                9  = 90/10 Outer Banks

                10 = 100/10 Final
                11 = Infinito
            */


            // NARNIA
            if (
                index === 1 ||
                index === 6 ||
                index === 8
            ) {
                createNarnia();
                return;
            }


            // OUTER BANKS
            if (
                index === 2 ||
                index === 9
            ) {
                createOuterBanks();
                return;
            }


            // BELLA Y LA BESTIA
            if (index === 3) {
                createBella();
                return;
            }


            // BRIDGERTON
            if (index === 4) {
                createBridgerton();
                return;
            }


            // PRINCESA POR SORPRESA
            if (index === 5) {
                createPrincess();
                return;
            }


            // HARRY POTTER
            if (index === 7) {
                createHarry();
                return;
            }


            // CUALQUIER OTRA DIAPOSITIVA
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
                document.querySelector(".slide.active");

            if (!activeSlide) return;


            /*
             * Solo se ejecuta cuando realmente hemos
             * entrado en una nueva diapositiva.
             *
             * Esto hace que funcione tanto:
             *
             * → avanzando
             * ← retrocediendo
             *
             * y también si volvemos a una diapositiva
             * que ya habíamos visitado.
             */

            if (activeSlide !== lastActiveSlide) {

                lastActiveSlide = activeSlide;

                const slides =
                    Array.from(document.querySelectorAll(".slide"));
                const activeIndex = slides.indexOf(activeSlide);

                triggerForSlide(activeSlide);
                protectFinalSlideObjects(activeSlide, activeIndex);

                // Algunos objetos de las diapositivas finales pueden ser
                // creados por el script principal unos instantes después.
                setTimeout(function () {
                    protectFinalSlideObjects(activeSlide, activeIndex);
                }, 80);
                setTimeout(function () {
                    protectFinalSlideObjects(activeSlide, activeIndex);
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
            new MutationObserver(function (mutations) {

                for (const mutation of mutations) {

                    if (
                        mutation.type === "attributes" &&
                        mutation.attributeName === "class"
                    ) {

                        scheduleCheck();

                        break;
                    }
                }
            });


        slides.forEach(function (slide) {

            observer.observe(slide, {

                attributes: true,

                attributeFilter: ["class"]

            });

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
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initSpecialEffects
        );

    } else {

        initSpecialEffects();

    }

})();
