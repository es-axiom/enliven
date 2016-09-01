class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :team_memberships
  has_many :teams, through: :team_memberships

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def reset_session_token!
    self.session_token = generate_token
    save!
    session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def generate_token
    SecureRandom.urlsafe_base64(32)
  end
end
