// Custom imports
import axios from 'axios';

// Global variables
axios.defaults.baseURL = 'https://thawing-lowlands-03153.herokuapp.com';

export const PERSONAL_INFO = 'PERSONAL_INFO';
export const ABILITIES = 'ABILITIES';
export const SKILLS = 'SKILLS';
export const PENDING_FALSE = 'PENDING_FALSE';
export const PENDING_TRUE='PENDING_TRUE';

function SetPersonalInfo(personalInfo) {
    return {
        type: PERSONAL_INFO,
        personalInfo: personalInfo
    }
}

function SetAbilities(abilities) {
    return {
        type: ABILITIES,
        abilities: abilities
    }
}

function SetSkills(skills) {
    return {
        type: SKILLS,
        skills: skills
    }
}

function SetPendingFalse() {
    return {
        type: PENDING_FALSE
    }
}

function SetPendingTrue() {
    return {
        type: PENDING_TRUE
    }
}

export function GetPersonalInfo() {
    SetPendingTrue();
    return (dispatch) => {
        // Get data from wagtail cms here
        return axios
            .get('/api/v2/pages/?type=personalinfo.personalinfo&fields=*')
            .then(data => {
                    dispatch(SetPersonalInfo(data.data.items[0]));
                    dispatch(SetPendingFalse());
                }
            )
            .catch(error => console.log(error));
    }
}

export function GetAbilities() {
    SetPendingTrue();
    return (dispatch) => {
        // Get data from wagtail cms here
        return axios
            .get('/api/v2/pages/?type=abilities.Abilities&fields=*')
            .then(data => {
                    dispatch(SetAbilities(data.data.items));
                    dispatch(SetPendingFalse());
                }
            )
            .catch(error => console.log(error));
    }
}

export function GetSkills() {
    SetPendingTrue();
    return (dispatch) => {
        // Get data from wagtail cms here
        return axios
            .get('/api/v2/pages/?type=skills.skills&fields=*')
            .then(data => {
                    dispatch(SetSkills(data.data.items));
                    dispatch(SetPendingFalse());
                }
            )
            .catch(error => console.log(error));
    }
}





