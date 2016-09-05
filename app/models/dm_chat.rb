class DmChat < ActiveRecord::Base
  validates :title, presence: true

  has_many :chat_subscriptions
  has_many :users, through: :chat_subscriptions
  has_many :messages
end
