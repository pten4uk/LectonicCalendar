export function checkNeedSwapToPrevMonth(touchedDate, currentDate) {
  if (touchedDate.getFullYear() === currentDate.getFullYear()) {
    return touchedDate.getMonth() < currentDate.getMonth()
  } else if (touchedDate.getFullYear() < currentDate.getFullYear()) {
    return true
  }

  return false
}

export function checkNeedSwapToNextMonth(touchedDate, currentDate) {
  if (touchedDate.getFullYear() === currentDate.getFullYear()) {
    return touchedDate.getMonth() > currentDate.getMonth()
  } else if (touchedDate.getFullYear() > currentDate.getFullYear()) {
    return true
  }

  return false
}

export function checkEqualDates(date1, date2) {
  if (date1 && date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  } else return false
}
