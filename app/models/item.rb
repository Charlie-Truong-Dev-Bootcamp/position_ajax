
class Item < ActiveRecord::Base
  # Remember to create a migration!

  def self.update_location(names)
    names.each_with_index do |name, index|
      person = self.where(name: name)[0]
      person.position = index
      person.save
    end
  end
end
