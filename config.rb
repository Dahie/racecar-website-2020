set :haml, { :format => :html5 }

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir,    'assets/css'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

activate :dragonfly_thumbnailer

dev_com = './node_modules/webpack/bin/webpack.js --watch -d source-map --color'
prod_com = './node_modules/webpack/bin/webpack.js --bail'

activate :external_pipeline,
  name: :webpack,
  # using yarn command at `./node_modules/yarn/bin/yarn`
  # because it won't be globally installed on build server
  command: build? ? prod_com : dev_com,
  source: '.tmp/dist',
  latency: 1

configure :development do
  activate :livereload
end

configure :build do
  ignore '/javascripts/components/*.js'
  ignore '/javascripts/site.js'

  activate :asset_hash
  activate :gzip
  activate :minify_html, remove_input_attributes: false

  set :relative_links, true
  activate :relative_assets
end

# activate :deploy do |deploy|
#   deploy.deploy_method = :rsync

#   if ENV.fetch('ENV', nil) == 'production'
#     deploy.host = 'v033134.kasserver.com'
#     deploy.path = '/www/htdocs/w01af025/team-racecar.org/'
#     deploy.user = 'ssh-w01af025'
#   else
#     deploy.host = 'www.unmedial.de'
#     deploy.path = 'racecar-2020/'
#     deploy.user = 'u19168'
#   end

#   deploy.build_before  = true # always use --no-clean options
#   # Optional Settings
#   # deploy.port  = 5309 # ssh port, default: 22
#   # deploy.clean = true # remove orphaned files on remote host, default: false
#   # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
# end
