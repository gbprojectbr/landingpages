workflow "Simple build deploy" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "install"
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "build"
  needs = ["Install"]
}
