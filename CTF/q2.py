from pwn import xor
a = open('q2.png', 'rb').read()
b = open('q2.enc', 'rb').read()


print(xor(a, b)[:20])