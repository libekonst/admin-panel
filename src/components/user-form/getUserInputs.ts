import { IUser } from '../../interfaces/IUser';
import { IUSerInputs } from '../../interfaces/IUserInputs';

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
