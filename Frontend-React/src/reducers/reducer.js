import {PERSONAL_INFO, ABILITIES, SKILLS, PENDING_FALSE, EVENTS} from "../actions/action";

const initState = {
    personalInfo: {},
    abilities: [],
    skills: [],
    events: [],
    pending: true
};

const Reducer = (state = initState, action) => {
    if (action.type === PERSONAL_INFO) {
        return {...state, personalInfo: action.personalInfo}
    } else if (action.type === ABILITIES) {
        return {...state, abilities: action.abilities}
    } else if (action.type === SKILLS) {
        return {...state, skills: action.skills}
    } else if (action.type === EVENTS) {
        return {...state, events: action.events}
    } else if (action.type === PENDING_FALSE) {
        return {...state, pending: false}
    } else {
        return {...state}
    }
};

export default Reducer;
