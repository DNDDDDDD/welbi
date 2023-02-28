import moment from "moment";

export const getDuration = (startDate: Date, endDate: Date) => {
    const eventStartTime = moment(startDate);
    const eventEndTime = moment(endDate);

    return eventEndTime.diff(eventStartTime, 'hours'); 
};