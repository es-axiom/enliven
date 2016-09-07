import React from 'react';
import { receiveCurrentTeam } from '../../../actions/team_actions';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.teamOptions = this.teamOptions.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  teamOptions(teamArr) {
    let teamList = []
    if(teamArr.length >= 1) {
      teamList = teamArr.map( team => {
        return <option key={team.id} value={team.id}>{team.name}</option>
      })
    }
    return teamList;
  }

  _handleSubmit() {
    let el = document.getElementById('team-select');
    let cT = e.options[e.selectedIndex].value;
    this.props.receiveCurrentTeam(cT);
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
        <select className='team-select' onSubmit={ this._handleSubmit }>
          {teamOptions }
        </select>
      </div>
    )
  }
}

export default TeamSelect;
