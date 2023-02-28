import { CARE_LEVEL, ATTENDANCE } from './general.type';

enum RESIDENT_STATUS {
    "HERE",
    "LOA",
    "HOSPITAL",
    "ISOLATION",
};
enum AMBULATION {  
    "CANE",
    "NOLIMITATIONS",
    "WALKER",
    "WHEELCHAIR",
}

export interface Resident {
    id: 3,
    name: string,
    firstName: string,
    lastName: string,
    preferredName?: string,
    status: RESIDENT_STATUS,
    room: string,
    levelOfCare: CARE_LEVEL,
    ambulation: AMBULATION,
    birthDate: Date
    moveInDate: Date,
    createdAt: Date,
    updatedAt: Date,
    applicantId?: string,
    attendance: ATTENDANCE[],
}