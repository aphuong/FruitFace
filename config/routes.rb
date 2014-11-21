Rails.application.routes.draw do
 
  root 'home#index'
  get '/new' => "fruits#new"
  post '/create' => 'fruits#create'
end
