let date = new Date();

const initialState = {
    today: date,
    currentYear: date.getFullYear(),
    currentMonth: date.getMonth(),
}

export default function calendar(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}