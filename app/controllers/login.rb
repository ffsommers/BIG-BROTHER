get '/session-viewer' do
  session.inspect
end

get '/login' do
  erb :"users/login"
end

post '/login' do
  @user = User.find_by(params[:username])
  if @user.password == params[:hashed_password]
    session[:id] = @user.id
    redirect '/app'
  else
   erb :"login"
  end
end

get '/log_out' do
  session.delete(:id)
  redirect '/'
end
