class CreateDmChats < ActiveRecord::Migration
  def change
    create_table :dm_chats do |t|
      t.string :title, null: false
      t.boolean :searchable, default: false
      t.timestamps null: false
    end
  end
end
