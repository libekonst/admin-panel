import React from 'react';
import { UserList } from '../user-list';
import { UserForm } from '../user-form';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { IUser } from '../../interfaces/IUser';
import s from './View.module.scss';

interface IProps {
  users: IUser[];
  selected?: string;
  onSelectUser: (id: string) => () => void;
  onSave: (newData: IUSerInputs) => void;
}

/** A stateless function component that handle's the App's presentation layer. */
export const View: React.FC<IProps> = props => {
  const { onSave, users, selected, onSelectUser } = props;

  return (
    <article className={s.panel}>
      <section className={s['squeezeable-section']}>
        <UserList onSelectUser={onSelectUser} users={users} selected={selected} />
      </section>
      <section className={s['form-section']}>
        <UserForm user={users.find(u => u.id === selected)} onSave={onSave} />
      </section>
    </article>
  );
};
