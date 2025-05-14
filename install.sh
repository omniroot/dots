#!/bin/bash


stow home/ -t ~/
stow config/ -t ~/.config/
stow local/ -t ~/.local/
stow udev/ -t /etc/udev/rules.d/

sudo chmod +x ~/.local/scripts/*

sudo udevadm control --reload-rules
sudo udevadm trigger