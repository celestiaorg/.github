#!/bin/bash

# This script enables consumers to verify signatures on artifacts that were
# created via GoReleaser and signed via the maintainers@celestia.org PGP key.
#
# The key's UID is: 01C90717C8E60EE1E6DCCDB1069C2BA462F75DD1
# The key's name and email is: maintainers <maintainers@celestia.org>

# Check if the number of arguments is not 2
if [[ $# -ne 2 ]]; then
    echo "Error: Exactly two arguments are required."
    echo "Example usage:"
    echo "  ./verify-signature.sh <signature-file> <file-to-verify>"
    exit 1
fi

KEY_FILENAME="maintainers.asc"
GITHUB_URL="https://raw.githubusercontent.com/celestiaorg/.github/main/signing/${KEY_FILENAME}"

echo "Downloading the maintainers@celestia.org public key"
curl --location ${GITHUB_URL} --output ${KEY_FILENAME}

echo "Importing ${KEY_FILENAME}"
gpg --import ${KEY_FILENAME}

echo "Deleting ${KEY_FILENAME}"
rm ${KEY_FILENAME}

echo "Verifying the signature of "$1" with "$2""
gpg --verify $1 $2
