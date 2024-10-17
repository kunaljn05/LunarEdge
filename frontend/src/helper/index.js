const DomainName = 'https://13.201.243.29:8080';
const localDomainName = 'http://localhost:8080';

// Determine if the current environment is local
const isLocal = window.location.hostname === 'localhost';

// Use the appropriate domain based on the  environment
const currentDomain = isLocal ? localDomainName : DomainName;

export const API = {
    register: {
        url: `${currentDomain}/api/query`,
        method: 'post'
    },
    adminLogin: {
        url: `${currentDomain}/api/adminLogin`,
        method: 'post'
    },
    addNewVacancy: {
        url: `${currentDomain}/api/addNewVacancy`,
        method: 'post'
    },
    getParticularVacancy : {
        url : `${localDomainName}/api/getParticularVacancy`,
        method : "post"
    },
    deleteVacancy : {
        url : `${localDomainName}/api/deleteVacancy`,
        method : 'delete'
    },
    getAllVacancy: {
        url: `${currentDomain}/api/getAllVacancy`,
        method: 'get'
    },
    deleteVacancy: {
        url: `${currentDomain}/api/deleteVacancy`,
        method: 'delete'
    },
    updateVacancy: {
        url: `${currentDomain}/api/updateVacancy`,
        method: 'put'
    },
    fillForm: {
        url: `${currentDomain}/api/formFill`,
        method: 'post'
    },
    sendEmail: {
        url: `${currentDomain}/api/sendEmail`,
        method: 'post'
    }
};
