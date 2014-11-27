Rails.application.routes.draw do

  root 'home#index'
  get '/new' => "fruits#new", :as => "new_fruit"
  post '/create' => 'fruits#create'
  get '/fruits' => 'fruits#index'
  get '/fruits/:id' => 'fruits#show', :as => "show_fruit"
  get '/about' => 'home#about'
end
