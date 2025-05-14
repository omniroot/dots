#!/bin/bash

# Папка для монтирования
MOUNT_POINT="/mnt"

# Получаем список всех подключенных устройств
for device in $(lsblk -o NAME,TYPE | grep "disk" | awk '{print $1}'); do
    # Монтируем устройство
    udisksctl mount -b /dev/$device
    
    # Перемещаем монтированное устройство в /mnt
    DEVICE_NAME=$(basename "$device")
    mv "/media/$USER/$DEVICE_NAME" "$MOUNT_POINT/"
done
