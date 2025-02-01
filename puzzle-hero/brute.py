import sys
import string

def checksum(s):
    return sum([ord(c) for c in s])*5 % 718

def brute(buf, len, target):
    if len == 0:
        if 0 == target:
            print(buf)
        return
    for i in string.ascii_lowercase:
        if target < ord(i):
            continue
        brute(buf + i, len - 1, target - ord(i))

def find_target(hash):
    for i in range(10):
        if (718 * i + hash) % 5 == 0:
            print((718 * i + hash) / 5)

find_target(105)
print('next')
brute('', 7, 739)