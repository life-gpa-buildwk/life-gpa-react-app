import { ONCHANGE, ISCLICKED, SETCATEGORY, ISPICKED } from '../actions/addGoalAction';

const initState = {
    lifeCategory: "",
    goal: "",
    days: [],
    dayKey: [
        {
            day: "Sun",
            isPicked: false
        },
        {
            day: "M",
            isPicked: false
        },
        {
            day: "T",
            isPicked: false
        },
        {
            day: "W",
            isPicked: false
        }, 
        {
            day: "Th",
            isPicked: false
        }, 
        {
            day: "F",
            isPicked: false
        },
        {
            day: "Sat",
            isPicked: false
        }

    ]
}

export const addGoalReducer = (state = initState, action) => {
    switch (action.type) {
        case ONCHANGE:
            console.log(state)
            return {
                ...state,
                goal: action.goal
            }
        case SETCATEGORY:
            return {
                ...state,
                lifeCategory: action.payload
            }
        case ISPICKED:
            return {
                ...state,
                dayKey: state.dayKey.map(el => {
                    return el.day == action.payload ? {...el,isPicked:!el.isPicked}: el
                })
                // days: state.dayKey.map(el => el.isPicked ? el.day : 0).filter(days => days !== 0)
            }
        case ISCLICKED:
            return {
                ...state,
                days: state.dayKey.map(el => el.isPicked ? el.day : 0).filter(days => days !== 0)
            }
        default:
            return state
    }

}