export type User = {
	id: number;
	token: string;
	email: string;
	url: string | undefined;
	starts: number;
	submissions: number;
	firstStart: Date;
	firstSubmission: Date;
	lastSubmission: Date;
};
