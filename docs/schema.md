###users###

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key|
| username | string | not null, indexed, unique |
| email | string | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, unique |

###teams###

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| name | string | not null, unique, indexed |
| description | text | |
| searchable | boolean | default: true |

###channels###

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| name | string | not null, indexed |
| team_id | integer | not null, foreign key (references _team_) |
| user_id | integer | not null, foreign key (references _user_, refers to creator) |
| status | string | |

###dm_chats###

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| title | string | not null, indexed |
| user_one_id | integer | not null, foreign key (references _user1_) |
| user_two_id | integer | not null, foreign key (references _user2_) |
| searchable | boolean | default: true |

###messages###

| column_name | data type | details |
| ----------- | --------- | ------- |
| id | integer | not null, primary key |
| chat_id | integer | not null, foreign key (references _channel_ or _DM_) |
| author_id | integer | not null, foreign key (references _user_) |
| content | text | not null |
