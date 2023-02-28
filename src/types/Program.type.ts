import {type Attendance, type CareLevel} from './general.type';
import {type Resident} from './Resident.type';

enum Dimension {
	'Intellectual',
	'Community',
	'Physical',
	'Social',
	'Emotional',
}

export type Program = {
	id: string;
	parentId: string | undefined;
	name: string;
	location: string;
	allDay: boolean;
	start: Date;
	end: Date;
	tags: string[];
	createdAt: string;
	updatedAt: string;
	dimension: Dimension;
	facilitators: string[];
	levelOfCare: CareLevel[];
	hobbies: string[];
	recurrence: string | undefined;
	isRepeated: boolean;
	applicantId: string | undefined;
	attendance: Attendance[];
};

export type TableProgram = {
	'name': string;
	'location': string;
	'end': Date;
	'start': Date;
	'allDay': boolean;
	'levelOfCare': CareLevel[];
	attendance: Resident[];
};
