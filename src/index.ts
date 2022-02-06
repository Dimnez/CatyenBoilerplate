import Catyen from '@catyen/catyen';

const catyen = new Catyen('#canvas',window);

catyen.loop.requestFrame(() => {

    catyen.draw.clear("black");
   
    catyen.draw.print(20,20,"HELLO WORLD!","green");

});


catyen.initialize();