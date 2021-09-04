import React, {ChangeEvent} from 'react'
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
  status: string
  updateStatus: (userId: string | undefined, status: string) => void
  userId: string | undefined
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  activateEditeMode = () => {
    this.setState({
      editMode: true
    })
  }

  deActivateEditeMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.props.userId, this.state.status)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })

  }

  render() {
    return (
      <>
        {this.state.editMode
          ?
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditeMode}
              value={this.state.status}
            />
          :
          <span onDoubleClick={this.activateEditeMode}>
            {' ' + this.props.status || 'no statuse'}
          </span>
        }
      </>
    )
  }
};