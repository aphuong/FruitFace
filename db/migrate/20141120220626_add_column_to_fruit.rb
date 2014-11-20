class AddColumnToFruit < ActiveRecord::Migration
  def change
    add_column :fruits, :bodyGrape, :boolean
    add_column :fruits, :squareGlasses, :boolean
    add_column :fruits, :mustache, :boolean
    add_column :fruits, :mustache_two, :boolean
  end
end
