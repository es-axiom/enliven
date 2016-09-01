class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name, null: false, index: true
      t.text :description
      t.boolean :searchable, default: true
      t.timestamps null: false
    end
  end
end
