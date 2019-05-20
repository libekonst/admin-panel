import { IUser } from '../../interfaces/IUser';
import { IUSerInputs } from '../../interfaces/IUserInputs';

/** 
 * Extracts an `IUser`'s editable properties into an object
 * or create's a mock object with the same properties if no user is provided.
 * @returns An `IUserInputs` object used by the user form as the initial inputs state.
 */
export function getUserInputs(user?: IUser): IUSerInputs {
  if (!user)
    return {
      name: '',
      email: '',
      address: '',
      company: '',
      phone: '',
    };

  return {
    name: user.name || '',
    email: user.email || '',
    address: user.address || '',
    company: user.company || '',
    phone: user.phone || '',
  };
}
