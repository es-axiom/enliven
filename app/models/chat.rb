class Chat < ActiveRecord::Base
  validates :channel_id, presence: true

  belongs_to :channel
  has_many :messages
end
