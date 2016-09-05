class CreateChatSubscriptions < ActiveRecord::Migration
  def change
    create_table :chat_subscriptions do |t|
      t.integer :user_id, null: false, index: true
      t.integer :dm_chat_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
