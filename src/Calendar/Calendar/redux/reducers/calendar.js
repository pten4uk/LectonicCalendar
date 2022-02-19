let date = new Date();

const initialState = {
    today: date,
    currentDate: date,
    checkedDate: date,
    swap: false,
    classNameForSwap: "dates-list",
    leftElemForSwap: true,
    rightElemForSwap: false
}

export default function calendar(state = initialState, action) {
    switch (action.type) {
        case "NEXT_MONTH":
            return {
                ...state,
                swap: true,
                classNameForSwap: "dates-list__left",
                currentDate: new Date(
                    state.currentDate.getFullYear(),
                    state.currentDate.getMonth() + 1
                )
            }
        case "PREV_MONTH":
            return {
                ...state,
                swap: true,
                classNameForSwap: "dates-list__right",
                currentDate: new Date(
                    state.currentDate.getFullYear(),
                    state.currentDate.getMonth() - 1
                )
            }
        case "SET_ACTIVE_DATE":
            return {
                ...state,
                checkedDate: action.payload.date
            }
        case "DEACTIVATE_SWAP":
            return {
                ...state,
                swap: false,
            }
        default:
            return state
    }
}