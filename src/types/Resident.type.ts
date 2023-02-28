import {type CareLevel, type Attendance} from './general.type';

enum ResidentStatus {
	'HERE',
	'LOA',
	'HOSPITAL',
	'ISOLATION',
}
enum Ambulation {
	'CANE',
	'NOLIMITATIONS',
	'WALKER',
	'WHEELCHAIR',
}

export type Resident = {
	id: 3;
	name: string;
	firstName: string;
	lastName: string;
	preferredName?: string;
	status: ResidentStatus;
	room: string;
	levelOfCare: CareLevel;
	ambulation: Ambulation;
	birthDate: Date;
	moveInDate: Date;
	createdAt: Date;
	updatedAt: Date;
	applicantId?: string;
	attendance: Attendance[];
};
