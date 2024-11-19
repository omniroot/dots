# Created by newuser for 5.9
### Added by Zinit's installer
if [[ ! -f $HOME/.local/share/zinit/zinit.git/zinit.zsh ]]; then
    print -P "%F{33} %F{220}Installing %F{33}ZDHARMA-CONTINUUM%F{220} Initiative Plugin Manager (%F{33}zdharma-continuum/zinit%F{220})…%f"
    command mkdir -p "$HOME/.local/share/zinit" && command chmod g-rwX "$HOME/.local/share/zinit"
    command git clone https://github.com/zdharma-continuum/zinit "$HOME/.local/share/zinit/zinit.git" && \
        print -P "%F{33} %F{34}Installation successful.%f%b" || \
        print -P "%F{160} The clone has failed.%f%b"
fi

source "$HOME/.local/share/zinit/zinit.git/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit

# Load a few important annexes, without Turbo
# (this is currently required for annexes)
zinit light-mode for \
    zdharma-continuum/zinit-annex-as-monitor \
    zdharma-continuum/zinit-annex-bin-gem-node \
    zdharma-continuum/zinit-annex-patch-dl \
    zdharma-continuum/zinit-annex-rust

### End of Zinit's installer chunk

# == PLUGINS == #
plugins=(git)
zinit light zsh-users/zsh-completions
zinit light zsh-users/zsh-autosuggestions

export PATH=$PATH:~/.local/bin
export EDITOR='micro'

eval "$(oh-my-posh init zsh --config ~/.posh.theme.json)"
# eval "$(fzf --zsh)"


zstyle ':completion:*' menu no


up() {
  sudo pacman -Syu --noconfirm

  # clear cache and useless dependency
  sudo pacman -Rsn $(pacman -Qdtq) --noconfirm
  sudo pacman -Sc --noconfirm
  sudo pacman -Scc --noconfirm
  paccache -ruk0
  rm -rf ~/.cache/*
}

upf() {
  sudo reflector --sort rate --save /etc/pacman.d/mirrorlist --verbose --download-timeout 8 -p https -l 25 -c "Germany"
  up
}

pi() {
  paru -Sy $1 --noconfirm
}

ps() {
  paru -Ss $1 --noconfirm
}

dpistop() {
  killall spoofdpi
  rm /tmp/spoof
}

dpistart() {
  if [ -e "/tmp/spoof" ]; then
  else
    ~/.local/bin/spoofdpi &!
    touch "/tmp/spoof"
    clear
  fi
}

dpi() {
  if [ -e "/tmp/spoof" ]; then 
  echo "spoofdpi already started at $(pgrep spoofdpi) pid"
  else
  dpistop
  dpistart
  echo "Spoof dpi started!"
  fi
}

alias up="up"
alias upf="upf"
alias pi="pi"
alias ps="ps"
alias c="clear"
alias ff="fastfetch"
alias l="exa"
alias ll="exa -al"
alias llt="exa -l -L 2 --tree"
alias dpi="dpi"
alias dpistart="dpistart"
alias dpistop="dpistop"
alias r="_omz::reload"

dpistart

# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
