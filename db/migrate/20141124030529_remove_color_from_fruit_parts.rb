class RemoveColorFromFruitParts < ActiveRecord::Migration
  def change
    remove_column :fruit_parts, :color, :string
  end
end
