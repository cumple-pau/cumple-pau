/* =========================================================
   SPECIAL EFFECTS
   Animaciones ambientales de cada temática.
   Sin objetos protagonistas añadidos.
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

        /* =====================================================
           CAPA GENERAL
           ===================================================== */

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
           NARNIA — EFECTO MÁGICO
           Sin armario
           ===================================================== */

        .se-narnia {
            animation: seNarniaFade 3.2s ease forwards;
        }

        .se-narnia::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 14vh;
            width: 300px;
            height: 300px;
            transform:
                translateX(-50%)
                scale(.35);

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(220,245,255,.6),
                    rgba(120,200,255,.18) 42%,
                    transparent 72%
                );

            filter: blur(12px);
            opacity: 0;

            animation:
                seNarniaAura
                3s
                ease
                .15s
                forwards;
        }

        .se-narnia::after {
            content: "✦   ✧   ✦";
            position: absolute;
            left: 50%;
            top: 31%;
            transform:
                translate(-50%, -50%)
                scale(.5);

            white-space: nowrap;

            font-size: 18px;
            letter-spacing: 25px;

            color: rgba(235,250,255,.85);

            text-shadow:
                0 0 10px rgba(180,225,255,.9),
                0 0 25px rgba(120,200,255,.5);

            opacity: 0;

            animation:
                seNarniaSparkle
                2.4s
                ease
                .4s
                forwards;
        }

        .se-narnia-snow {
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

        .se-narnia-snow:nth-child(1) {
            left: 8%;
            animation-delay: .1s;
        }

        .se-narnia-snow:nth-child(2) {
            left: 22%;
            animation-delay: .6s;
        }

        .se-narnia-snow:nth-child(3) {
            left: 38%;
            animation-delay: .25s;
        }

        .se-narnia-snow:nth-child(4) {
            left: 56%;
            animation-delay: .9s;
        }

        .se-narnia-snow:nth-child(5) {
            left: 74%;
            animation-delay: .45s;
        }

        .se-narnia-snow:nth-child(6) {
            left: 90%;
            animation-delay: 1s;
        }


        /* =====================================================
           NARNIA — FAROLA
           Conserva luz y nieve.
           Sin farola.
           ===================================================== */

        .se-narnia-lamp {
            animation: seLampFade 3s ease forwards;
        }

        .se-lamp-glow {
            position: absolute;
            left: 50%;
            top: 17%;
            width: 180px;
            height: 220px;
            margin-left: -90px;

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,245,190,.95) 0%,
                    rgba(255,224,125,.55) 25%,
                    rgba(180,210,255,.2) 55%,
                    transparent 75%
                );

            filter: blur(12px);
            opacity: 0;

            animation:
                seLampGlow
                2.4s
                ease-in-out
                .55s
                forwards;
        }

        .se-lamp-glow::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 45%;
            width: 65px;
            height: 65px;
            margin-left: -32px;
            margin-top: -32px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,255,235,.95),
                    rgba(255,215,100,.45),
                    transparent 70%
                );

            box-shadow:
                0 0 25px rgba(255,220,125,.8);

            animation:
                seLampFlicker
                1.25s
                ease-in-out
                infinite
                alternate;
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

        .se-lamp-snow:nth-child(2) {
            left: 12%;
            animation-delay: .1s;
        }

        .se-lamp-snow:nth-child(3) {
            left: 27%;
            animation-delay: .8s;
        }

        .se-lamp-snow:nth-child(4) {
            left: 43%;
            animation-delay: .35s;
        }

        .se-lamp-snow:nth-child(5) {
            left: 62%;
            animation-delay: 1.1s;
        }

        .se-lamp-snow:nth-child(6) {
            left: 78%;
            animation-delay: .5s;
        }

        .se-lamp-snow:nth-child(7) {
            left: 91%;
            animation-delay: 1.4s;
        }


        /* =====================================================
           NARNIA — ASLAN
           Conserva aura, anillo y estrellas.
           Sin Aslan.
           ===================================================== */

        .se-narnia-aslan {
            animation: seAslanFade 3.4s ease forwards;
        }

        .se-aslan-aura {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 260px;
            height: 260px;
            margin-left: -130px;
            margin-top: -130px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,240,165,.75) 0%,
                    rgba(255,211,91,.35) 30%,
                    rgba(255,184,65,.12) 52%,
                    transparent 73%
                );

            filter: blur(10px);
            opacity: 0;

            animation:
                seAslanAura
                2.8s
                ease-in-out
                .35s
                forwards;
        }

        .se-aslan-light {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 210px;
            height: 210px;
            margin-left: -105px;
            margin-top: -105px;

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

        .se-aslan-star:nth-child(3) {
            left: 18%;
            top: 27%;
            animation-delay: .2s;
        }

        .se-aslan-star:nth-child(4) {
            right: 20%;
            top: 36%;
            animation-delay: .7s;
        }

        .se-aslan-star:nth-child(5) {
            left: 28%;
            bottom: 25%;
            animation-delay: 1.1s;
        }

        .se-aslan-star:nth-child(6) {
            right: 28%;
            bottom: 30%;
            animation-delay: 1.5s;
        }


        /* =====================================================
           BELLA Y LA BESTIA
           Conserva brillo, pétalos y aura.
           Sin rosa.
           ===================================================== */

        .se-bella {
            animation: seBellaFade 3s ease forwards;
        }

        .se-rose-container {
            position: absolute;
            left: 50%;
            top: 45%;
            width: 190px;
            height: 190px;
            margin-left: -95px;
            margin-top: -95px;

            animation:
                seRoseFloatContainer
                2.2s
                ease-in-out
                infinite;
        }

        .se-rose-container::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 130px;
            height: 160px;
            margin-left: -65px;
            margin-top: -80px;

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,245,190,.3),
                    transparent 68%
                );

            filter: blur(8px);
            opacity: 0;

            animation:
                seRoseAura
                2.8s
                ease
                .35s
                forwards;
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

        .se-rose-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 155px;
            height: 155px;
            margin-left: -77px;
            margin-top: -77px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,70,100,.42),
                    rgba(255,100,130,.18) 38%,
                    transparent 70%
                );

            filter: blur(9px);

            animation:
                seRoseGlow
                1.5s
                ease-in-out
                infinite
                alternate;
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

        .se-rose-petal:nth-child(3) {
            left: 15px;
            top: 25px;
        }

        .se-rose-petal:nth-child(4) {
            right: 15px;
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
           BRIDGERTON
           Conserva brillo y efecto de carta.
           SIN CARTA.
           ===================================================== */

        .se-bridgerton {
            animation: seLetterFade 3.1s ease forwards;
        }

        .se-letter-glow {
            position: absolute;
            left: 50%;
            top: 38%;
            width: 220px;
            height: 150px;
            margin-left: -110px;
            margin-top: -75px;

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,220,135,.65),
                    rgba(255,220,135,.18) 45%,
                    transparent 72%
                );

            filter: blur(10px);

            animation:
                seLetterGlow
                1.5s
                ease-in-out
                infinite
                alternate;
        }

        .se-letter-glow::after {
            content: "✦   ✧   ✦";
            position: absolute;
            left: 50%;
            top: 50%;

            transform:
                translate(-50%, -50%)
                scale(.6);

            white-space: nowrap;

            font-family: Georgia, serif;
            font-size: 20px;
            letter-spacing: 14px;

            color: rgba(255,240,200,.8);

            text-shadow:
                0 0 10px rgba(255,210,120,.8);
        }


        /* =====================================================
           PRINCESA POR SORPRESA
           Conserva brillo y destellos.
           SIN CORONA.
           ===================================================== */

        .se-princess {
            animation:
                seCrownFade
                3s
                ease
                forwards;
        }

        .se-crown-container {
            position: absolute;
            left: 50%;
            top: 37%;
            width: 190px;
            height: 150px;
            margin-left: -95px;
            margin-top: -75px;

            animation:
                seCrownAppear
                1.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-crown-glow {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 150px;
            height: 150px;
            margin-left: -75px;
            margin-top: -75px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,225,95,.72),
                    rgba(255,205,50,.22) 40%,
                    transparent 70%
                );

            filter: blur(8px);

            animation:
                seCrownGlow
                1.4s
                ease-in-out
                infinite
                alternate;
        }

        .se-crown-container::after {
            content: "✦   ✧   ✦";
            position: absolute;
            left: 50%;
            top: 50%;

            transform:
                translate(-50%, -50%)
                scale(.5);

            white-space: nowrap;

            font-size: 20px;
            letter-spacing: 18px;

            color: rgba(255,235,130,.95);

            text-shadow:
                0 0 12px rgba(255,215,80,.9);

            opacity: 0;

            animation:
                seCrownSpark
                1.6s
                ease-in-out
                infinite;
        }


        /* =====================================================
           HARRY POTTER
           Conserva estrellas y rastro mágico.
           SIN MAGO NI ESCOBA.
           ===================================================== */

        .se-hp {
            overflow: hidden;
        }

        .se-hp-flight {
            position: absolute;
            left: 18%;
            top: 35%;
            width: 190px;
            height: 95px;

            opacity: 0;

            animation:
                seHpMagicPass
                3s
                cubic-bezier(.2,.7,.2,1)
                forwards;
        }

        .se-hp-trail {
            position: absolute;
            left: 0;
            top: 50%;

            width: 220px;
            height: 5px;

            border-radius: 50%;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,255,255,.2),
                    rgba(210,220,255,.8),
                    transparent
                );

            filter: blur(3px);

            opacity: 0;

            animation:
                seHpTrail
                1s
                ease-in-out
                .4s
                infinite
                alternate;
        }

        .se-hp-flight::after {
            content: "✦  ✧  ✦";
            position: absolute;
            left: 20px;
            top: 35px;

            font-size: 16px;
            letter-spacing: 20px;

            color: rgba(230,235,255,.9);

            text-shadow:
                0 0 9px rgba(180,200,255,.9);

            opacity: 0;

            animation:
                seHpStar
                1.4s
                ease-in-out
                infinite;
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

        .se-hp-star:nth-child(2) {
            left: 10%;
            top: 25%;
        }

        .se-hp-star:nth-child(3) {
            left: 28%;
            top: 65%;
            animation-delay: .3s;
        }

        .se-hp-star:nth-child(4) {
            left: 47%;
            top: 18%;
            animation-delay: .6s;
        }


        /* =====================================================
           OUTER BANKS — PRIMERA ANIMACIÓN
           Brillo tipo mapa / aventura.
           SIN MAPA NI BRÚJULA.
           ===================================================== */

        .se-obx {
            animation:
                seMapFade
                2.7s
                ease
                forwards;
        }

        .se-map-wrapper {
            position: absolute;
            left: 50%;
            top: 42%;
            width: 250px;
            height: 170px;

            margin-left: -125px;
            margin-top: -85px;

            transform: rotate(-2deg);
        }

        .se-map-wrapper::before {
            content: "";

            position: absolute;
            left: 50%;
            top: 50%;

            width: 210px;
            height: 130px;

            margin-left: -105px;
            margin-top: -65px;

            border-radius: 50%;

            background:
                radial-gradient(
                    ellipse,
                    rgba(235,210,150,.3),
                    rgba(190,170,120,.1) 50%,
                    transparent 72%
                );

            filter: blur(8px);

            opacity: 0;

            animation:
                seMapGlow
                2.4s
                ease
                .2s
                forwards;
        }

        .se-map-wrapper::after {
            content: "✦   •   ✧   •   ✦";

            position: absolute;
            left: 50%;
            top: 50%;

            transform:
                translate(-50%, -50%)
                scale(.5);

            white-space: nowrap;

            font-family: Georgia, serif;
            font-size: 16px;
            letter-spacing: 8px;

            color:
                rgba(255,235,175,.85);

            text-shadow:
                0 0 10px rgba(255,215,110,.8);

            opacity: 0;

            animation:
                seObxAdventureSpark
                1.7s
                ease-in-out
                infinite;
        }


        /* =====================================================
           OUTER BANKS — SEGUNDA ANIMACIÓN 90/10
           NUEVA:
           ATARDECER + MAR + REFLEJOS
           SIN BARCO
           ===================================================== */

        .se-obx-sunset {
            animation:
                seSunsetFade
                3.4s
                ease
                forwards;
        }

        .se-sunset-scene {
            position: absolute;

            left: 50%;
            top: 50%;

            width: min(620px, 90vw);
            height: min(360px, 55vh);

            transform:
                translate(-50%, -50%)
                scale(.82);

            overflow: hidden;

            border-radius: 18px;

            opacity: 0;

            background:
                linear-gradient(
                    to bottom,
                    #e99b63 0%,
                    #f5bd7b 27%,
                    #efc58c 45%,
                    #84939a 47%,
                    #496471 60%,
                    #203d4b 100%
                );

            box-shadow:
                0 15px 30px rgba(0,0,0,.25);

            animation:
                seSunsetEntrance
                1.1s
                cubic-bezier(.2,.8,.2,1)
                forwards;
        }

        .se-sunset-scene::before {
            content: "";

            position: absolute;

            left: 50%;
            top: 18%;

            width: 190px;
            height: 190px;

            margin-left: -95px;
            margin-top: -95px;

            border-radius: 50%;

            background:
                radial-gradient(
                    circle,
                    rgba(255,246,190,.9) 0%,
                    rgba(255,210,120,.55) 27%,
                    rgba(255,160,100,.18) 53%,
                    transparent 73%
                );

            filter: blur(9px);

            opacity: 0;

            animation:
                seNewSunGlow
                2.8s
                ease
                .15s
                forwards;
        }

        .se-sunset-scene::after {
            content: "";

            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;

            height: 48%;

            background:
                repeating-linear-gradient(
                    -5deg,
                    rgba(255,225,165,.12) 0 3px,
                    transparent 3px 13px
                );

            opacity: .65;

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
            top: 25%;

            width: 82px;
            height: 82px;

            margin-left: -41px;

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
                0 0 40px rgba(255,210,100,.75);

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

            left: -5%;
            right: -5%;
            top: 47%;

            height: 3px;

            background:
                linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,235,175,.45),
                    rgba(255,245,205,.9),
                    rgba(255,235,175,.45),
                    transparent
                );

            box-shadow:
                0 0 15px rgba(255,215,120,.5);

            z-index: 2;

            animation:
                seSunsetHorizon
                2.4s
                ease
                .4s
                forwards;
        }

        .se-sunset-sea {
            position: absolute;

            left: 0;
            right: 0;
            bottom: 0;

            height: 54%;

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

        .se-sunset-reflection {
            position: absolute;

            left: 50%;
            top: 52%;

            width: 190px;
            height: 115px;

            margin-left: -95px;

            background:
                radial-gradient(
                    ellipse,
                    rgba(255,220,150,.42),
                    rgba(255,200,120,.14) 42%,
                    transparent 72%
                );

            filter: blur(8px);

            opacity: 0;

            z-index: 3;

            animation:
                seSunsetReflection
                3s
                ease-in-out
                .65s
                forwards,
                seSunsetReflectionMove
                2.5s
                ease-in-out
                2.5s
                infinite
                alternate;
        }

        .se-sunset-light {
            position: absolute;

            width: 5px;
            height: 5px;

            border-radius: 50%;

            background:
                rgba(255,240,190,.95);

            box-shadow:
                0 0 10px rgba(255,220,150,.8);

            opacity: 0;

            z-index: 5;

            animation:
                seSunsetLight
                2.4s
                ease-in-out
                infinite;
        }

        .se-sunset-light:nth-child(6) {
            left: 15%;
            top: 28%;
            animation-delay: .2s;
        }

        .se-sunset-light:nth-child(7) {
            left: 28%;
            top: 18%;
            animation-delay: .8s;
        }

        .se-sunset-light:nth-child(8) {
            right: 27%;
            top: 25%;
            animation-delay: 1.2s;
        }

        .se-sunset-light:nth-child(9) {
            right: 15%;
            top: 34%;
            animation-delay: 1.7s;
        }


        /* =====================================================
           100/10 + INFINITO
           NUNCA CREAR EFECTOS
           ===================================================== */

        .slide.final-no-effects #special-effects-layer,
        .slide.infinity-no-effects #special-effects-layer {
            display: none !important;
        }

        #special-effects-layer.final-clean,
        #special-effects-layer.infinity-clean {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }


        /* =====================================================
           ANIMACIONES NARNIA
           ===================================================== */

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

        @keyframes seNarniaSparkle {

            0% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(.4)
                    rotate(-20deg);
            }

            45% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.2)
                    rotate(10deg);
            }

            100% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(1.5)
                    rotate(25deg);
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
           ANIMACIONES FAROLA
           ===================================================== */

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
           ANIMACIONES ASLAN
           ===================================================== */

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
           ANIMACIONES BELLA
           ===================================================== */

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
           ANIMACIONES BRIDGERTON
           ===================================================== */

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
           ANIMACIONES PRINCESA
           ===================================================== */

        @keyframes seCrownAppear {

            0% {
                opacity: 0;
                transform:
                    translateY(-25px)
                    scale(.5);
            }

            35% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1.1);
            }

            65% {
                transform:
                    translateY(0)
                    scale(.98);
            }

            100% {
                opacity: 1;
                transform:
                    translateY(0)
                    scale(1);
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

            82% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }


        /* =====================================================
           ANIMACIONES HARRY POTTER
           ===================================================== */

        @keyframes seHpMagicPass {

            0% {
                opacity: 0;
                transform:
                    translateX(-80px)
                    scale(.7);
            }

            20% {
                opacity: 1;
            }

            55% {
                opacity: .9;
                transform:
                    translateX(80px)
                    scale(1);
            }

            100% {
                opacity: 0;
                transform:
                    translateX(180px)
                    scale(.75);
            }
        }

        @keyframes seHpTrail {

            from {
                opacity: .25;
                transform: scaleX(.7);
            }

            to {
                opacity: .85;
                transform: scaleX(1.25);
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
           ANIMACIONES OUTER BANKS 1
           ===================================================== */

        @keyframes seMapGlow {

            0% {
                opacity: 0;
                transform: scale(.5);
            }

            50% {
                opacity: .8;
                transform: scale(1.05);
            }

            100% {
                opacity: .25;
                transform: scale(1.15);
            }
        }

        @keyframes seObxAdventureSpark {

            0%, 100% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(.5);
            }

            50% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.15);
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
           ANIMACIONES OUTER BANKS 2
           ===================================================== */

        @keyframes seSunsetEntrance {

            0% {
                opacity: 0;
                transform:
                    translate(-50%, -50%)
                    scale(.65);
            }

            55% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1.03);
            }

            100% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(1);
            }
        }

        @keyframes seNewSunGlow {

            0% {
                opacity: 0;
                transform: scale(.45);
            }

            45% {
                opacity: 1;
                transform: scale(1.1);
            }

            75% {
                opacity: .6;
                transform: scale(1.2);
            }

            100% {
                opacity: .35;
                transform: scale(1.3);
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

        @keyframes seSunsetHorizon {

            0% {
                opacity: 0;
                transform: scaleX(.3);
            }

            50% {
                opacity: 1;
                transform: scaleX(1);
            }

            100% {
                opacity: .7;
                transform: scaleX(1.1);
            }
        }

        @keyframes seSunsetWater {

            from {
                transform:
                    translateX(-8px);
            }

            to {
                transform:
                    translateX(8px);
            }
        }

        @keyframes seSunsetReflection {

            0% {
                opacity: 0;
                transform:
                    translateX(0)
                    scaleX(.25);
            }

            45% {
                opacity: .8;
                transform:
                    translateX(0)
                    scaleX(1);
            }

            100% {
                opacity: .3;
                transform:
                    translateX(0)
                    scaleX(1.15);
            }
        }

        @keyframes seSunsetReflectionMove {

            from {
                margin-left: -12px;
            }

            to {
                margin-left: 12px;
            }
        }

        @keyframes seSunsetLight {

            0% {
                opacity: 0;
                transform:
                    scale(.35)
                    translateY(5px);
            }

            40% {
                opacity: .9;
                transform:
                    scale(1.2)
                    translateY(-3px);
            }

            70% {
                opacity: .35;
                transform:
                    scale(.8)
                    translateY(2px);
            }

            100% {
                opacity: 0;
                transform:
                    scale(.4)
                    translateY(6px);
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

            .se-sunset-scene {
                width: 92vw;
                height: 46vh;
            }

            .se-sunset-sun {
                width: 65px;
                height: 65px;
                margin-left: -32.5px;
            }

            .se-map-wrapper {
                transform:
                    scale(.82)
                    rotate(-2deg);
            }

            .se-rose-container {
                transform: scale(.82);
            }

            .se-crown-container {
                transform: scale(.82);
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
           LIMPIAR EFECTOS
           ===================================================== */

        let removeTimer = null;

        function clearEffects() {

            if (removeTimer) {
                clearTimeout(removeTimer);
                removeTimer = null;
            }

            layer.innerHTML = "";

            layer.classList.remove(
                "final-clean",
                "infinity-clean"
            );
        }


        function removeEffectAfter(time) {

            if (removeTimer) {
                clearTimeout(removeTimer);
            }

            removeTimer =
                setTimeout(function () {

                    layer.innerHTML = "";

                    removeTimer = null;

                }, time);
        }


        /* =====================================================
           NARNIA — EFECTO MÁGICO
           ===================================================== */

        function createNarniaWardrobe() {

            layer.innerHTML = `

                <div class="se-effect se-narnia">

                    <span class="se-narnia-snow"></span>
                    <span class="se-narnia-snow"></span>
                    <span class="se-narnia-snow"></span>
                    <span class="se-narnia-snow"></span>
                    <span class="se-narnia-snow"></span>
                    <span class="se-narnia-snow"></span>

                </div>
            `;

            removeEffectAfter(3200);
        }


        /* =====================================================
           NARNIA — LUZ
           ===================================================== */

        function createNarniaLamp() {

            layer.innerHTML = `

                <div class="se-effect se-narnia-lamp">

                    <div class="se-lamp-glow"></div>

                    <span class="se-lamp-snow">✦</span>
                    <span class="se-lamp-snow">✧</span>
                    <span class="se-lamp-snow">✦</span>
                    <span class="se-lamp-snow">✧</span>
                    <span class="se-lamp-snow">✦</span>
                    <span class="se-lamp-snow">✧</span>

                </div>
            `;

            removeEffectAfter(3000);
        }


        /* =====================================================
           NARNIA — AURA
           ===================================================== */

        function createNarniaAslan() {

            layer.innerHTML = `

                <div class="se-effect se-narnia-aslan">

                    <div class="se-aslan-aura"></div>

                    <div class="se-aslan-light"></div>

                    <span class="se-aslan-star">✦</span>
                    <span class="se-aslan-star">✧</span>
                    <span class="se-aslan-star">✦</span>
                    <span class="se-aslan-star">✧</span>

                </div>
            `;

            removeEffectAfter(3400);
        }


        /* =====================================================
           BELLA — EFECTOS DE ROSA
           ===================================================== */

        function createBella() {

            layer.innerHTML = `

                <div class="se-effect se-bella">

                    <div class="se-rose-container">

                        <div class="se-rose-glow"></div>

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
           BRIDGERTON — LUZ
           ===================================================== */

        function createBridgerton() {

            layer.innerHTML = `

                <div class="se-effect se-bridgerton">

                    <div class="se-letter-glow"></div>

                </div>
            `;

            removeEffectAfter(3100);
        }


        /* =====================================================
           PRINCESA — BRILLO
           ===================================================== */

        function createPrincess() {

            layer.innerHTML = `

                <div class="se-effect se-princess">

                    <div class="se-crown-container">

                        <div class="se-crown-glow"></div>

                    </div>

                </div>
            `;

            removeEffectAfter(3000);
        }


        /* =====================================================
           HARRY POTTER — RASTRO MÁGICO
           ===================================================== */

        function createHarry() {

            layer.innerHTML = `

                <div class="se-effect se-hp">

                    <div class="se-hp-flight">

                        <div class="se-hp-trail"></div>

                    </div>

                    <span class="se-hp-star">✦</span>
                    <span class="se-hp-star">✧</span>
                    <span class="se-hp-star">✦</span>

                </div>
            `;

            removeEffectAfter(3100);
        }


        /* =====================================================
           OUTER BANKS — PRIMERA ANIMACIÓN
           ===================================================== */

        function createOuterBanks() {

            layer.innerHTML = `

                <div class="se-effect se-obx">

                    <div class="se-map-wrapper"></div>

                </div>
            `;

            removeEffectAfter(2800);
        }


        /* =====================================================
           OUTER BANKS — SEGUNDA ANIMACIÓN
           NUEVA
           ===================================================== */

        function createOuterBanksSunset() {

            layer.innerHTML = `

                <div class="se-effect se-obx-sunset">

                    <div class="se-sunset-scene">

                        <div class="se-sunset-sun"></div>

                        <div class="se-sunset-horizon"></div>

                        <div class="se-sunset-sea"></div>

                        <div class="se-sunset-reflection"></div>

                        <span class="se-sunset-light"></span>
                        <span class="se-sunset-light"></span>
                        <span class="se-sunset-light"></span>
                        <span class="se-sunset-light"></span>

                    </div>

                </div>
            `;

            removeEffectAfter(3400);
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

            /*
             * Solo protegemos posibles objetos
             * que pudieran haber sido añadidos por
             * otros scripts.
             */

            const selectors = [

                ".compass",
                ".compass-object",
                ".compass-decoration",
                ".compass-effect",

                ".map",
                ".map-object",
                ".map-decoration",
                ".map-effect",

                ".wand",
                ".wand-object",
                ".wand-decoration",
                ".wand-effect",

                ".magic-wand",
                ".magic-wand-object",

                "[class*='compass']",
                "[class*='map']",
                "[class*='wand']",

                "[class*='brujula']",
                "[class*='brújula']",

                "[class*='varita']",

                ".final-object",
                ".final-decoration",
                ".slide-object",
                ".slide-decoration"
            ];

            const objects =
                new Set();

            selectors.forEach(
                function (selector) {

                    try {

                        slide
                            .querySelectorAll(selector)
                            .forEach(function (el) {

                                if (
                                    !el.classList.contains(
                                        "slide"
                                    ) &&
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

                    el.classList.add(
                        "se-infinity-object"
                    );

                    el.style.setProperty(
                        "display",
                        "none",
                        "important"
                    );

                    el.style.setProperty(
                        "visibility",
                        "hidden",
                        "important"
                    );

                    el.style.setProperty(
                        "opacity",
                        "0",
                        "important"
                    );

                    el.style.setProperty(
                        "animation",
                        "none",
                        "important"
                    );

                }
            );
        }


        /* =====================================================
           CORAZÓN DE INFINITO
           ===================================================== */

        function restartInfinityHeart(
            slide
        ) {

            if (!slide) return;

            const heart =
                slide.querySelector(
                    ".final-heart"
                );

            if (!heart) return;

            heart.style.animation =
                "none";

            void heart.offsetWidth;

            heart.style.animation =
                "infinityHeartEntrance 1.4s cubic-bezier(.17,.67,.3,1.4) both, " +
                "infinityHeartBeat 1.35s ease-in-out 1.4s infinite";
        }


        /* =====================================================
           CAMBIO DE DIAPOSITIVA
           ===================================================== */

        function triggerForSlide(
            slide
        ) {

            if (!slide) return;

            const slides =
                Array.from(
                    document.querySelectorAll(
                        ".slide"
                    )
                );

            const index =
                slides.indexOf(slide);


            /* ===============================================
               LIMPIEZA
               =============================================== */

            clearEffects();


            /* ===============================================
               100/10
               =============================================== */

            if (index === 10) {

                slide.classList.add(
                    "final-no-effects"
                );

                slide.classList.remove(
                    "infinity-no-effects"
                );

                layer.classList.add(
                    "final-clean"
                );

                protectFinalSlideObjects(
                    slide,
                    index
                );

                return;
            }


            /* ===============================================
               INFINITO
               =============================================== */

            if (index === 11) {

                slide.classList.add(
                    "infinity-no-effects"
                );

                slide.classList.remove(
                    "final-no-effects"
                );

                layer.classList.add(
                    "infinity-clean"
                );

                protectFinalSlideObjects(
                    slide,
                    index
                );

                restartInfinityHeart(
                    slide
                );

                return;
            }


            /* ===============================================
               RESTO
               =============================================== */

            slide.classList.remove(
                "final-no-effects",
                "infinity-no-effects"
            );


            switch (index) {

                case 1:
                    createNarniaWardrobe();
                    break;

                case 2:
                    createOuterBanks();
                    break;

                case 3:
                    createBella();
                    break;

                case 4:
                    createBridgerton();
                    break;

                case 5:
                    createPrincess();
                    break;

                case 6:
                    createNarniaLamp();
                    break;

                case 7:
                    createHarry();
                    break;

                case 8:
                    createNarniaAslan();
                    break;

                case 9:
                    /*
                     * Segunda animación de Outer Banks.
                     * Nueva versión SIN barco.
                     */
                    createOuterBanksSunset();
                    break;

                default:
                    break;
            }
        }


        /* =====================================================
           DETECTAR DIAPOSITIVA ACTIVA
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


        function checkActiveSlide() {

            const activeSlide =
                document.querySelector(
                    ".slide.active"
                );

            if (!activeSlide) return;


            if (
                activeSlide ===
                lastActiveSlide
            ) {
                return;
            }


            lastActiveSlide =
                activeSlide;


            const allSlides =
                Array.from(
                    document.querySelectorAll(
                        ".slide"
                    )
                );

            const activeIndex =
                allSlides.indexOf(
                    activeSlide
                );


            triggerForSlide(
                activeSlide
            );


            /*
             * Protección adicional para 100/10
             * e infinito.
             */

            if (
                activeIndex === 10 ||
                activeIndex === 11
            ) {

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

                setTimeout(
                    function () {

                        protectFinalSlideObjects(
                            activeSlide,
                            activeIndex
                        );

                    },
                    700
                );
            }
        }


        /* =====================================================
           OBSERVADOR
           ===================================================== */

        const observer =
            new MutationObserver(
                function () {

                    requestAnimationFrame(
                        checkActiveSlide
                    );

                }
            );


        slides.forEach(
            function (slide) {

                observer.observe(
                    slide,
                    {
                        attributes: true,
                        attributeFilter: [
                            "class"
                        ]
                    }
                );

            }
        );


        /* =====================================================
           COMPROBACIÓN INICIAL
           ===================================================== */

        requestAnimationFrame(
            checkActiveSlide
        );


        /*
         * Comprobación de seguridad.
         */

        setInterval(
            checkActiveSlide,
            200
        );


        console.log(
            "✨ Special Effects cargado correctamente — objetos protagonistas eliminados."
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
