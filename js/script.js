'use strict';
$(function() {
//OBJECTS
	var test = [
		{
			question: 'Что такое жесткий диск?',
			answer1: 'Устройство накопления информации',
			answer2: 'Диск для метания',
			answer3: 'Диск из жести',
			name: 'answ1'
		},
		{
			question: 'Как выключить компьютер?',
			answer1: 'Выкинуть в окно',
			answer2: 'С помощью меню "ПУСК"',
			answer3: 'Кнопкой ВКЛ/ВЫКЛ',
			name: 'answ2'		
		},
		{
			question: 'Что такое "Мышка"?',
			answer1: 'Животное',
			answer2: 'Приложение',
			answer3: 'Устройство ввода информации',
			name: 'answ3'		
		}
	];

//TO LOCAL STORAGE

	localStorage.setItem('quest', JSON.stringify(test));

//FROM LOCAL STORAGE

	var objects = localStorage.getItem('quest');
	objects = JSON.parse(objects);

// RIGHT ANSWERS

	var	rightAnswer1 = 'answ_1' ;
	var	rightAnswer2 = 'answ_2' ;
	var	rightAnswer3 = 'answ_3' ;
	var rightAnswer = [rightAnswer1, rightAnswer2, rightAnswer3];

// TEMPLATE

	var template = $('#template').html();
	var content = tmpl(template, {data:objects});
	$('body').append(content);
	
// BUTTON ON CLICK

	$('#button').on('click', function(){
		var checked = [];
		$("input:radio:checked").each(function(){checked.push($(this).attr('id'));}); 

		if(checked.length < 3) { 
			Window('Выберите ответ!');
	        return false;
	    }

	    var count = 0;
	    for ( var i = 0; i < checked.length; i++ ) {
	    	if ( checked[i] == rightAnswer[i] ) {
	    		count += 1 ;
	    	} else {
	    		Window('Вы не прошли тест!');
	    		break;
	    	}
	    }
	    if ( count == 3 ) {
	    	Window('Вы успешно прошли тест!');
	    }  
		$("input:checkbox:checked").attr('checked', false);
	});

});