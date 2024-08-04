import msvcrt

def display_menu():
    print("Food Menu:")
    print("1. Burger")
    print("2. Pizza")
    print("3. Salad")
    print("4. Sandwich")
    print("5. Exit")

def main():
    print("Press '5' to display the food menu.")
    while True:
        key = msvcrt.getch().decode('utf-8')
        if key == '5':
            display_menu()
            break

if __name__ == "__main__":
    main()
