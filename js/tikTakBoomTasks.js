const tasks = `
    [
        {
            "question": "2 * 2 = ",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "3" },
            "answer3": { "result": false, "value": "5" },
            "answer4": { "result": false, "value": "1" },
            "answer5": { "result": false, "value": "2" }
        },
        {
            "question": "Как зовут лучшего друга Чебурашки?",
            "answer1": { "result": true, "value": "Гена" },
            "answer2": { "result": false, "value": "Шопокляк" },
            "answer3": { "result": false, "value": "Мальчик Витя" },
            "answer4": { "result": false, "value": "Волшебник" },
            "answer5": { "result": false, "value": "Нету у него друзей" }
        },
        {
            "question": "12^2 = ",
            "answer1": { "result": true, "value": "144" },
            "answer2": { "result": false, "value": "169" },
            "answer3": { "result": false, "value": "121" },
            "answer4": { "result": false, "value": "122" },
            "answer5": { "result": false, "value": "24" }
        },
        {
            "question": "Столица Италии?",
            "answer1": { "result": true, "value": "Рим" },
            "answer2": { "result": false, "value": "Ватикан" },
            "answer3": { "result": false, "value": "Милан" },
            "answer4": { "result": false, "value": "Римини" },
            "answer5": { "result": false, "value": "Венеция" }
        },
        {
            "question": "Столица Испании?",            
            "answer1": { "result": true, "value": "Мадрид" },
            "answer2": { "result": false, "value": "Валенсия" },
            "answer3": { "result": false, "value": "Барселона" },
            "answer4": { "result": false, "value": "Тенерифе" },
            "answer5": { "result": false, "value": "Лиссабон" }
        },
        {
            "question": "Какие бывают встроенные циклические конструкции в JavaScript?",
            "answer1": { "result": true, "value": "for...in" },
            "answer2": { "result": false, "value": "forEach" },
            "answer3": { "result": false, "value": "do...loop" },
            "answer4": { "result": false, "value": "for...next" },
            "answer5": { "result": false, "value": "do...until" }
        },
        {
            "question": "Какое соревнование по футболу перенесли в 2020 году на 2021год?",
            "answer1": { "result": true, "value": "Чемпионат Европы" },
            "answer2": { "result": false, "value": "Чемпионат Мира" },
            "answer3": { "result": false, "value": "Чемпионат Америки" },
            "answer4": { "result": false, "value": "Чемпионат России" },
            "answer5": { "result": false, "value": "Лига чемпионов" }
        },
        {
            "question": "Как в США называют футбол?",
            "answer1": { "result": true, "value": "soccer" },
            "answer2": { "result": false, "value": "football" },
            "answer3": { "result": false, "value": "European football" },
            "answer4": { "result": false, "value": "Esport football" },
            "answer5": { "result": false, "value": "Cyberball" }
        },
        {
            "question": "Какая сборная стала чемпионом миром по футболу в 2018году?",
            "answer1": { "result": true, "value": "Франция" },
            "answer2": { "result": false, "value": "Англия" },
            "answer3": { "result": false, "value": "Бразилия" },
            "answer4": { "result": false, "value": "Россия" },
            "answer5": { "result": false, "value": "Испания" }
        },
        {
            "question": "Кто съел колобка?",
            "answer1": { "result": true, "value": "Лиса" },
            "answer2": { "result": false, "value": "Волк" },
            "answer3": { "result": false, "value": "Медведь" },
            "answer4": { "result": false, "value": "Заяц" },
            "answer5": { "result": false, "value": "Дед" }
        },
        {
            "question": "Сколько материков на Земле?",
            "answer1": { "result": true, "value": "6" },
            "answer2": { "result": false, "value": "5" },
            "answer3": { "result": false, "value": "7" },
            "answer4": { "result": false, "value": "4" },
            "answer5": { "result": false, "value": "8" }
        },
        {
            "question": "Сколько частей света на Земле?",
            "answer1": { "result": true, "value": "6" },
            "answer2": { "result": false, "value": "5" },
            "answer3": { "result": false, "value": "7" },
            "answer4": { "result": false, "value": "4" },
            "answer5": { "result": false, "value": "10" }
        },
        {
            "question": "Где жила Баба Яга?",
            "answer1": { "result": true, "value": "В избушке на курьих ношках" },
            "answer2": { "result": false, "value": "В избе" },
            "answer3": { "result": false, "value": "В лесу" },
            "answer4": { "result": false, "value": "В землянке" },
            "answer5": { "result": false, "value": "В деревне" }
        },
        {
            "question": "Какой цикл в JavaScript проверяет условие перед каждой итерацией?",
            "answer1": { "result": true, "value": "while" },
            "answer2": { "result": false, "value": "while...until" },
            "answer3": { "result": false, "value": "for" },
            "answer4": { "result": false, "value": "do...while" },
            "answer5": { "result": false, "value": "for...in" }
        },
        {
            "question": "Какой цикл в JavaScript проверяет условие после каждой итерации?",
            "answer1": { "result": true, "value": "do...while" },
            "answer2": { "result": false, "value": "while...until" },
            "answer3": { "result": false, "value": "for" },
            "answer4": { "result": false, "value": "while" },
            "answer5": { "result": false, "value": "for...in" }
        },
        {
            "question": "Какой цикл в JavaScript проверяет условие перед каждой итерацией, можно задать дополнительные настройки?",
            "answer1": { "result": true, "value": "for" },
            "answer2": { "result": false, "value": "while" },
            "answer3": { "result": false, "value": "for...in" },
            "answer4": { "result": false, "value": "do...while" },
            "answer5": { "result": false, "value": "for...next" }
        },
        {
            "question": "Какова пространственная сложность сортировки слиянием?",
            "answer1": { "result": true, "value": "O(n)" },
            "answer2": { "result": false, "value": "O(n*log(n))" },
            "answer3": { "result": false, "value": "O(n^2)" },
            "answer4": { "result": false, "value": "O(1)" },
            "answer5": { "result": false, "value": "O(2)" }
        },
        {
            "question": "Трюфели приходятся по вкусу многим гурманам, а находят их с помощью собаки, но найти их может и другое животное. Укажите название это животного.",
            "answer1": { "result": true, "value": "Свинья" },
            "answer2": { "result": false, "value": "Харек" },
            "answer3": { "result": false, "value": "Барсук" },
            "answer4": { "result": false, "value": "Кошка" },
            "answer5": { "result": false, "value": "Сокол" }
        },
        {
            "question": "Какое животное развивает наибольшую скорость по прямой линии?",
            "answer1": { "result": true, "value": "Гепард" },
            "answer2": { "result": false, "value": "Волк" },
            "answer3": { "result": false, "value": "Газель" },
            "answer4": { "result": false, "value": "Харек" },
            "answer5": { "result": false, "value": "Лев" }
        },
        {
            "question": "Какое животное способно построить себе дом из ила и древесины?",
            "answer1": { "result": true, "value": "Бобер" },
            "answer2": { "result": false, "value": "Выдра" },
            "answer3": { "result": false, "value": "Водяная крыса" },
            "answer4": { "result": false, "value": "Морская свинка" },
            "answer5": { "result": false, "value": "Ручейник" }
        },
        {
            "question": "Все знают, что 180° это половина окружности, но в мире есть такое животное которое способно открыть пасть на 180°. Какое это животное?",
            "answer1": { "result": true, "value": "Бегемот" },
            "answer2": { "result": false, "value": "Носорог" },
            "answer3": { "result": false, "value": "Лев" },
            "answer4": { "result": false, "value": "Медведь" },
            "answer5": { "result": false, "value": "Крокодил" }
        },
        {
            "question": "Какая змея считается самой ядовитой на планете?",
            "answer1": { "result": true, "value": "Тайпан" },
            "answer2": { "result": false, "value": "Бушмейстер" },
            "answer3": { "result": false, "value": "Островной ботропс" },
            "answer4": { "result": false, "value": "Черная мамба" },
            "answer5": { "result": false, "value": "Уж" }
        },
        {
            "question": "В каком из этих мест не живут пингвины?",
            "answer1": { "result": true, "value": "Арктика" },
            "answer2": { "result": false, "value": "Антарктида" },
            "answer3": { "result": false, "value": "Южная Африка" },
            "answer4": { "result": false, "value": "Южная Америка" },
            "answer5": { "result": false, "value": "Австралия" }
        },
        {
            "question": "Эти команды по футболу учавствуют в Российской премьер-лиге?",
            "answer1": { "result": true, "value": "Спартак Москва" },
            "answer2": { "result": false, "value": "Спартак Нальчик" },
            "answer3": { "result": false, "value": "Чертаново" },
            "answer4": { "result": false, "value": "Акрон" },
            "answer5": { "result": false, "value": "Динамо Минск" }
        },
        {
            "question": "Какая нация придумала футбол?",
            "answer1": { "result": true, "value": "Англичане" },
            "answer2": { "result": false, "value": "Бразильцы" },
            "answer3": { "result": false, "value": "Немцы" },
            "answer4": { "result": false, "value": "Русские" },
            "answer5": { "result": false, "value": "Американцы" }
        },
        {
            "question": "Где проходил последний чемпионат мира по футболу в 2018 году?",
            "answer1": { "result": true, "value": "Россия" },
            "answer2": { "result": false, "value": "Англия" },
            "answer3": { "result": false, "value": "Бразилия" },
            "answer4": { "result": false, "value": "Франция" },
            "answer5": { "result": false, "value": "Испания" }
        },
        {
            "question": "На каком море основан город Ростов?",
            "answer1": { "result": true, "value": "Азовское" },
            "answer2": { "result": false, "value": "Черное" },
            "answer3": { "result": false, "value": "Средиземное" },
            "answer4": { "result": false, "value": "Белое" },
            "answer5": { "result": false, "value": "Балтийское" }
        },
        {
            "question": "Как называется пролив соединяющий Средиземное море с Атлантическим океанам?",
            "answer1": { "result": true, "value": "Гибралтарский" },
            "answer2": { "result": false, "value": "Босфор" },
            "answer3": { "result": false, "value": "Ла-Манш" },
            "answer4": { "result": false, "value": "Гудзонов" },
            "answer5": { "result": false, "value": "Мозамбикский" }
        },
        {
            "question": "Между какими странами находится Берингов пролив?",
            "answer1": { "result": true, "value": "США и Россия" },
            "answer2": { "result": false, "value": "Франция и Великобритания" },
            "answer3": { "result": false, "value": "Финляндия и Россия" },
            "answer4": { "result": false, "value": "США и Мексика" },
            "answer5": { "result": false, "value": "Россия и Япония" }
        },
        {
            "question": "В каком море нельзя утонуть?",
            "answer1": { "result": true, "value": "Мертвом" },
            "answer2": { "result": false, "value": "Черном" },
            "answer3": { "result": false, "value": "Живом" },
            "answer4": { "result": false, "value": "Белом" },
            "answer5": { "result": false, "value": "Средиземном" }
        },
        {
            "question": "Сначала их относили к растительному миру, потом к животному. А изучив всесторонне, выделили в особую группу. Что это такое?",
            "answer1": { "result": true, "value": "Грибы" },
            "answer2": { "result": false, "value": "Водоросли" },
            "answer3": { "result": false, "value": "Споровые" },
            "answer4": { "result": false, "value": "Членистоногие" },
            "answer5": { "result": false, "value": "Молюски" }
        },
        {
            "question": "Символом Рима является скульптурное изображение волчицы, Берлина- изображение медведя. А что является символом Копенгагена?",
            "answer1": { "result": true, "value": "Русалочка" },
            "answer2": { "result": false, "value": "Лев" },
            "answer3": { "result": false, "value": "Лебедь" },
            "answer4": { "result": false, "value": "Кот в мешке" },
            "answer5": { "result": false, "value": "Кот в сапогах" }
        },
        {
            "question": "Из-за чего был уничтожен г. Помпеи?",
            "answer1": { "result": true, "value": "Вулкана" },
            "answer2": { "result": false, "value": "Войны" },
            "answer3": { "result": false, "value": "Варваров" },
            "answer4": { "result": false, "value": "Болезни" },
            "answer5": { "result": false, "value": "Пожара" }
        }
    ]
`;