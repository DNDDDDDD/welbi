import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ProgramAPI, ResidentAPI } from "../api";
import { Resident, Program, TableProgram } from "../types";
import { Loading } from "./Loader";
import { ProgramTable } from "./Table";

export const Dashboard: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
        getPrograms();
        getResidents();

        // Minimal time for a loader
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
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
    
    return (isLoading ? <Loading /> : <ProgramTable rows={mergedPrograms as TableProgram[]}/>);
}