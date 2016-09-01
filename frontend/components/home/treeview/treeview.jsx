import React from 'react';
import TeamContainer from '../team/team_container';

class TreeView extends React.Component {
  componentDidMount() {
// TODO: Populate Channels
  }

  render() {
    return (
      <div>
        <TeamContainer />
        // TODO: Add channels container
        // TODO Add DM chats container
      </div>
    )
  }
}

export default TreeView;
