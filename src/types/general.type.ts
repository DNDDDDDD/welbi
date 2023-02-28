enum AttendanceStatus {
	'Active',
	'Passive',
}

export enum CareLevel {
	'INDEPENDENT',
	'MEMORY',
	'ASSISTED',
	'LONGTERM',
}

export type Attendance = {
	programId: number;
	residentId: number;
	status: AttendanceStatus;
};
