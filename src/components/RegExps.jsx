
const regexNombre = /^[a-zA-Z\s]{3,40}$/;                                                       // eslint-disable-line
const regexApellido = /^[a-zA-Z\s]{3,40}$/;                                                    // eslint-disable-line
const regexMail = /^[a-z0-9\_\.\-]{3,30}[@][a-z]{3,12}[\.][a-z]{2,4}(\.[a-z]{2,4})?$/;   // eslint-disable-line
const regexArea = /^[0-9]{2,4}$/;                                                           // eslint-disable-line
const regexTelefono = /^[0-9]{6,8}$/;                                                           // eslint-disable-line
const regexCalle = /^[a-zA-Z]{3,40}$/;                                                                                      // eslint-disable-line
const regexPito = /^[0-9]{3,4}$/;                                                          // eslint-disable-line
const regexCodigoP = /^[0-9]{3,4}$/;                                                          // eslint-disable-line
const regexDNI = /^[0-9]{7,8}$/;                                                           // eslint-disable-line

export { regexNombre, regexApellido, regexMail, regexArea, regexTelefono, regexCalle, regexPito, regexCodigoP, regexDNI };