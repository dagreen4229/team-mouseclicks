import { Time } from '@angular/common';

export class Appointment {
    Client_ID: number;
    User_ID: number;
    Appointment_Date: Date;
    Appointment_Time: Time;
    Appointment_Notes: String;
    Deleted: Boolean;
}