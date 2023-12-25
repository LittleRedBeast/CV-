//alert('NOTE: It doesn"t work perfectly ლ(ಥ◡ಥლ) so plz don t judge this cv too harshly, i tried to make it very simple so i don t waste ur time and make it dynamic');

/* ------ VARIABLES ------ */
var SKILLS_BUTTON = document.getElementById('skills');
var INFOS_BUTTON = document.getElementById('infos');
var WHY_ME = document.getElementById('whyMe');
var EXPERIENCES = document.getElementById('experiences');
var LEFT_ARROW = document.getElementById('leftArrow');
var RIGHT_ARROW = document.getElementById('rightArrow');
var CURRENT_BUTTON = SKILLS_BUTTON;
var SKILLS_DESCRIPTION = document.getElementById('skillDiv');
var WHY_ME_DESCRIPTION = document.getElementById('whyMeDiv');
var EXPERIENCES_DESCRIPTION = document.getElementById('experienceDiv');
var INFOS_DESCRIPTION = document.getElementById('infoDiv');
var SKILLS_EXPLAIN = document.getElementById('skillExplain');
var INFO_EXPLAIN = document.getElementById('infoExplain');
var WHY_ME_EXPLAIN = document.getElementById('whyMeExplain');
var EXPERIENCES_EXPLAIN = document.getElementById('experiencesExplain');





/* ----- BUTTONS ----- */
/*var buttonExplain = null;
SKILLS_BUTTON.addEventListener('click', function() {
    if(SKILLS_EXPLAIN != buttonExplain) {
        SKILLS_EXPLAIN.style.transform = 'scale(1)';
    }
    else if(buttonExplain != null) {
        buttonExplain.style.transform = 'scale(0)';
    }
    buttonExplain = SKILLS_EXPLAIN;
});

INFOS_BUTTON.addEventListener('click', function() {
    if(buttonExplain != null) {
        buttonExplain.style.transform = 'scale(0)';
    } else if(INFO_EXPLAIN != buttonExplain) {
        INFO_EXPLAIN.style.transform = 'scale(1)';
    }
    buttonExplain = INFO_EXPLAIN;
});*/
SKILLS_BUTTON.addEventListener('click', function() {
    INFO_EXPLAIN.style.transform = 'scale(0)';
    WHY_ME_EXPLAIN.style.transform = 'scale(0)';
    EXPERIENCES_EXPLAIN.style.transform = 'scale(0)';
    SKILLS_EXPLAIN.style.transform = 'scale(1)';
});

INFOS_BUTTON.addEventListener('click', function() {
    WHY_ME_EXPLAIN.style.transform = 'scale(0)';
    EXPERIENCES_EXPLAIN.style.transform = 'scale(0)';
    SKILLS_EXPLAIN.style.transform = 'scale(0)';
    INFO_EXPLAIN.style.transform = 'scale(1)';
});

WHY_ME.addEventListener('click', function() {
    WHY_ME_EXPLAIN.style.transform = 'scale(1)';
    EXPERIENCES_EXPLAIN.style.transform = 'scale(0)';
    SKILLS_EXPLAIN.style.transform = 'scale(0)';
    INFO_EXPLAIN.style.transform = 'scale(0)';
});

EXPERIENCES.addEventListener('click', function() {
    WHY_ME_EXPLAIN.style.transform = 'scale(0)';
    EXPERIENCES_EXPLAIN.style.transform = 'scale(1)';
    SKILLS_EXPLAIN.style.transform = 'scale(0)';
    INFO_EXPLAIN.style.transform = 'scale(0)';
});





