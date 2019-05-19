import React from 'react';
import { IUSerInputs } from '../../interfaces/IUserInputs';
import { IUser } from '../../interfaces/IUser';
import { View } from './View';

interface IProps {
  inputs: IUSerInputs;
}

interface IState {
  inputs: IUSerInputs;
  hasChanged: boolean;
}

export class UserForm extends React.Component<IProps, IState> {
  initialInputs: IUSerInputs = this.props.inputs;

  state: IState = {
    inputs: this.props.inputs,
    hasChanged: false,
  };

  handleChange = (name: keyof IUSerInputs) => (e: any) => {
    e.persist();

    if (!this.state.hasChanged) this.setState({ hasChanged: true });

    this.setState(prev => ({
      inputs: { ...prev.inputs, [name]: e.target.value },
    }));
  };

  handleCancel = () => this.setState({ hasChanged: false, inputs: this.initialInputs });

  componentDidUpdate(prevProps: IProps) {
    if (this.props.inputs != prevProps.inputs) {
      this.initialInputs = this.props.inputs;
      this.setState({ inputs: this.props.inputs });
    }
  }

  render() {
    return (
      <View
        user={this.state.inputs}
        onChange={this.handleChange}
        hasChanged={this.state.hasChanged}
        onCancel={this.handleCancel}
      />
    );
  }
}
