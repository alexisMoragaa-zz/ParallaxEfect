
    $(window).on('scroll', parallax);//ejecutamos la funcion parallax cuando se desencadene el evento scroll
    
    function parallax(){
        
        var s = $(window).scrollTop();//guardamos el valor en pixeles del scrolltop en la variable s

        function parallaxBg(el,t){//funcion parallax para el background que recibe como primer parametro el elemento y como segundo parametro el factor de multiplicacion con que aplicaremos el paralax
            $(el).css({//accedemos a la propiedad css del elemento y modificamos las propiedaddes position y attachment del background
               
                'background-attachment': 'fixed',
                 'background-position' : 'center ' + -(s*t) + 'px',
            })
        }
               

        function parallaxFront(el, t){//funcion parallax para el front o los elementos sobre el background recibe los mismos parametros que la funcion anterior
            $(el).css({//accedemos a la propiedad css del elemento y modificamos las propiedades position y top del mismo
                'position' : 'relative',
                'top': -(s*t) + 'px'
            })
        }

        parallaxBg('body',.1);//llamamos a la funcion y pasamos los parametros
        parallaxBg('footer',.1);//llamamos a la funcion y pasamos los parametros
        parallaxFront('h1',2);//llamamos a la funcion y pasamos los parametros
        parallaxFront('.page',.8);//llamamos a la funcion y pasamos los parametros
    }

  


// });
