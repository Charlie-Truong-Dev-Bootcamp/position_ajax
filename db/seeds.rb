require 'faker'

module Seeder
  def self.seed
    10.times do |n|
      Item.create(name: Faker::Name.name, position: n)
    end
  end
end

Seeder.seed
