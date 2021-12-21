    // тут будет пишем скрипт, который генерирует пароль по нажатию кнопки 
    // задаём переменные, где будем хранить адрес сайта, кодовое слово…
    let canvas = document.getElementById('c1');
    let context = canvas.getContext('2d');
    let rash, nap, pow, rot1, rot2;
    // …исходные текстовые данные для пароля и сам пароль
    let rashod2, napor2, power2;
    // объявляем функцию, которая создаёт пароль и выводит его на экран

    function generate() {
        // кладём в соответствующие переменные текстовое значение расхода…
        rash = document.getElementById('rashod1').value;
        // кладём в соответствующие переменные текстовое значение напора…
        nap = document.getElementById('napor1').value;
        // кладём в соответствующие переменные текстовое значение мощности…
        pow = document.getElementById('power1').value;
        // кладём в соответствующие переменные текстовое значение ном частоты вращения…
        rot1 = document.getElementById('rotation1').value;
        // кладём в соответствующие переменные текстовое значение частоты вращения…
        rot2 = document.getElementById('rotation2').value;

        // подготавливаем исходную строку для пароля и добавляем в неё наш секретный ингредиент
        rashod2 = rash * (rot2 / rot1);
        napor2 = nap * (rot2 / rot1) ** 2;
        power2 = pow * (rot2 / rot1) ** 3;

        // выводим его на экран
        document.getElementById('rash_text').innerHTML = rashod2;
        document.getElementById('nap_text').innerHTML = napor2;
        document.getElementById('pow_text').innerHTML = power2;

        //context.beginPath();
        /*context.strokeStyle='red';
        context.lineWidth='5';
        context.lineTo((5*rashod2),( napor2));
        context.stroke();*/

        //context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = '5';
        context.lineTo(rashod2, (5 * power2));
        context.stroke();
    }

    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 10
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });