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

/** A container component for the form's internal state. The user and the save service are provided by the parent.  */
export class UserForm extends React.Component<IProps, IState> {
  state: IState = {
    inputs: getUserInputs(this.props.user),
    hasChanged: false,
  };

  /**
   * If this is the first time changing the input, call an additional setState to enable the buttons.
   * Could use `e.target.name` instead of first param, but might not be safe because the `name` attr is optional.
   */
  handleChange = (name: keyof IUSerInputs) => (e: any) => {
    e.persist();
    if (!this.state.hasChanged) this.setState({ hasChanged: true });

    this.setState(prev => ({
      inputs: { ...prev.inputs, [name]: e.target.value || '' },
    }));
  };

  /** Use html form validation. If input is valid, call the save service received from props and reset the buttons. */
  handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) return;

    this.props.onSave(this.state.inputs);
    this.setState({ hasChanged: false });
  };

  /** Resets the buttons and the inputs to their initial values. */
  resetState = () =>
    this.setState({ hasChanged: false, inputs: getUserInputs(this.props.user) });

  /** When the reset event fires, reset the form's state. */
  handleCancel = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.resetState();
  };

  /** If the selected user has changed, reset the form's state. */
  componentDidUpdate(prevProps: IProps) {
    if (this.props.user !== prevProps.user) this.resetState();
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
