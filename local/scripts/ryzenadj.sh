

# while ! systemctl is-active --quiet your-service-name; do
#     echo "Ожидание..."
#     sleep 5
# done

# echo "Система запущена. Выполняем действие..."


sudo ryzenadj --stapm-limit=15000 --fast-limit=15000 --slow-limit=15000 --tctl-temp=50
