from PIL import Image

init = Image.open('q3-init.png')
secret = Image.open('q3-secret.png')

for x in range(init.size[0]):
    for y in range(init.size[1]):
        if init.getpixel([x, y]) != secret.getpixel([x, y]):
            pix = secret.getpixel([x, y])
            for p in pix:
                p = p & 3
                print(f'{p:02b}', end='')
print()