import { IUSerInputs } from './IUserInputs';

/** Represents a user object. */
export interface IUser extends IUSerInputs {
  id: string;
  photo?: string;
}
