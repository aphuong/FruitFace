class Fruit < ActiveRecord::Base
  has_many :parts, through: :fruit_parts
  has_many :fruit_parts

  before_save :filter_obscenity

  def filter_obscenity
    self.name = Obscenity.replacement("I love fruits").sanitize(name)
  end

  # validates :name, obscenity: { sanitize: true, replacement: "I love fruits" }

end