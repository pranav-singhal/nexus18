Rails.application.routes.draw do
  # get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "home#index"
  get '/events' => 'home#events'
  get '/our-team' => 'home#our_team'
  get '/:id' => 'home#event'
end
