
const DomainName = 'https://lunaredge.in'
const localDomainName = 'http://localhost:8080'


 
// export const API = {
//     register : {
//        url : `${DomainName}/api/query`,
//         method : 'post'
//     },
//     adminLogin  : {
//         url : `${DomainName}/api/adminLogin`,
//         method : 'post'
//        },
//     addNewVacancy : {
//         url : `${DomainName}/api/addNewVacancy`,
//         method : 'post'
//     },
//     getAllVacancy : {
//         url : `${DomainName}/api/getAllVacancy`,
//         method : "get"
//     },
// getParticularVacancy : {
//     url : `${DomainName}/api/getParticularVacancy`,
//     method : "post"
// },
//     deleteVacancy : {
//         url : `${DomainName}/api/deleteVacancy`,
//         method : 'delete'
//     },
//     updateVacancy : {
//         url : `${DomainName}/api/updateVacancy`,
//         method : 'put'
//     },
//     fillForm : {
//         url : `${DomainName}/api/formFill`,
//         method : 'post'
//     },
//     sendEmail : {
//        url : `${DomainName}/api/sendEmail`,
//        method : 'post'
//     }
// }


export const API = {
    register : {
       url : `${localDomainName}/api/query`,
        method : 'post'
    },
    adminLogin  : {
        url : `${localDomainName}/api/adminLogin`,
        method : 'post'
       },
    addNewVacancy : {
        url : `${localDomainName}/api/addNewVacancy`,
        method : 'post'
    },
    getAllVacancy : {
        url : `${localDomainName}/api/getAllVacancy`,
        method : "get"
    },
    getParticularVacancy : {
        url : `${localDomainName}/api/getParticularVacancy`,
        method : "post"
    },
    deleteVacancy : {
        url : `${localDomainName}/api/deleteVacancy`,
        method : 'delete'
    },
    updateVacancy : {
        url : `${localDomainName}/api/updateVacancy`,
        method : 'put'
    },
    fillForm : {
        url : `${localDomainName}/api/formFill`,
        method : 'post'
    },
    sendEmail : {
       url : `${localDomainName}/api/sendEmail`,
       method : 'post'
    }
}