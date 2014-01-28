get '/' do
  # Look in app/views/index.erb
  @list = Item.order("position ASC")
  # @list.order(position: :desc)
  erb :index
end

post '/ajax' do
  input = params[:names].split("\n")
  Item.update_location(input)
end
