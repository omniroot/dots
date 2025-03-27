<h1 align="center">OmniRoot dots</h1>

## Content:

- Hyprland config
- Alacritty
- firefox user.js

## Need

Install yay

```bash
cd /tmp && git clone https://aur.archlinux.org/yay-bin && cd yay-bin && makepkg -sric
```

Install chaotic aur
https://aur.chaotic.cx/docs

Install hyprland base

```bash
yay -S waybar-git dunst wlogout rofi-wayland kitty hyprland polkit-kde-agent hyprlock  qt5-wayland qt6-wayland xdg-desktop-portal-hyprland swww bibata-cursor-theme hyprshot waypaper-git hyprpolkitagent --needed
```

Install terminal utils

```bash
yay -S oh-my-posh fzf zoxide fzf eza bat btop
```

```bash
yay -S ttf-font-awesome ttf-jetbrains-mono-nerd
```
