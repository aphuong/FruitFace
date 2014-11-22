class CreateFruitParts < ActiveRecord::Migration
  def change
    create_table :fruit_parts do |t|
      t.integer :fruit_id
      t.integer :part_id
      t.string :color
      t.timestamps
    end
  end
end
