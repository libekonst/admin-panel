import React from 'react';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { Input } from '../input';
import s from './UserForm.module.scss';

interface IProps {
  user: IUSerInputs;
  onChange: (name: keyof IUSerInputs) => (e: any) => void;
  hasChanged: boolean;
  onCancel: () => void;
}
export const View: React.FC<IProps> = props => {
  const {
    user: { name, email, phone, address, company },
    onChange,
    hasChanged,
    onCancel,
  } = props;
  return (
    <form>
      <Input
        label="Name"
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={onChange('name')}
      />
      <Input
        label="Email address"
        type="email"
        name="email"
        placeholder="Enter email"
        value={email}
        onChange={onChange('email')}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        placeholder="Enter phone"
        value={phone}
        onChange={onChange('phone')}
      />

      <Input
        label="Address"
        type="text"
        name="address"
        placeholder="Enter address"
        value={address}
        onChange={onChange('address')}
      />
      <Input
        label="Company"
        type="text"
        name="company"
        placeholder="Enter company"
        value={company}
        onChange={onChange('company')}
      />

      <div className={s.buttons}>
        {hasChanged && (
          <input className={s.cancel} type="reset" value="Cancel" onClick={onCancel} />
        )}
        <input className={s.save} type="submit" value="Save" disabled={!hasChanged} />
      </div>
    </form>
  );
};
