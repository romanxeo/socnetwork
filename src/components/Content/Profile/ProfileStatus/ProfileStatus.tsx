import React, {ChangeEvent} from 'react'
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })

  }

  render() {
    return (
      <div>
        {this.state.editMode
          ?
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditeMode}
              value={this.state.status}
            />
          </div>
          :
          <div>
          <span onDoubleClick={this.activateEditeMode}>
            {this.props.status || 'no statuse'}
          </span>
          </div>
        }
      </div>
    )
  }
}