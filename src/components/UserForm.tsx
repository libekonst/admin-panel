import React from 'react';
import { Input } from './input';

export const UserForm: React.FC = props => {
  return (
    <form style={{ padding: 20 }} action="no">
      <Input label="Name" type="text" name="name" placeholder="Enter name" />
      <Input label="Email address" type="email" name="email" placeholder="Enter email" />
      <Input label="Phone" type="tel" name="phone" placeholder="Enter phone" />
      <Input label="Address" type="text" name="address" placeholder="Enter address" />
      <Input label="Company" type="text" name="company" placeholder="Enter company" />

      <input type="reset" value="Cancel" />
      <input type="submit" value="Save" />
    </form>
  );
};
