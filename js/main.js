function SwitchController ($scope) {

    $scope.levelOne = false;
    $scope.levelTwo = false;
    $scope.levelThree = false;
    
    $scope.nav = function(goTo){
        $scope.levelOne = false;
        $scope.levelTwo = false;
        $scope.levelThree = false;
        scrollTo(goTo, 700);
    };

    $scope.level = function(level){
        scrollTo('#levelsContainer', 700);
        if (level === 'levelOne'){
            $scope.levelOne = true;
            $scope.levelTwo = false;
            $scope.levelThree = false;
        } else if (level === 'levelTwo'){
            $scope.levelOne = false;
            $scope.levelTwo = true;
            $scope.levelThree = false;
        } else {
            $scope.levelOne = false;
            $scope.levelTwo = false;
            $scope.levelThree = true;
        }
    };
};

/*jQuery*/
var scrollTo = function(element, speed){
        distance = $(element).offset();
    $("html, body").animate({ scrollTop: distance.top-70 }, speed || 300);
}

var $window = $(window),
    $mainMenuBar = $('nav'),
    $mainMenuBarHeight = $mainMenuBar.height()+3;
    $mainMenuBarAnchor = $('#anchor');

$window.scroll(function() {
    var window_top = $window.scrollTop()-$mainMenuBarHeight;
    var div_top = $mainMenuBarAnchor.offset().top+85;
    if (window_top > div_top) {
        // Make the nav sticky
        $mainMenuBar.addClass('stuck');
        $mainMenuBarAnchor.height($mainMenuBarHeight);
    }
    else {
        // Unstick the nav
        $mainMenuBar.removeClass('stuck');
        $mainMenuBarAnchor.height(0);
    }
});

$(function(){
    var sections = {},
        _height  = ($(window).height()),
        i        = 0;
    
    // Grab positions of our sections 
    $('section').each(function(){
        sections[this.id] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();
        for(i in sections){
            if(pos <= 200){
                $('nav .active').removeClass('active');
                $('nav .homeNav').addClass('active');
            } else if(pos >200 && pos <= 680){
                $('nav .active').removeClass('active');
                $('nav .servicesNav').addClass('active');
            }  else if(pos > 680 && pos <=1500) {
                $('nav .active').removeClass('active');
                $('nav .aboutNav').addClass('active');
            } else if (pos > 1500 && pos <= 2700){
                $('nav .active').removeClass('active');
                $('nav .contactNav').addClass('active');              
            }
    };
});
});