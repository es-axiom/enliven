class Channel < ActiveRecord::Base
  validates :name, :team_id, presence: true
  validates :status, length: { maximum: 120 }, allow_nil: true

  belongs_to :team
  has_one :chat
  has_many :messages, through: :chat
end
