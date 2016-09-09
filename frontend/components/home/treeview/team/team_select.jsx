import React from 'react';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTeam: null
    }
    this.teamOptions = this.teamOptions.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    if(this.state.currentTeam) {
      this.props.receiveCurrentTeam(this.state.currentTeam);
    }
  }

  teamOptions(teamArr) {
    let teamList = []
    if(teamArr.length >= 1) {
      teamList = teamArr.map( team => {
        return (
          <option className='drop-option' key={team.id} value={team.id}>
            { team.name }
          </option>
        )
      })
    }
    return teamList;
  }

  _handleSubmit() {
    debugger;
    return e => { this.setState({ currentTeam: e.target.value })};
  }

  render() {
    let teamArr = [];
    if(this.props.teamArr) {
      teamArr = Object.keys(this.props.teamArr).map( key => {
        return this.props.teamArr[key];
      })
    }
    const teamOptions = teamArr ? this.teamOptions(teamArr) : [];
    return (
      <div className='team-select-form'>
        <select id='team-select'
          onChange={ this._handleSubmit }
          value={ this.state.value }>
          { teamOptions }
        </select>
      </div>
    )
  }
}

export default TeamSelect;
