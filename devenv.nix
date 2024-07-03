{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{
  # prefer system cache
  cachix.enable = false;

  enterShell = ''
    echo -e "\e[30m\e[107mAzteca Home Services Shell\e[0m"
    export PATH="$PATH:$(pwd)/node_modules/.bin:./node_modules/.bin"
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    node -v
  '';

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/languages/
  # languages.nix.enable = true;

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # https://devenv.sh/processes/
  # processes.ping.exec = "ping example.com";
  processes.dev.exec = "npm run dev";

  # See full reference at https://devenv.sh/reference/options/
  languages.javascript = {
    enable = true;
    npm.enable = true;
  };
}
