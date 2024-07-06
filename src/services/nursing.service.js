import axios from "axios"

const _http = axios.create({
    baseURL: "http://localhost:3000"
});

export class NursingService {

    getPatients(){
        return _http.get('/patients');
    }

    getMentalStateExam(){
        return _http.get('/mental-state-exams');
    }

    getMentalStateExamByPatientId(id){
        return _http.get(`/mental-state-exams/?id=${id}`)
    }

    getExaminers(){
        return _http.get('/examiners');
    }
    getExaminerById(id){
        return _http.get(`/examiners/?id=${id}`);
    }


}