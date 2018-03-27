Rails.application.config.middleware.insert_before 0, Rack::Cors, :debug => true, :logger => (-> { Rails.logger })  do
  allow do
    origins 'http://localhost:3000'
    resource '*',
             :headers => :any,
             :methods => [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
