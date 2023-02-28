enum ATTENDANCE_STATUS {
    "Active",
    "Passive",
};

export enum CARE_LEVEL {
    "INDEPENDENT",
    "MEMORY",
    "ASSISTED",
    "LONGTERM",
}

export interface ATTENDANCE {
    programId: number,
    residentId: number,
    status: ATTENDANCE_STATUS,
};