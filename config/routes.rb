Rails.application.routes.draw do
  root 'profile#home'
  get 'about', to: 'profile#about'
  get 'portfolio', to: 'profile#portfolio'
  get 'hobbies', to: 'profile#hobbies'
  get 'favorites', to: 'profile#favorites'
  get 'contact', to: 'profile#contact'
  get 'meme', to: 'profile#meme'
end