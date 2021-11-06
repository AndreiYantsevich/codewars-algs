/// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Казань", "Питер", "Калининград"]

const concerts = {
    'Москва': new Date('2020-04-01'),
    'Казань': new Date('2021-11-12'),
    'Владивосток': new Date('2020-04-21'),
    'Калининград': new Date('2021-11-18'),
    'Омск': new Date('2020-04-18'),
    'Питер': new Date('2021-11-15'),
}

function concertsToArray(concerts) { //O(n*log2n)
    return Object.keys(concerts)
        .filter(city => concerts[city] > new Date()) //O(n)
        .sort((a, b) => concerts[a] - concerts[b]) // O(n*log2n)
}

console.log(concertsToArray(concerts));