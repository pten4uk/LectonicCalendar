const initialState = [
    {
        date: new Date(2022, 1, 18),
        events: [
            {
                status: true,
                theme: "Доноры России",
                lecturer: "Евлампий Питрович Игорь",
                listener: "ОАО \"Мокрые штаны\"",
                address: "Москва, ул. Не строителей, д. 98738"
            },
            {
                status: null,
                theme: "Доноры Подмосковья",
                lecturer: "Никанор Иванович Гуразматирин",
                listener: "Газовая промышленность",
                address: "Москва, ул. На этот раз строителей, д. 45"
            },
        ],
    }
]

export default function dateDetail(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}