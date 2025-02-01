from PIL import Image

init = Image.open('q5.png')
of = Image.new('RGB', init.size)

unique = []

for x in range(init.size[0]):
    for y in range(init.size[1]):
        pix = init.getpixel([x, y])
        if pix not in unique:
            print(pix)
            unique.append(pix)