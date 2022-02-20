let date = new Date();

const initialState = {
    today: date,
    currentDate: date,
    checkedDate: date,
    swap: false,
    datesListIndex: 0,
    swapSideClass: ""
}

export default function calendar(state = initialState, action) {
    switch (action.type) {
        case "NEXT_MONTH":
            return {
                ...state,
                swap: true,
                datesListIndex: 1,
                swapSideClass: "swap-left",
                currentDate: new Date(
                    state.currentDate.getFullYear(),
                    state.currentDate.getMonth() + 1
                )
            }
        case "PREV_MONTH":
            return {
                ...state,
                swap: true,
                datesListIndex: 2,
                swapSideClass: "swap-right",
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
                datesListIndex: 0,
            }
        case "DEACTIVATE_SWAP_CLASS":
            return {
                ...state,
                swapSideClass: ""
            }
        default:
            return state
    }
}