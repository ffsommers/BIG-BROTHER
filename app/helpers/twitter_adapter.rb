client = Twitter::Streaming::Client.new do |config|
  config.consumer_key = ENV['CONSUMER_KEY']
  config.consumer_secret = ENV['CONSUMER_SECRET']
  config.access_token =  ENV['ACCESS_TOKEN']
  config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']
end

def trump_talk
  client.filter({:follow => '25073877'}) do |object|
    puts object.text if object.is_a?(Twitter::Tweet)
end

def trump_stream
  client.user({:with => '25073877'}) do |object|
    puts object.text if object.is_a?(Twitter::tweet)
end
