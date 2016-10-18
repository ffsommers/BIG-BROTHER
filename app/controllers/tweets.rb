get '/app' do
   @map_key=ENV['MAP_KEY']
    p @map_key
      trump_talk

  erb :"tweets/app"
end




