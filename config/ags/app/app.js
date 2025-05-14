import Gtk from "gi://Gtk";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Widget from "resource:///com/github/Aylur/ags/widget.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";

const { Box, Button, Icon, Label, Scrollable, Revealer } = Widget;
const { execAsync } = Utils;

// Функция для получения списка обоев
function getWallpapers() {
  const wallpaperDir = `${GLib.get_home_dir()}/Pictures/Wallpapers/`;
  const files = [];

  try {
    const dir = Gio.File.new_for_path(wallpaperDir);
    const enumerator = dir.enumerate_children(
      "standard::name",
      Gio.FileQueryInfoFlags.NONE,
      null
    );

    let file;
    while ((file = enumerator.next_file(null)) !== null) {
      const name = file.get_name();
      if (name.match(/\.(jpg|jpeg|png|webp)$/i)) {
        files.push(`${wallpaperDir}${name}`);
      }
    }
  } catch (e) {
    console.error(`Ошибка чтения обоев: ${e}`);
  }

  return files;
}

// Виджет селектора обоев
export const WallpaperSelector = () => {
  const wallpapers = getWallpapers();

  const scrollable = Scrollable({
    hscroll: "never",
    vscroll: "automatic",
    child: Box({
      className: "wallpaper-grid",
      vertical: false,
      children: wallpapers.map((wp) =>
        Button({
          className: "wallpaper-btn",
          child: Box({
            className: "wallpaper-preview",
            css: `background-image: url('${wp}');`,
          }),
          onClicked: () => {
            // Установка обоев (пример для sway/swww)
            execAsync(`swww img "${wp}" --transition-type any`).catch(
              console.error
            );
          },
        })
      ),
    }),
  });

  return Revealer({
    transition: "slide_down",
    revealChild: false,
    child: Box({
      className: "wallpaper-selector",
      vertical: true,
      children: [
        Label({
          className: "selector-title",
          label: "Выберите обои",
        }),
        scrollable,
      ],
    }),
  });
};

// Кнопка для открытия селектора
export const WallpaperButton = () =>
  Button({
    className: "wallpaper-button",
    child: Icon({
      icon: "preferences-desktop-wallpaper-symbolic",
    }),
    onClicked: (self) => {
      const selector = WallpaperSelector();
      selector.revealChild = !selector.revealChild;
    },
  });
