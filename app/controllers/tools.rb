get '/tools' do
  if request.xhr?
    trump_talk
  end
 erb :"users/helper"
end


