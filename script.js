'use strict';

const Heading = ({date, changeMonth, resetDate}) =>
React.createElement("nav", {className: "calendar--nav"},
React.createElement("a",{ onClick: () => changeMonth(date.month() - 1)}, "\u2039"),
React.createElement("h1", {onClick: () => resetDate() }, date.format('MMM'), " ",
React.createElement("small", null, date.format('YYYY'))),
React.createElement("a", {onClick: () => changeMonth(date.month() + 1)}, "u203A"));

const Day = ({currentDate, date, startDate, endDate, onClick}) => {
    let className = [];
    
    if (moment().isSame(date, 'day')) {
        className.push('active');
    }

    if (date.isSame(startDate, 'day')) {
        className.push('start');
    }

    if (date.isBetween(startDate, endDate, 'day')) {
        className.push('between');
    }

    if (date.isSame(endDate, 'day')) {
        className.push('end');
    }

    if (!date.isSame(currentDate, 'month')) {
        className.push('muted');
    }

    return (React.createElement("span", {onClick: () => onClick(date), currentDate: date, className:
    className.join(' ')}, date.date()));
};

const Days = ({date, startDate, endDate, onClick }) => {
    const thisDate = moment(date);
    const daysInMonth = moment(date).daysInMonth();
    const firstDayDate = moment(date).startOf('month');
    const previousMonth = moment(date).subtract(1, 'month');
    const previousMonthDays = previousMonth.daysInMonth();
    const nextsMonth = moment(date).add(1, 'month');
    let days = [];
    let labels= [];
}