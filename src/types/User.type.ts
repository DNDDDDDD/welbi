export interface User {
    id: number;
    token: string;
    email: string;
    url: string | null,
    starts: number,
    submissions: number,
    firstStart: Date,
    firstSubmission: Date,
    lastSubmission: Date,
}