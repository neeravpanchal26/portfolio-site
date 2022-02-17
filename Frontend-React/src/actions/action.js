// Custom imports
import axios from "axios";

// Global variables
axios.defaults.baseURL = "https://thawing-lowlands-03153.herokuapp.com";

export const PERSONAL_INFO = "PERSONAL_INFO";
export const ABILITIES = "ABILITIES";
export const SKILLS = "SKILLS";
export const EVENTS = "EVENTS";
export const PENDING_TRUE = "PENDING_TRUE";
export const PENDING_FALSE = "PENDING_FALSE";
export const DARKMODE_TRUE = "DARKMODE_TRUE";
export const DARKMODE_FALSE = "DARKMODE_FALSE";

function SetPersonalInfo(personalInfo) {
  return {
    type: PERSONAL_INFO,
    personalInfo: personalInfo,
  };
}

function SetAbilities(abilities) {
  return {
    type: ABILITIES,
    abilities: abilities,
  };
}

function SetSkills(skills) {
  return {
    type: SKILLS,
    skills: skills,
  };
}

function SetEvents(events) {
  return {
    type: EVENTS,
    events: events,
  };
}

function SetPendingTrue() {
  return {
    type: PENDING_TRUE,
  };
}

function SetPendingFalse() {
  return {
    type: PENDING_FALSE,
  };
}

export function SetDarkModeTrue() {
  return {
    type: DARKMODE_TRUE,
  };
}

export function SetDarkModeFalse() {
  return {
    type: DARKMODE_FALSE,
  };
}

export function SetDarkMode(darkMode) {
  return (dispatch) => {
    if (darkMode) dispatch(SetDarkModeTrue());
    else if (darkMode === false) dispatch(SetDarkModeFalse());
  };
}

export function GetPersonalInfo() {
  return (dispatch) => {
    // Get data from wagtail cms here
    return axios
      .get("/api/v2/pages/?type=personalinfo.personalinfo&fields=*")
      .then((data) => {
        dispatch(SetPersonalInfo(data.data.items[0]));
        dispatch(SetPendingFalse());
      })
      .catch((error) => console.log(error));
  };
}

export function GetAbilities() {
  return (dispatch) => {
    // Get data from wagtail cms here
    return axios
      .get("/api/v2/pages/?type=abilities.Abilities&fields=*")
      .then((data) => {
        dispatch(SetPendingTrue());
        dispatch(SetAbilities(data.data.items));
        dispatch(SetPendingFalse());
      })
      .catch((error) => console.log(error));
  };
}

export function GetSkills() {
  return (dispatch) => {
    // Get data from wagtail cms here
    return axios
      .get("/api/v2/pages/?type=skills.skills&fields=*")
      .then((data) => {
        dispatch(SetPendingTrue());
        dispatch(SetSkills(data.data.items));
        dispatch(SetPendingFalse());
      })
      .catch((error) => console.log(error));
  };
}

export function GetEvents() {
  return (dispatch) => {
    // Get data from wagtail cms here
    return axios
      .get("/api/v2/pages/?type=events.events&fields=*&order=-id")
      .then((data) => {
        dispatch(SetPendingTrue());
        dispatch(SetEvents(data.data.items));
        dispatch(SetPendingFalse());
      })
      .catch((error) => console.log(error));
  };
}
