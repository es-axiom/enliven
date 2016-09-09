require 'open-uri'

url='http://swapi.co/api/people'
json = open(url)

parsed = ActiveSupport::JSON.decode(json)
parsed['ResultSet']['Result'].each do |result|

end
