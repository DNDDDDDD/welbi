import { FC, useEffect, useState } from "react";
import { ProgramAPI, ResidentAPI } from "../api";
import { Resident, Program, TableProgram } from "../types";
import { ProgramTable } from "./Table";

export const Dashboard: FC = () => {
    const [residents, setResidents] = useState<Resident[]>([]);
    const [programs, setPrograms] = useState<Program[]>([]);

    useEffect(() => {
        const getResidents = async () => {
            const data = await ResidentAPI.getResidents();
            setResidents(data);
        }
        const getPrograms = async () => {
            const data = await ProgramAPI.getPrograms();
            setPrograms(data);
        }
        getResidents();
        getPrograms();
    }, []);

    const filteredRows = programs.map(({ name, location, end, start, levelOfCare, allDay, attendance, }) => ({
        name,
        location, 
        end,
        start, 
        levelOfCare,
        allDay,
        attendance,
    }));

    const mergedPrograms = filteredRows.map((item) => ({
        ...item,
        attendance: item.attendance.map(({ residentId }) => residents.find(({ id }) => id === residentId)),
    }))
    
    return (<ProgramTable rows={mergedPrograms as TableProgram[]}/>);
}