import {
  PERSONAL_INFO,
  ABILITIES,
  SKILLS,
  PENDING_FALSE,
  EVENTS,
  DARKMODE_TRUE,
  DARKMODE_FALSE,
} from "../actions/action";

const initState = {
  personalInfo: {},
  abilities: [],
  skills: [],
  events: [],
  pending: true,
  darkMode: false,
};

const Reducer = (state = initState, action) => {
  if (action.type === PERSONAL_INFO) {
    return { ...state, personalInfo: action.personalInfo };
  } else if (action.type === ABILITIES) {
    return { ...state, abilities: action.abilities };
  } else if (action.type === SKILLS) {
    return { ...state, skills: action.skills };
  } else if (action.type === EVENTS) {
    return { ...state, events: action.events };
  } else if (action.type === PENDING_FALSE) {
    return { ...state, pending: false };
  } else if (action.type === DARKMODE_TRUE) {
    return { ...state, darkMode: true };
  } else if (action.type === DARKMODE_FALSE) {
    return { ...state, darkMode: false };
  } else {
    return { ...state };
  }
};

export default Reducer;
