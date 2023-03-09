export interface IRecipient {
    id: string;
    name: string;
    kinship: string;
    birthday: string;
    gender: string
}

export interface IEmployee {
    id: string;
    profilePhoto: string;
    name: string;
    job: string;
    salary: string | null;
    status: number;
    dateOfHire: string;
    recipient: IRecipient;
    acronym?: string;
}