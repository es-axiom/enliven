class Message < ActiveRecord::Base
  validates :content, :user_id, presence: true

  belongs_to :user
  belongs_to :chat
end
