import { useEffect, useState } from "react";
import { Resident, Program } from "../types";

export const Dashboard = () => {
    const [residents, setResidents] = useState<Resident[]>([]);
    const [programs, setPrograms] = useState<Program[]>([]);

    useEffect(() => {
        fetch('https://welbi.org/api/residents', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        }).then(res => res.json()).then(data => setResidents(data));

        fetch('https://welbi.org/api/programs', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        }).then(res => res.json()).then(data => setPrograms(data));
    }, []);
    

    return (<div>
        Dashboard
    </div>);
}