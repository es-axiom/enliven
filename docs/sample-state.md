# Sample State #

```
{
  currentUser: {
    id: 1,
    username: 'dummy-one'
  },
  forms: {
    signUp: {},
    logIn: {},
    createTeam: {},
    createChannel: {},
    createDM: {}
  }
  teams {
    1: {
      name: "Our team",
      user_id, 1,
      description: "",
      searchable: true
    }
  }
  channels {
    1: {
      name: "",
      status: "our goal/interest",
      team_id: 1
      user_id: 1
    }
  }
  dm_chats {
    1: {
      title: "",
      user_id: 1,
      searchable: true
    }
  }
  messages {
    1: {
      author_id: 1,
      content: "",
      chat_id: 1,
    }
  }

}
```
