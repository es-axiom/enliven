class ChatSubscription < ActiveRecord::Base
  validates :user_id, :dm_chat_id, presence: true

  belongs_to :user
  belongs_to :dm_chat
end
