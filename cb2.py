path_file1 = r"C:\Users\andre\Desktop\lyfter andres\m2\sem7\file1.txt"
path_file2 = r"C:\Users\andre\Desktop\lyfter andres\m2\sem7\file2.txt"

with open(path_file1, "w") as file1:
    file1.write("One\nRed\nI\nTest\nBlue\nThree\nLike\nDog\nSea\nGreen\nLuigi\nDrawing\nBooks\nPizza\n")

with open(path_file2, "w") as file2:
    file2.write("Hello\nTea\nLight\nI\nGame\nPillow\nOtter\nLike\nYellow\nPaper\nMusic\nPizza\nSun\nNight\n")

with open(path_file1, "r") as file1:
    words_file1 = set(file1.read().splitlines())

with open(path_file2, "r") as file2:
    words_file2 = set(file2.read().splitlines())

common_words = words_file1.intersection(words_file2)

print("Repeated words:", ", ".join(common_words))
print("Hidden message: Keep exploring Python")
