get '/' do
  # Look in app/views/index.erb
  @list = Item.order("position ASC")
  # @list.order(position: :desc)
  erb :index
end
