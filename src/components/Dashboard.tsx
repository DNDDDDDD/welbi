import {type FC, useEffect, useState} from 'react';
import {programApi, residentApi} from '../api';
import {type Resident, type Program, type TableProgram} from '../types';
import {Loading} from './Loader';
import {ProgramTable} from './Table';

export const Dashboard: FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [residents, setResidents] = useState<Resident[]>([]);
	const [programs, setPrograms] = useState<Program[]>([]);

	useEffect(() => {
		const getResidents = async () => {
			const data = await residentApi.getResidents();
			setResidents(data);
		};

		const getPrograms = async () => {
			const data = await programApi.getPrograms();
			setPrograms(data);
		};

		try {
			void getPrograms();
			void getResidents();
		} catch (e) {
			console.log(e);
		}

		// Minimal time for a loader
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	const filteredRows = programs.map(({name, location, end, start, levelOfCare, allDay, attendance}) => ({
		name,
		location,
		end,
		start,
		levelOfCare,
		allDay,
		attendance,
	}));

	const mergedPrograms = filteredRows.map(item => ({
		...item,
		attendance: item.attendance.map(({residentId}) => residents.find(({id}) => id === residentId)),
	}));

	return (isLoading ? <Loading /> : <ProgramTable rows={mergedPrograms as TableProgram[]}/>);
};
