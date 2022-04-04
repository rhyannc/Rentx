import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.25.7:3333'
    //baseURL: 'https://homologacao.clinux.com.br/clinicapixel/cgi-bin/dwserver.cgi/se1'
});

export {api};