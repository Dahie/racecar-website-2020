set :haml, { :format => :html5 }

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir,    'assets/css'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

#activate :minify_css

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host = 'www.unmedial.de'
  deploy.path = 'racecar-2020/'
  deploy.user = 'u19168'
  # Optional Settings
  # deploy.port  = 5309 # ssh port, default: 22
  # deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end
