import React from 'react';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { Input } from '../input';
import s from './UserForm.module.scss';

interface IProps {
  inputs: IUSerInputs;
  hasChanged: boolean;
  onChange: (name: keyof IUSerInputs) => (e: any) => void;
  onCancel: (e: React.FormEvent<HTMLFormElement>) => void;
  onSave: (e: React.FormEvent<HTMLFormElement>) => void;
}

/** A stateless function component that handles the presentation for the UserForm. */
export const View: React.FC<IProps> = props => {
  const {
    inputs: { name, email, phone, address, company },
    onChange,
    hasChanged,
    onCancel,
    onSave,
  } = props;

  return (
    <form onSubmit={onSave} onReset={onCancel}>
      <Input
        label="Name"
        type="text"
        name="name"
        placeholder="Enter name"
        title="Enter name"
        value={name}
        required
        maxLength={255}
        onChange={onChange('name')}
      />
      <Input
        label="Email address"
        type="email"
        name="email"
        placeholder="Enter email"
        title="Enter email"
        value={email}
        maxLength={255}
        onChange={onChange('email')}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        placeholder="Enter phone"
        title="Enter phone"
        value={phone}
        maxLength={255}
        pattern="^[^a-zA-Z]*$"
        onChange={onChange('phone')}
      />

      <Input
        label="Address"
        type="text"
        name="address"
        placeholder="Enter address"
        title="Enter address"
        value={address}
        maxLength={255}
        onChange={onChange('address')}
      />
      <Input
        label="Company"
        type="text"
        name="company"
        placeholder="Enter company"
        title="Enter company"
        value={company}
        maxLength={255}
        onChange={onChange('company')}
      />

      <div className={s.buttons}>
        {hasChanged && (
          <input className={s.cancel} type="reset" value="Cancel" title="Cancel" />
        )}
        <input
          className={s.save}
          type="submit"
          value="Save"
          title="Save changes"
          disabled={!hasChanged}
        />
      </div>
    </form>
  );
};
