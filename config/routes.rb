Rails.application.routes.draw do
 
  root 'home#index'
  get '/new' => "fruits#new"
  post '/create' => 'fruits#create'
  get 'fruits' => 'fruits#index'
end
