import os
import time as time
import csv
import numpy as np

def generate_race_data(data_points=7200, seed=42):
    """Generate race data for the kart."""
    np.random.seed(seed)  # for reproducibility

    # Ah (Amperios hora)
    start_Ah = -100
    Ah = np.linspace(start_Ah, start_Ah - 50, data_points) + np.random.normal(0, 0.1, data_points)

    # V (Voltaje)
    V = np.full(data_points, 48) + np.random.normal(0, 0.2, data_points)

    # A (Corriente)
    A = np.full(data_points, -420) + np.random.normal(0, 5, data_points)

    # Speed (Sinusoidal pattern to simulate race track)
    time = np.linspace(0, 2 * np.pi, data_points)
    base_speed = np.sin(time)
    S = 8.335 * base_speed + 8.335  # 8.335 is half the difference between 13.89 and 2.78
    S = np.clip(S, 2.78, 13.89)
    S += np.random.normal(0, 0.5, data_points)

    # Calculate distance based on speed
    D = np.cumsum(S * 0.5)

    return Ah, V, A, S, D


def save_to_csv(data, directory, filename):
    """Save the data to a CSV file."""
    dir_path = os.path.join("./data", directory)
    file_path = os.path.join(dir_path, filename)

    # Ensure directory exists
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)

    # Write data to CSV
    with open(file_path, 'w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Ah", "V", "A", "S", "D"])  # Header
        writer.writerows(data)

    return file_path


def main(iterations=10):
    """Generate and save race data for a specified number of iterations."""
    paths = []
    
    for i in range(iterations):
        # Generate the race data
        race_data = generate_race_data()
        
        # Save the data to a CSV file with a unique name for each iteration
        filename = f"race_generated_data_{i}.csv"
        output_path = save_to_csv(np.column_stack(race_data), "data", filename)
        paths.append(output_path)
    
    return paths


# Run the main function
output_paths = main()
output_paths
