const DAYS_OF_WEEK = 7;
export const MONTHS = {
    0: 'Январь',
    1: 'Февраль',
    2: 'Март',
    3: 'Апрель',
    4: 'Май',
    5: 'Июнь',
    6: 'Июль',
    7: 'Август',
    8: 'Сентябрь',
    9: 'Октябрь',
    10: 'Ноябрь',
    11: 'Декабрь'
}

function getDayOfWeek(date) {
    let day = date.getDay();
    if (day === 0) return 6;
    return day - 1;
}

export function getCalendar(year, month) {
    let date = new Date(year, month, 1);
    let dayOfWeekFirstDayOfMonth = getDayOfWeek(date);
    let monthDays = [];

    let day = 1;
    for (let week = 0; week < 6; week++) {
        let days = [];

        for (let weekDay = 1; weekDay <= DAYS_OF_WEEK; weekDay++) {
            monthDays.push(new Date(year, month, -dayOfWeekFirstDayOfMonth + day++));
        }
        // monthDays.push(days);
    }
    return monthDays;
}