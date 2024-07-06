export class MentalStateExam{
    constructor(id='',patientId='',examinerId='',examDate='',orientationScore=0,registrationScore=0,attentionAndCalculationScore=0,recallScore=0,languageScore=0){
        this.id = id;
        this.patientId = patientId;
        this.examinerId = examinerId;
        this.examDate = examDate;
        this.orientationScore = orientationScore;
        this.registrationScore = registrationScore;
        this.attentionAndCalculationScore = attentionAndCalculationScore;
        this.recallScore = recallScore;
        this.languageScore = languageScore;
    }
}