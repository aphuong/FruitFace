class FruitsController < ApplicationController 

  def index
    @fruits = Fruit.all
  end

  def new
    @fruit = Fruit.new
  end

  def create

    @fruit = Fruit.new(fruit_params)
    # binding.pry

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
    # params[:fruit][:key] ||= []
    params.require(:fruit).permit(:bodyRound, :bodyPear, :bodyStrawberry, :eyesOpen, :eyesClosed, :mouthSad, :mouthHappy, :mouthOpen, :roundGlasses, :freckles, :hairLeaf, :hairDoubleLeaf, :hairShaggy, :bodyGrape, :squareGlasses, :mustache, :mustache_two)
  end





end


  
 