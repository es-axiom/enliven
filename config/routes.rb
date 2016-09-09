Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :teams
    resources :channels
    resources :chats
    resources :dm_chats
    resources :dms
    resources :dm_subs
    resources :messages
  end
  root 'static_pages#root'
end
