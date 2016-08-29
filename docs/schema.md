###users###

* id: --integer--, not null, primary key
* username: --string--, not null, indexed, unique
* email: --string--, not null, indexed, unique
* password_digest: --string--, not null
* session_token: --sring--, not null, unique

###teams###

* id: --integer--, not null, primary_key
* user_id: --integer, not null, foreign key(references user)
* name: --string--, not null, unique, indexed
* description: --text--
* searchable: --boolean--, default: true

###channels###

* id: --integer--, not null, primary key
* name: --string--, not null, indexed
* team_id: --integer, not null, foreign key(references team)
* user_id: --integer--, not null, foreign key(references user)
* status: --string--

###dm_chats###

* id: --integer--, not null, primary_key
* title: --string--, not null, indexed
* user_id: --integer, not null, foreign_key(references user)
* searchable: --boolean--, default: true

###messages###

* id: --integer--, not null, primary_key
* author_id: --integer--, not null, foreign_key(references user)
* content: --text--, not null
* chat_id: --integer--, not null, foreign_key(references channel or DM)
