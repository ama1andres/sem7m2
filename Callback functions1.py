# functions
def even_callback():
    print("The number is even")

def odd_callback():
    print("The number is odd")


number = int(input("Enter a number: "))

if number % 2 == 0:
    even_callback()
else:
    odd_callback()
