get '/app' do
  @map_key=ENV['MAP_KEY']
  @tweets = Tweet.all
  if request.xhr?
    @tweets.to_json
  else
    erb :"tweets/app"
  end
end




