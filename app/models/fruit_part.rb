class FruitPart < ActiveRecord::Base
  belongs_to :fruit
  belongs_to :part
end
