##users##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key|
| username | string | not null, indexed, unique |
| email | string | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, unique |

-------------------

##teams##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| name | string | not null, unique, indexed |
| description | text | |
| searchable | boolean | default: true |

-------------------

##team_memberships##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| moderator | boolean | default: false |
| team_id | integer | not null, foreign_key (references team) |
| user_id | integer | not null, foreign_key (references user) |

-------------------

##channels##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| name | string | not null, indexed |
| team_id | integer | not null, foreign key (references _team_) |
| status | string | |

-------------------

##chats##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| channel_id | integer | not null, foreign key (references channel) |

-------------------

##dm_chats##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |

-------------------

##dms##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| content | string | not null |
| dm_chat_id | integer | not null, foreign key (references dm_chat) |
| user_id | integer | not null, foreign key (references user) |

-------------------

##dm_subs##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| dm_chat_id | integer | not null, foreign key (references dm_chat) |
| user_id | integer | not null, foreign key (references user) |

-------------------

##messages##

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| content | string | not null |
| chat_id | integer | foreign_key (references chat) |
| user_id | integer | foreign_key (references user) |
