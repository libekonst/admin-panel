import { IUSerInputs } from './IUserInputs';

export interface IUser extends IUSerInputs {
  id: string;
  photo?: string;
}
