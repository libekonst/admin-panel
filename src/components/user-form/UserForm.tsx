import React from 'react';
import { Input } from '../input';
import s from './UserForm.module.scss';

export const UserForm: React.FC = props => {
  return (
    <form>
      <Input label="Name" type="text" name="name" placeholder="Enter name" />
      <Input label="Email address" type="email" name="email" placeholder="Enter email" />
      <Input label="Phone" type="tel" name="phone" placeholder="Enter phone" />
      <Input label="Address" type="text" name="address" placeholder="Enter address" />
      <Input label="Company" type="text" name="company" placeholder="Enter company" />

      <div className={s.buttons}>
        <input className={s.cancel} type="reset" value="Cancel" />
        <input className={s.save} type="submit" value="Save" />
      </div>
    </form>
  );
};
