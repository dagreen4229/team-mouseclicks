import { Role } from './role';

export class Puser {
  
    User_ID: number;
    Username: string;
    Password: string;
    Email_Address: string;
    user_type: number;
    Role: Role;
    Deleted: boolean;
    token?: string;
}

