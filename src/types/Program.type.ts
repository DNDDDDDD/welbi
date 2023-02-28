import { ATTENDANCE, CARE_LEVEL } from './general.type';

enum DIMENSION {
    "Intellectual",
    "Community",
    "Physical",
    "Social",
    "Emotional",
}

export interface Program {
    id: string,
    parentId: string | null,
    name: string,
    location: string,
    allDay: boolean,
    start: Date,
    end: Date,
    tags: string[],
    createdAt: string,
    updatedAt: string,
    dimension: DIMENSION,
    facilitators: string[],
    levelOfCare: CARE_LEVEL[]
    hobbies: string[],
    recurrence: string | null,
    isRepeated: boolean,
    applicantId: string | null,
    attendance: ATTENDANCE[],
};