import React from 'react';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { View } from './View';
import { IUser } from '../../interfaces/IUser';
import { getUserInputs } from './getUserInputs';

interface IProps {
  user?: IUser;
  onSave: (newData: IUSerInputs) => void;
}

interface IState {
  inputs: IUSerInputs;
  hasChanged: boolean;
}

export class UserForm extends React.Component<IProps, IState> {
  state: IState = {
    inputs: getUserInputs(this.props.user),
    hasChanged: false,
  };

  // If this is the first time changing the input, call an additional setState to enable the buttons.
  handleChange = (name: keyof IUSerInputs) => (e: any) => {
    e.persist();
    if (!this.state.hasChanged) this.setState({ hasChanged: true });

    this.setState(prev => ({
      inputs: { ...prev.inputs, [name]: e.target.value || '' },
    }));
  };

  // Resets the buttons and the inputs to their initial values.
  handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ hasChanged: false, inputs: getUserInputs(this.props.user) });
  };

  handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;

    this.props.onSave(this.state.inputs);
    this.setState({ hasChanged: false });
  };

  componentDidUpdate(prevProps: IProps) {
    if (this.props.user !== prevProps.user)
      this.setState({ inputs: getUserInputs(this.props.user) });
  }

  render() {
    return (
      <View
        inputs={this.state.inputs}
        onChange={this.handleChange}
        hasChanged={this.state.hasChanged}
        onCancel={this.handleCancel}
        onSave={this.handleSave}
      />
    );
  }
}
