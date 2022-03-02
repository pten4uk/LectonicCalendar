const HEADERS = {
  'Content-Type': 'application/json',
}


export async function getEventsForMonth(year, month) {
  const options = {
    method: "GET",
    headers: HEADERS,
    credentials: "include"
  }
  return fetch(
    `http://127.0.0.1:8000/api/workrooms/calendar/lecturer/?year=${year}&month=${month}`,
    options
    )
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('Ошибка при получании данных:', error))
}