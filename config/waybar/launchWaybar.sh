

source ./theme.sh
# theme=$1
path=~/.config/waybar/

killall waybar
waybar -c $path$theme/config.jsonc -s $path$theme/style.css &!
