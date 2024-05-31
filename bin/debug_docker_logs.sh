#!/usr/bin/env bash

# Function to follow logs for a single container
follow_logs() {
    local container=$1
    echo "Following logs for container $container:"
    docker logs --follow "$container" &
}

# Export the function so it's available in subshells
export -f follow_logs

# Get the IDs of all running containers and follow their logs
for container in $(docker ps -q); do
    follow_logs "$container"
done

# Wait for all background jobs to complete
wait

