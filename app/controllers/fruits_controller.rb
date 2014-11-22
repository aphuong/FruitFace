class FruitsController < ApplicationController

  def index
    @fruits = Fruit.all
    # loop through all fruits
    # check if there are true values
    # if yes, create a new svg container, use that key to run the function, appending parts to the svg
    # else do nothing.
  end

  def show
    @fruit = Fruit.find(params[:id])

    respond_to do |format|
      format.json {
        render json: { fruit: @fruit, parts: @fruit.parts }
      }
      format.html {}
    end
  end

  def new
    @fruit = Fruit.new
  end

  def create

    @fruit = Fruit.new(fruit_params)
    parts_params.each do |k, v|
      @fruit.parts << Part.create(identifier: v["identifier"])
    end

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
    params.require(:fruit_and_parts)[:fruit].permit(:name)
  end

  def parts_params
    params.require(:fruit_and_parts)[:parts]
  end
end
