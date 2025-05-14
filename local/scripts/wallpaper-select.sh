#!/bin/bash

# Путь к папке с обоями
wallpaper_dir="$HOME/personal/wallpapers/pc"

# Найти все изображения и показать выбор через rofi
selected=$(find "$wallpaper_dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -printf "%P\n" | rofi -dmenu -p "󰉏 Выберите обои:")

# Если выбор сделан
if [ -n "$selected" ]; then
    full_path="$wallpaper_dir/$selected"
    
    # Показать превью изображения
    feh --geometry 800x600 --title "Превью обоев" --auto-zoom "$full_path" &
    feh_pid=$!

    # Запрос подтверждения
    confirm=$(echo -e "✅ Установить\n❌ Отмена" | rofi -dmenu -p "Подтверждение:")

    # Закрыть превью
    kill $feh_pid 2>/dev/null

    if [ "$confirm" == "✅ Установить" ]; then
        # Установка обоев (раскомментируйте нужное)
        # ------------------------------------------
        
        # Для feh (i3, bspwm и т.д.)
        # feh --bg-fill "$full_path"
        
        # Для GNOME
        # gsettings set org.gnome.desktop.background picture-uri "file://$full_path"
        
        # Для sway/swaybg
        # swaymsg output "*" bg "$full_path" fill
        
        # Уведомление
        notify-send "Обои успешно изменены!" "󰆊 Выбрано: ${selected##*/}"
    else
        notify-send "Действие отменено" " Обои не изменены"
    fi
fi