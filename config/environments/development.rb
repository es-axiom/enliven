require 'pusher'

Rails.application.configure do
  Pusher.app_id = '245611'
  Pusher.key = '328202a524f022257ee5'
  Pusher.secret = 'db32fd9729d4fc9d5a8b'
  Pusher.logger = Rails.logger
  config.cache_classes = false
  Pusher.encrypted = true

  config.eager_load = false

  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  config.action_mailer.raise_delivery_errors = false

  config.active_support.deprecation = :log

  config.active_record.migration_error = :page_load

  config.assets.debug = true

  config.assets.digest = true

  config.assets.raise_runtime_errors = true
end
