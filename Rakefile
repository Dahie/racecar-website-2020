desc 'deploy to production'
task :deploy do
  environment = ENV.fetch('ENV', 'development')
  if environment == 'production'
    ssh_user = 'ssh-w01af025@v033134.kasserver.com'
    remote_root = '/www/htdocs/w01af025/team-racecar.org/'
  else
    ssh_user = 'unmedial'
    remote_root = 'racecar-2020'
  end

  system("ENV=#{environment} NODE_ENV=production middleman build && rsync -avz --omit-dir-times --delete build/* #{ssh_user}:#{remote_root}")
end
