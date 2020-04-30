//<<<<<<<<<<<<<< ИЗМЕНЯЕМ ЧЕРЕЗ JAVASCRIPT >>>>>>>>>>>>

// 1. Подключите jQuery, убедитесь в доступности объекта -библиотеки. Примечание:
// попробуйте подключение с разных CDN-хранилищ, и при помощи локального
// файла
// 2. Выберите при помощи селекторов jQuery
// — все HTML-элементы strong и окрасьте их в зеленый цвет
// — найдите все HTML-элементы em и добавьте им класс .selected
// — Найдите все элементы mark, которые находятся в div с классом row и задайте им
// класс .selected
// — Найдите все гиперссылки и удалите у них подчеркивания
// — Переключите элементы strong с классом some в состояние без этого класса, а
// тем элементам (strong), у которых небыло этого класса — добавьте.
// — среди набора элементов с классом .row удалите класс у второго элемента
// — прочитайте CSS-свойство color у второй гиперсылки в тексте


// $(document).ready(function() {
//     //zad1
//     $('strong').css('color', 'green');

//     //zad2
//     $('em').addClass('selected');


//     //zad3
//     $('.row mark').addClass('selected');

//     //zad4
//     $('a').css('text-decoration', 'none');

//     //zad5
//     $('strong').toggleClass('some');

//     //zad6
//     $('.row:eq(1)').removeClass('row');

//     //zad7
//     console.log($('a:eq(1)').css('color'));
// })




//tasks#2

$(document).ready(function(){
    //zad8
    $('.btn').click(function(){
        col = Math.round(255.0*Math.random());
        r = col.toString(16);
        col = Math.round(255.0*Math.random());
        g=col.toString(16);
        col = Math.round(255.0*Math.random());
        b=col.toString(16);
        col=r+g+b;
        $('body').css('background-color', `#${col}`);
    })


    //zad9
    $('#form-btn').click(function(e){
        if($('#name').val() == '' || $('#last-name').val() == '' || $('#password').val() == ''){
            e.preventDefault();
            alert('Заполните все поля');
        }
    })


    //zad10
    let i = 0;
    $('.right').click(function(){
        i+=100;
        $('.img').css({'margin-left': `${i}px`, 'transition': `0.2s`})
    })

    $('.left').click(function(){
        i-=100;
        $('.img').css({'margin-left': `${i}px`, 'transition': `0.2s`})
    })


    //zad11
    // $(document).mousemove(function(e){
    //     console.log(`X = ${e.clientX} Y = ${e.clientY}`);
    // })
    


    //zad12
    $('.modal').bPopup(function(){
        $('.save').click(function(){    
            let text = $('.text').val();
            if(text === '') alert('Заполните поле!')
            else{
                console.log(text);
                $('.modal').css('display', 'none');
            }
        })

        $('.close').click(function(){
            $('.modal').css('display', 'none');
        })
    });


    //zad13
    $('.drag').draggable();
    
   



})