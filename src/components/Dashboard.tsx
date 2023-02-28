import { useEffect, useState } from "react";
import { ProgramAPI, ResidentAPI } from "../api";
import { Resident, Program } from "../types";
import { ProgramTable } from "./Table";

export const Dashboard = () => {
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
    
    return (<div>
        <ProgramTable rows={programs}/>
    </div>);
}