class DmSub < ActiveRecord::Base
  validates :dm_chat_id, :user_id, presence: true

  belongs_to :user
  belongs_to :dm_chat
end
