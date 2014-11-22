class Fruit < ActiveRecord::Base
  has_many :parts, through: :fruit_parts
  has_many :fruit_parts
end