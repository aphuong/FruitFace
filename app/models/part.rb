class Part < ActiveRecord::Base
  has_many :fruits, through: :fruit_parts 
  has_many :fruit_parts
end
