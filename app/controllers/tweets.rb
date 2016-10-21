get '/app' do
  @map_key=ENV['MAP_KEY']
  @tweets = Tweet.all
  # if !logged_in?
     redirect '/login'

  # elsif request.xhr?
  # 	trump_stream
  #   @trump_stream_array.to_json
  # else
    erb :"tweets/app"
  # end
end





