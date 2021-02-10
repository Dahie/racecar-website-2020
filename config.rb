set :haml, { :format => :html5 }

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

set :css_dir,    'assets/css'
set :images_dir, 'assets/images'
set :js_dir,     'assets/javascripts'

activate :dragonfly_thumbnailer

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'yarn run build' : 'yarn run start',
  source: '.tmp/dist',
  latency: 1

#activate :minify_css
configure :build do
  # activate :favicon_maker do |f|
  #   f.template_dir  = File.join(root, 'source/assets/images/logos/')
  #   f.output_dir    = File.join(root, 'build')
  #   f.icons = {
  #     'favicon_base.png' => [
  #       { icon: 'chrome-touch-icon-192x192.png' },
  #       { icon: 'apple-touch-icon.png', size: '152x152' },
  #       { icon: 'ms-touch-icon-144x144-precomposed.png', size: '144x144' },
  #       { icon: 'favicon-196x196.png' },
  #       { icon: 'favicon-160x160.png' },
  #       { icon: 'favicon-96x96.png' },
  #       { icon: 'favicon-32x32.png' },
  #       { icon: 'favicon-16x16.png' },
  #       { icon: 'favicon.ico', size: '64x64,32x32,24x24,16x16' }
  #     ]
  #   }
  # end

  activate :asset_hash
  activate :gzip
  #activate :minify_css
  activate :minify_html, remove_input_attributes: false

  set :relative_links, true
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync

  if ENV.fetch('ENV', nil) == 'production'
    deploy.host = 'v033134.kasserver.com'
    deploy.path = '/www/htdocs/w01af025/team-racecar.org/'
    deploy.user = 'ssh-w01af025'
  else
    deploy.host = 'www.unmedial.de'
    deploy.path = 'racecar-2020/'
    deploy.user = 'u19168'
  end

  deploy.build_before  = true # always use --no-clean options
  # Optional Settings
  # deploy.port  = 5309 # ssh port, default: 22
  # deploy.clean = true # remove orphaned files on remote host, default: false
  # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end
