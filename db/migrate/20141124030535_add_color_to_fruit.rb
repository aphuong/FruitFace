class AddColorToFruit < ActiveRecord::Migration
  def change
    add_column :fruits, :color, :string
  end
end
