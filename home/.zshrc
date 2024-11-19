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

zinit light-mode for \
    zdharma-continuum/zinit-annex-as-monitor \
    zdharma-continuum/zinit-annex-bin-gem-node \
    zdharma-continuum/zinit-annex-patch-dl \
    zdharma-continuum/zinit-annex-rust


# EXPORTS
export PATH=$PATH:/home/omniroot/.local/bin


# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000

plugins=(git)

zinit light zsh-users/zsh-completions
zinit light zsh-users/zsh-autosuggestions

eval "$(oh-my-posh init zsh --config ~/.posh.theme.json)"
eval "$(fzf --zsh)"

bindkey -e
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/omniroot/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall

eval "$(zoxide init zsh)"
eval "$(fzf --zsh)"
zstyle ':completion:*' menu yes


# Aliases

alias c="z"
alias cl="clear"
alias ff="fastfetch"
alias l="exa"
alias ll="exa -al"
alias llt="exa -l -L 2 --tree"

