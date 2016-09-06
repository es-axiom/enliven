class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :content, null: false
      t.integer :chat_id, null: false
      t.integer :user_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
