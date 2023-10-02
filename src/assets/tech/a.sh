#!/bin/bash

# Define the target extension
target_extension=".png"

# Loop through all files in the current directory
for file in icons8-*.png; do
    if [[ -f "$file" ]]; then
        # Extract the 'name' part from the filename
        name=$(echo "$file" | sed 's/icons8-\(.*\)-240\.png/\1/')

        # Construct the new filename
        new_filename="${name}.png"

        # Rename the file
        mv "$file" "$new_filename"

        echo "Renamed: $file -> $new_filename"
    fi
done
