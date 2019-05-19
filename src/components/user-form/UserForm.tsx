import React from 'react';
import { Input } from '../input';
import s from './UserForm.module.scss';
import { IUSerInputs } from '../../interfaces/IUserInputs';

interface IProps {
  user: IUSerInputs;
}

export const UserForm: React.FC<IProps> = props => {
  const {
    user: { name, email, phone, address, company },
  } = props;
  return (
    <form>
      <Input
        label="Name"
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
      />
      <Input
        label="Email address"
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        placeholder="Enter phone"
        value={phone}
      />

      <Input
        label="Address"
        type="text"
        name="address"
        placeholder="Enter address"
        value={address}
      />
      <Input
        label="Company"
        type="text"
        name="company"
        placeholder="Enter company"
        value={company}
      />

      <div className={s.buttons}>
        <input className={s.cancel} type="reset" value="Cancel" />
        <input className={s.save} type="submit" value="Save" />
      </div>
    </form>
  );
};
