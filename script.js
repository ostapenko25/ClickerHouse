/* При добавлении новых компонентов внести изменения в:
1.  Скрипт магазина = снять деньги со счета
2. Скрипт магазина = отобразить купленный объект */

var message = document.getElementById("message");
// Скрипт кликера = добавить деньги на счет
var count = 0;

function inc(n) {
        count += n;      
        document.getElementById("count").innerHTML = "Ваш баланс: $" + count;
        
        if (count <= (-100)) {
            alert("Вы влезли в долги и банк конфисковал ваш дом!");
            var house = document.querySelector(".house");       house.classList.add("end");               
    }
	};

// Рабочий день - счетчик кликов на кнопку "Заработать". После 5 кликов останавливается и запускает таймер перерыва.
var clickerCount = 0;
document.querySelector(".clicker").onclick = function() {
	inc(100);	
	clickerCount = clickerCount + 1;
		
	if (clickerCount >= 5) {
				message.innerHTML = "Рабочий день окончен! Но если вы трудоголик, как я, то можете еще взять подработку за еду. <br> До окончания перерыва: "
        /*alert("Рабочий день окончен! Но если вы трудоголик, как я, то можете еще взять подработку за еду (правая кнопка)."); 		*/	document.querySelector(".clicker").disabled=true;	document.querySelector(".clicker").style.backgroundColor = "lightgrey";
				document.querySelector("#test").style.opacity = "1";	
				timer();		
    }
}

// Таймер перерыва
function timer() {
	var elem = document.getElementById('test'); //получаем наш инпут 
	elem.innerHTML = parseInt(elem.innerHTML) - 1; //уменьшаем значение таймера на единицу  

	if(elem.innerHTML > 0 && elem.innerHTML < 20) {		
		window.setTimeout(timer, 1000);
	}
  else {
    message.innerHTML = "Перерыв окончен! Можно опять поработать.";
		document.querySelector(".clicker").disabled=false;
		document.querySelector(".clicker").style.backgroundColor = "#29b6f6";
		document.querySelector("#test").style.opacity = "0";		
		clickerCount = 0; // обнулчяем счетчик кликов - перезапускаем рабочий день
		elem.innerHTML = 20; // обновляем таймер для нового перерыва
  }
}

/////////

// Забаботать тряжким трудом
document.querySelector(".clicker-hard").onclick = function() {
inc(1)
}

/*	 */

// Скрипт магазина = снять деньги со счета)
function bankrupt(n) {    
    if (count <= 0 && count > (-100)) {
        alert("Ваш баланс отрицательный!");        
    }    
	
	if (count <= (-100)) {
            alert("Вы влезли в долги и банк конфисковал ваш дом!");
            var house = document.querySelector(".house");       house.classList.add("end");               
    }	
}

function buyItem(elem) {
	var priceItem = elem.value;	
	count = count - priceItem;
	document.getElementById("count").innerHTML = "Ваш баланс: $" + count;
	
	bankrupt();
}

// Скрипт магазина = отобразить купленный объект

function clickToShow(elementClick, elementShow){
  var elButton = document.querySelector(elementClick);
  var elShow = document.querySelector(elementShow);
  
  elButton.addEventListener("click", function(event) {
    elShow.classList.add("show");
  });
}

// Скрипт магазина = скрыть купленный объект или блок магазина

function clickToHide(elementClick, elementShow){
  var elButton = document.querySelector(elementClick);
  var elHide = document.querySelector(elementShow);
  
  elButton.addEventListener("click", function(event) {
    elHide.classList.remove("show");
  });
}

// Добавить голубую расцветку

function clickToBlue(elementClick, elementBlue){
  var elButton = document.querySelector(elementClick);
  var elBlue = document.querySelector(elementBlue);
  
  elButton.addEventListener("click", function(event) {
    elBlue.classList.add("blue");
    elBlue.classList.remove("green", "red", "violet");
  });
}

// Добавить зеленую расцветку

function clickToGreen(elementClick, elementGreen){
  var elButton = document.querySelector(elementClick);
  var elGreen = document.querySelector(elementGreen);
  
  elButton.addEventListener("click", function(event) {
    elGreen.classList.add("green");
    elGreen.classList.remove("blue", "red", "violet");
  });

}


// Добавить красную расцветку

function clickToRed(elementClick, elementRed){
  var elButton = document.querySelector(elementClick);
  var elRed = document.querySelector(elementRed);
  
  elButton.addEventListener("click", function(event) {
    elRed.classList.add("red");
    elRed.classList.remove("green", "blue", "violet");
  });
}

// Добавить фиолетовую расцветку

function clickToViolet(elementClick, elementViolet){
  var elButton = document.querySelector(elementClick);
  var elViolet = document.querySelector(elementViolet);
  
  elButton.addEventListener("click", function(event) {
    elViolet.classList.add("violet");
    elViolet.classList.remove("green", "blue", "red");
  });
}

// Добавить серую расцветку

function clickToGrey(elementClick, elementGrey){
  var elButton = document.querySelector(elementClick);
  var elGrey = document.querySelector(elementGrey);
  
  elButton.addEventListener("click", function(event) {
    elGrey.classList.add("grey");
    elGrey.classList.remove("green", "blue", "red", "violet");
  });
}



// Вызов функций

clickToShow('.house-walls-buy','.walls-colors');
clickToHide('.walls-colors-exit','.walls-colors');
clickToBlue('.walls-color-blue','.house-walls');
clickToGreen('.walls-color-green','.house-walls');
clickToRed('.walls-color-red','.house-walls');
clickToViolet('.walls-color-violet','.house-walls');
clickToGrey('.walls-color-grey','.house-walls');

clickToShow('.house-base-buy','.house-base');
clickToShow('.house-walls-buy','.house-walls');
clickToShow('.house-roof-buy','.house-roof');
clickToShow('.house-trumpet-buy','.house-trumpet');

clickToShow('.house-door-buy','.house-door-on');
clickToShow('.house-door-buy','.house-door');
clickToShow('.house-door-buy','.door-colors');
clickToHide('.door-colors-exit','.door-colors');
clickToBlue('.door-color-blue','.house-door');
clickToGreen('.door-color-green','.house-door');
clickToRed('.door-color-red','.house-door');
clickToViolet('.door-color-violet','.house-door');
clickToGrey('.door-color-grey','.house-door');

clickToShow('.house-trumpet-buy','.house-trumpet-on');
clickToShow('.house-trumpet-buy','.trumpet-colors');
clickToHide('.trumpet-colors-exit','.trumpet-colors');
clickToBlue('.trumpet-color-blue','.house-trumpet');
clickToGreen('.trumpet-color-green','.house-trumpet');
clickToRed('.trumpet-color-red','.house-trumpet');
clickToViolet('.trumpet-color-violet','.house-trumpet');
clickToGrey('.trumpet-color-grey','.house-trumpet');

clickToShow('.house-window-small-1-buy','.house-window-small-1');
clickToShow('.house-window-small-2-buy','.house-window-small-2');
clickToShow('.house-window-small-3-buy','.house-window-small-3');
clickToShow('.house-window-small-4-buy','.house-window-small-4');
clickToShow('.house-window-big-1-buy','.house-window-big-1');
clickToShow('.house-window-big-2-buy','.house-window-big-2');

