$(document).ready(function() {
      //$(".dial").knob();
      $('.dial').knob({
        'min':0,
        'max':100,
        'width':65,
        'height':65,
        'displayInput':true,
        'fgColor':"#25C24D",
        'release':function(v) {$("p").text(v);},
        'readOnly':true
      });
      $('.dial2').knob({
        'min':0,
        'max':100,
        'width':65,
        'height':65,
        'displayInput':true,
        'fgColor':"#00BFFF",
        'release':function(v) {$("p").text(v);},
        'readOnly':true
      });
    });
