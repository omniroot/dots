import os
import subprocess
import time

"""
Convert login to use json

{
    apps: [
        {
            "name": "Zen browser",
            "classname": "zen", or "title": "zen",
            "mode": "personal",
            "workspace": 1,
            "binary": "zen-browser", // command for start app
            "args": "-P omniroot"
            
        }
    ]

}


"""


def start(name, *args):
    subprocess.Popen([name] + list(args), start_new_session=True)


def stop(classname):
    result = subprocess.run(
        ["hyprctl", "dispatch", "closewindow", f"class:{classname}"],
        capture_output=True,
        text=True,
    )
    print("Stop, ", result)


def is_window_open(classname):
    # Проверяем, открыто ли окно с указанным классом
    result = subprocess.run(["hyprctl", "clients"], capture_output=True, text=True)
    print(classname in result.stdout)
    return classname in result.stdout


def movetoworkspace(classname, workspace):
    while not is_window_open(classname):
        time.sleep(0.5)

    subprocess.run(["hyprctl", "dispatch", "focuswindow", f"class:{classname}"])
    subprocess.run(["hyprctl", "dispatch", "movetoworkspace", str(workspace)])
    # time.sleep(0.5)


def start_ryzenadj(mode):
    result = subprocess.run(
        [
            "sudo",
            "ryzenadj",
            "--stapm-limit=15000",
            "--fast-limit=15000",
            "--slow-limit=15000",
            "--tctl-temp=50",
        ],
        capture_output=True,
        text=True,
    )
    print("Ryzenadj started: ", result)


def start_obsidian(mode):
    match mode:
        case "personal":
            start("obsidian-cli", "open", "1", "--vault", "obsidian")
        case "dev":
            start("obsidian-cli", "open", "1", "--vault", "obsidian-dev")
    movetoworkspace("obsidian", 3)


def start_zen_browser(mode):
    match mode:
        case "personal":
            start("zen-browser", "-P", "omniroot")
        case "dev":
            start("zen-browser", "-P", "omniroot-dev")

    movetoworkspace("zen", 1)


def start_figma(mode):
    match mode:
        case "personal":
            start("figma-linux")
            movetoworkspace("zen", 2)
        # case "dev":
        #     start("zen-browser", "-P", "omniroot-dev")


def stops():
    stop("zen")
    stop("obsidian")
    stop("figma-linux")


def starts(mode):
    start_obsidian(mode)
    start_zen_browser(mode)
    start_figma(mode)
    start_ryzenadj(mode)


def main():
    mode = "personal"
    print("1. Personal", "2. Development", "3. Kill all", "4. Exit", " ", sep="\n")
    choice = input("Select: ")

    match choice:
        case "1":
            mode = "personal"
        case "2":
            mode = "dev"
        case "3":
            stops()
            return
        case "4":
            os.close()
            return
    stops()
    starts(mode)
    print("Done, now terminal closed!")


if __name__ == "__main__":
    main()
