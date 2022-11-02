export interface IdefaultObject {
   answer: string;
}

export interface IshiftCreate {
   started_at: string,
   finished_at: string
}

export interface IResponceShifts extends IshiftCreate {
   id: string;
   status: "started" | "finished" | "preparing" | "cancelled" | "";
}

export interface IInformation {
   id: string;
   status: "started" | "finished" | "preparing" | "cancelled";
   started_at: string;
   finished_at: string;
}