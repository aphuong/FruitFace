class FruitsController < ApplicationController 

  def index
    @fruits = Fruit.all
    # loop through all fruits
    # check if there are true values
    # if yes, create a new svg container, use that key to run the function, appending parts to the svg
    # else do nothing.
  end

  def new
    @fruit = Fruit.new
  end

  def create
    @fruit = Fruit.new(fruit_params)

    if @fruit.save
      respond_to do |format|
        format.json{
          render json: @fruit
        }
      end
    end
  end





  private

  def fruit_params
    params.require(:fruit).permit(:bodyRound, :bodyPear, :bodyStrawberry, :eyesOpen, :eyesClosed, :mouthSad, :mouthHappy, :mouthOpen, :roundGlasses, :freckles, :hairLeaf, :hairDoubleLeaf, :hairShaggy, :bodyGrape, :squareGlasses, :mustache, :mustache_two)
  end





end


  
 