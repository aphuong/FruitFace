class FruitsController < ApplicationController 

  def index
    @fruits = Fruit.all
  end

  def new

  end

  


end