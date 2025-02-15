const answer = BMI(62.4,1,8)   // Введите Ваши данные в формате (вес, рост (в метрах))

function BMI (weight, height) {    // Функция отражающая формулу расчёта индекса массы тела
    const heightInSecond = height ** 2   // ИМТ = вес (кг) : рост² (м) 
    const bmi = weight / heightInSecond
    const answer = bmi.toFixed(1)       // Округляем до 1 знака после запятой
    return answer 
    }
    
    if (answer <= 18.5) {
        console.log(`Your BMI: ${answer} Дефицит массы тела. Недостаточная масса тела может плохо отразится как на здоровье в целом, так и на состоянии опорно двигательного аппарата.`);
    } else if (answer > 18.5 && answer <= 24.9) {
        console.log(`Your BMI: ${answer} Нормальная масса тела, поздравляем! Продолжайте в том же духе!`);
    } else if (answer > 24.9 && answer <= 29.9) {
        console.log(`Ваш BMI: ${answer} Избыточная масса тела. Избыточный вес может привести к развитию серьезных заболеваний, таких как диабет, артрит, гипертония и др.`);
    } else if (answer > 29.9) {
        console.log(`Ваш BMI: ${answer} Ожирение. Необходимо как можно скорее нормализировать массу тела. Рекомендуется консультация специалиста.`);
    }
// Получаем в консоли наши значения BMI
