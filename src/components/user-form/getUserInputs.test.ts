import { getUserInputs } from './getUserInputs';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { IUser } from '../../interfaces/IUser';

describe("getUserInputs returns an object with a IUser's editable properties ", () => {
  it('should return a mock object if the user is omitted', () => {
    const mock: IUSerInputs = {
      name: '',
      email: '',
      address: '',
      company: '',
      phone: '',
    };

    expect(getUserInputs()).toEqual(mock);
  });

  it("should extract a user's editable properties into an object", () => {
    const user: IUser = {
      id: '5c093af1c6ee9117a581c7d6',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'Bates Washington',
      company: 'ZOLAREX',
      email: 'bates.washington@zolarex.io',
      phone: '+1 (915) 447-2207',
      address: '958 Brevoort Place, Ona, Maine, 2433',
    };

    const editable: IUSerInputs = {
      name: 'Bates Washington',
      company: 'ZOLAREX',
      email: 'bates.washington@zolarex.io',
      phone: '+1 (915) 447-2207',
      address: '958 Brevoort Place, Ona, Maine, 2433',
    };

    expect(getUserInputs(user)).toEqual(editable);
  });

  it('should add an IUserInputs property equal to an empty string, if the property was initially omitted ', () => {
    const user = {
      id: '5c093af1c6ee9117a581c7d6',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
      name: 'Bates Washington',
      company: 'ZOLAREX',
    };
    const editable: IUSerInputs = {
      name: 'Bates Washington',
      company: 'ZOLAREX',
      email: '',
      phone: '',
      address: '',
    };

    // @ts-ignore -> remove properties
    expect(getUserInputs(user)).toEqual(editable);
  });
});
