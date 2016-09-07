import React from 'react';

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamList: null
    }
    this.teamList = this.teamList.bind(this);
  }

  componentWillReceiveProps() {
    const teamArr = this.props.teamArr;
    this.teamList(teamArr);
  }

  teamList(teamArr) {
    let teamList = null;
    if(!!teamArr && !!teamArr[0]) {
      teamList = teamArr.map( team => {
        return <option value={team.id}>{team.name}</option>
      })
    }
    this.setState({ teamList: teamList });
  }

  render() {
    return (
      <div className='team-select-form'>
        <select className='team-select' onSubmit={ this._handleSubmit }>
          { this.state.teamList }
        </select>
      </div>
    )
  }
}

export default TeamSelect;
