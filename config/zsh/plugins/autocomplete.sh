
zinit light zsh-users/zsh-completions
zinit light zsh-users/zsh-autosuggestions


autoload -Uz compinit && compinit

# zstyle :compinstall filename '/home/omniroot/.zshrc'


# Completion styling
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Za-z}'
zstyle ':completion:*' list-colors "${(s.:.)LS_COLORS}"
zstyle ':completion:*' menu no
zstyle ':fzf-tab:complete:cd:*' fzf-preview 'ls --color $realpath'
zstyle ':fzf-tab:complete:__zoxide_z:*' fzf-preview 'ls --color $realpath'