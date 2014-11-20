class CreateFruits < ActiveRecord::Migration
  def change
    create_table :fruits do |t|
      t.boolean :bodyRound
      t.boolean :bodyPear
      t.boolean :bodyStrawberry
      t.boolean :eyesOpen
      t.boolean :eyesClosed
      t.boolean :mouthSad
      t.boolean :mouthHappy
      t.boolean :mouthOpen
      t.boolean :legs
      t.boolean :arms
      t.boolean :roundGlasses
      t.boolean :freckles
      t.boolean :hairLeaf
      t.boolean :hairDoubleLeaf
      t.boolean :hairShaggy
      t.timestamps
    end
  end
end