/* ----- LEFT ARROW ONCLICK ----- */
LEFT_ARROW.addEventListener('click', function() {
    if (CURRENT_BUTTON == SKILLS_BUTTON) {
        CURRENT_BUTTON = WHY_ME;

        INFOS_BUTTON.style.left = '-20vw';
        INFOS_BUTTON.style.transform = "scale(0)";

        SKILLS_BUTTON.style.left = '-12vw';
        SKILLS_BUTTON.style.transform = "scale(.6)";

        WHY_ME.style.right = '5.3vw';
        WHY_ME.style.transform = "scale(1)";

        EXPERIENCES.style.left = '20vw';
        EXPERIENCES.style.transform = 'scale(0.6)';
        LEFT_ARROW.style.pointerEvents = 'none';

        if(SKILLS_BUTTON.style.transform == 'scale(0.6)' && WHY_ME.style.transform == 'scale(1)') {
            WHY_ME.style.left = '4vw';
        }

        SKILLS_DESCRIPTION.style.left = '-52vw';
        SKILLS_DESCRIPTION.style.transform = 'scale(0)';

        WHY_ME_DESCRIPTION.style.left = '-12vw';
        WHY_ME_DESCRIPTION.style.transform = 'scale(1)';

        setTimeout(function() {
            INFOS_BUTTON.style.left = '39vw';
            LEFT_ARROW.style.pointerEvents = 'auto';
            SKILLS_DESCRIPTION.style.left = '20vw';
        }, 501); 
        


    }

    else if (CURRENT_BUTTON == WHY_ME) {
        CURRENT_BUTTON = EXPERIENCES;

        SKILLS_BUTTON.style.left = '-18vw';
        SKILLS_BUTTON.style.transform = 'scale(0)';

        WHY_ME.style.right = '26vw';
        WHY_ME.style.transform = 'scale(0.6)';

        EXPERIENCES.style.left = '1.3vw';
        EXPERIENCES.style.transform = 'scale(1)';

        INFOS_BUTTON.style.left = '27vw';
        INFOS_BUTTON.style.transform = "scale(0.6)";

        LEFT_ARROW.style.pointerEvents = 'none';

        

        if(WHY_ME.style.transform == 'scale(0.6)' && EXPERIENCES.style.transform == 'scale(1)') {
            WHY_ME.style.left = '-16vw';
        }

        WHY_ME_DESCRIPTION.style.left = '-52vw';
        WHY_ME_DESCRIPTION.style.transform = 'scale(0)';

        EXPERIENCES_DESCRIPTION.style.left = '-12vw';
        EXPERIENCES_DESCRIPTION.style.transform = 'scale(1)';

        setTimeout(function() {
            SKILLS_BUTTON.style.left = '39vw';
            LEFT_ARROW.style.pointerEvents = 'auto';
            WHY_ME_DESCRIPTION.style.left = '20vw';
        }, 501);

    }

    else if (CURRENT_BUTTON == EXPERIENCES) {
        CURRENT_BUTTON = INFOS_BUTTON;

        INFOS_BUTTON.style.left = '6.5vw';
        INFOS_BUTTON.style.transform = "scale(1)";

        EXPERIENCES.style.left = '-17vw';
        EXPERIENCES.style.transform = 'scale(0.6)';
        
        WHY_ME.style.right = '26vw';
        WHY_ME.style.transform = 'scale(0)';

        SKILLS_BUTTON.style.left = '22.5vw';
        SKILLS_BUTTON.style.transform = 'scale(0.6)';
        LEFT_ARROW.style.pointerEvents = 'none';

        EXPERIENCES_DESCRIPTION.style.left = '-52vw';
        EXPERIENCES_DESCRIPTION.style.transform = 'scale(0)';

        INFOS_DESCRIPTION.style.left = '-12vw';
        INFOS_DESCRIPTION.style.transform = 'scale(1)';

        setTimeout(function() {
            WHY_ME.style.right = '-25vw';
            LEFT_ARROW.style.pointerEvents = 'auto';
            EXPERIENCES_DESCRIPTION.style.left = '20vw';
        }, 501); 
    }

    else if (CURRENT_BUTTON == INFOS_BUTTON) {
        CURRENT_BUTTON = SKILLS_BUTTON;

        INFOS_BUTTON.style.left = '-10vw';
        INFOS_BUTTON.style.transform = "scale(0.6)";

        EXPERIENCES.style.left = '-22vw';
        EXPERIENCES.style.transform = 'scale(0)';
        
        WHY_ME.style.right = '-13vw';
        WHY_ME.style.transform = 'scale(0.6)';

        SKILLS_BUTTON.style.left = '6.5vw';
        SKILLS_BUTTON.style.transform = 'scale(1)';
        LEFT_ARROW.style.pointerEvents = 'none';

       
        if(INFOS_BUTTON.style.transform == 'scale(0.6)' && SKILLS_BUTTON.style.transform == 'scale(1)') {
            WHY_ME.style.transform = 'scale(0.6)';
            WHY_ME.style.left = '23vw';
        }

        INFOS_DESCRIPTION.style.left = '-52vw';
        INFOS_DESCRIPTION.style.transform = 'scale(0)';

        SKILLS_DESCRIPTION.style.left = '-12vw';
        SKILLS_DESCRIPTION.style.transform = 'scale(1)';

        setTimeout(function() {
            EXPERIENCES.style.left = '25vw';
            LEFT_ARROW.style.pointerEvents = 'auto';
            INFOS_DESCRIPTION.style.left = '20vw';
        }, 501); 
    }
});

   
/* ----- RIGHT ARROW ONCLICK ----- */
RIGHT_ARROW.addEventListener('click', function() {
    if (CURRENT_BUTTON == SKILLS_BUTTON) {
        CURRENT_BUTTON = INFOS_BUTTON;

        EXPERIENCES.style.transition = 'none';
        EXPERIENCES.style.left = '-20vw';

        INFOS_BUTTON.style.left = '7vw';
        INFOS_BUTTON.style.transform = "scale(1)";

        SKILLS_BUTTON.style.left = '23vw';
        SKILLS_BUTTON.style.transform = "scale(.6)";

        WHY_ME.style.right = '-20.3vw';
        WHY_ME.style.transform = "scale(0)";

        setTimeout(function() {
            EXPERIENCES.style.transition = 'all .5s';
            EXPERIENCES.style.left = '-17vw';
            EXPERIENCES.style.transform = 'scale(0.6)';
        }, 50);

        SKILLS_DESCRIPTION.style.left = '30vw';
        SKILLS_DESCRIPTION.style.transform = 'scale(0)';

        INFOS_DESCRIPTION.style.left = '-50vw';

        setTimeout(function() {
            INFOS_DESCRIPTION.style.left = '-12vw';
            INFOS_DESCRIPTION.style.transform = 'scale(1)';
        }, 230);
       


    }
    else if(CURRENT_BUTTON == INFOS_BUTTON) {
        CURRENT_BUTTON = EXPERIENCES;

        WHY_ME.style.transition = 'none';
        WHY_ME.style.left = '-20vw';
        
        SKILLS_BUTTON.style.left = '29vw';
        SKILLS_BUTTON.style.transform = "scale(0)";
        
        INFOS_BUTTON.style.left = '25vw';
        INFOS_BUTTON.style.transform = "scale(.6)";

        EXPERIENCES.style.left = '0vw';
        EXPERIENCES.style.transform = "scale(1)";

        setTimeout(function() {
            WHY_ME.style.transition = 'all .5s';
            WHY_ME.style.left = '-17vw';
            WHY_ME.style.transform = 'scale(0.6)';
            SKILLS_BUTTON.style.left = '-20vw';
        }, 50);

        INFOS_DESCRIPTION.style.left = '30vw';
        INFOS_DESCRIPTION.style.transform = 'scale(0)';

        EXPERIENCES_DESCRIPTION.style.left = '-50vw';

        setTimeout(function() {
            EXPERIENCES_DESCRIPTION.style.left = '-12vw';
            EXPERIENCES_DESCRIPTION.style.transform = 'scale(1)';
        }, 230);

    }

    else if(CURRENT_BUTTON == EXPERIENCES) {

        CURRENT_BUTTON = WHY_ME;

        INFOS_BUTTON.style.left = '30vw';
        INFOS_BUTTON.style.transform = "scale(0)";

        EXPERIENCES.style.left = '19vw';
        EXPERIENCES.style.transform = "scale(0.6)";

        WHY_ME.style.left = '3.7vw';
        WHY_ME.style.transform = 'scale(1)';

        SKILLS_BUTTON.style.left = '-13vw';
        SKILLS_BUTTON.style.transform = "scale(.6)";

        setTimeout(function() {
            INFOS_BUTTON.style.left = '-20vw';
        }, 200);
        
        EXPERIENCES_DESCRIPTION.style.left = '30vw';
        EXPERIENCES_DESCRIPTION.style.transform = 'scale(0)';

        WHY_ME_DESCRIPTION.style.left = '-50vw';

        setTimeout(function() {
            WHY_ME_DESCRIPTION.style.left = '-12vw';
            WHY_ME_DESCRIPTION.style.transform = 'scale(1)';
        }, 230);
       
    }

    else if(CURRENT_BUTTON == WHY_ME) {
        CURRENT_BUTTON = SKILLS_BUTTON;


        EXPERIENCES.style.left = '23vw';
        EXPERIENCES.style.transform = "scale(0)";

        WHY_ME.style.left = '22vw';
        WHY_ME.style.transform = 'scale(.6)';

        SKILLS_BUTTON.style.left = '5vw';
        SKILLS_BUTTON.style.transform = "scale(1)";

        INFOS_BUTTON.style.left = '-11vw';
        INFOS_BUTTON.style.transform = "scale(.6)";

        WHY_ME_DESCRIPTION.style.left = '30vw';
        WHY_ME_DESCRIPTION.style.transform = 'scale(0)';

        SKILLS_DESCRIPTION.style.left = '-50vw';

        setTimeout(function() {
            SKILLS_DESCRIPTION.style.left = '-12vw';
            SKILLS_DESCRIPTION.style.transform = 'scale(1)';
        }, 230);
  
    }
});

