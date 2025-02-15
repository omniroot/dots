

source ~/.config/waybar/theme.sh
# theme=$1
path=~/.config/waybar/
if [ -n "$1" ]; then
  theme="$1"
fi


killall waybar
waybar -c $path$theme/config.jsonc -s $path$theme/style.css &!
