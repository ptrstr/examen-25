# Runs a checksum on a string
# Usage: python checksum.py <string>

import sys

def checksum(s):
    return sum([ord(c) for c in s])*5 % 718

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: python checksum.py <string>")
        sys.exit(1)
    print(checksum(sys.argv[1]))