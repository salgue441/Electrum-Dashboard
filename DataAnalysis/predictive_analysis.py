import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from scipy.fft import fft
import os
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans


def process_all_files(directory: str):
    # Enumerate all CSV files in the directory
    for filename in os.listdir(directory):
        if filename.endswith(".csv"):
            file_path = os.path.join(directory, filename)
            print(f"Processing {file_path}...")
            
            df = load_data(file_path)
            plot_ah_and_a(df)
            plot_speed_and_distance(df)
            df = apply_kmeans_clustering(df, ['S', 'A'])
            plot_clusters(df)
            plot_fft(df, 'S')

    print("All files processed.")


def load_data(file_path: str) -> pd.DataFrame:
    """Load the race data from a CSV file."""
    return pd.read_csv(file_path)

def plot_ah_and_a(df: pd.DataFrame):
    """Plot Ah and A over time."""
    fig, ax1 = plt.subplots(figsize=(12, 6))

    ax1.set_xlabel('Data Points (Time)')
    ax1.set_ylabel('Ah', color='tab:blue')
    ax1.plot(df['Ah'], color='tab:blue')
    ax1.tick_params(axis='y', labelcolor='tab:blue')

    ax2 = ax1.twinx()
    ax2.set_ylabel('A', color='tab:red')
    ax2.plot(df['A'], color='tab:red')
    ax2.tick_params(axis='y', labelcolor='tab:red')

    plt.title("Evolution of Ah and A over Time")
    plt.grid(True, which="both", ls="--", c='0.65')
    plt.show()

def plot_speed_and_distance(df: pd.DataFrame):
    """Plot Speed (S) and Distance (D) over time."""
    fig, ax1 = plt.subplots(figsize=(12, 6))

    ax1.set_xlabel('Data Points (Time)')
    ax1.set_ylabel('Speed (S)', color='tab:blue')
    ax1.plot(df['S'], color='tab:blue')
    ax1.tick_params(axis='y', labelcolor='tab:blue')

    ax2 = ax1.twinx()
    ax2.set_ylabel('Distance (D)', color='tab:red')
    ax2.plot(df['D'], color='tab:red')
    ax2.tick_params(axis='y', labelcolor='tab:red')

    plt.title("Evolution of Speed and Distance over Time")
    plt.grid(True, which="both", ls="--", c='0.65')
    plt.show()

def apply_kmeans_clustering(df: pd.DataFrame, features: list, n_clusters: int = 3) -> pd.DataFrame:
    """Apply KMeans clustering to the data."""
    # Scaling the features
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(df[features])

    # Applying KMeans clustering
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    df['Cluster'] = kmeans.fit_predict(scaled_features)
    return df

def plot_clusters(df: pd.DataFrame):
    """Plot the results of clustering."""
    plt.figure(figsize=(12, 6))
    for cluster in sorted(df['Cluster'].unique()):
        plt.scatter(df[df['Cluster'] == cluster].index, 
                    df[df['Cluster'] == cluster]['S'], 
                    label=f"Cluster {cluster}", alpha=0.6)

    plt.xlabel("Data Points (Time)")
    plt.ylabel("Speed (S)")
    plt.title("Clusters Based on Speed and Current")
    plt.legend()
    plt.grid(True, which="both", ls="--", c='0.65')
    plt.show()

def plot_fft(df: pd.DataFrame, feature: str):
    """Plot the Fast Fourier Transform of the given feature."""
    # Compute the Fast Fourier Transform (FFT) of the feature data
    feature_array = df[feature].to_numpy()
    feature_fft = fft(feature_array)

    # Compute the frequencies corresponding to the FFT values
    frequencies = np.fft.fftfreq(len(feature_fft))

    # Plot the magnitude of the FFT results
    plt.figure(figsize=(12, 6))
    plt.plot(frequencies, np.abs(feature_fft))
    plt.xlabel("Frequency")
    plt.ylabel("Magnitude")
    plt.title(f"Fourier Transform of {feature} Data")
    plt.grid(True, which="both", ls="--", c='0.65')
    plt.xlim(0, 0.05)  # Limiting the x-axis to show only the relevant frequencies
    plt.show()


def main(directory):
    # Process all files in the specified directory
    process_all_files(directory)
    # Run the functions
    df = load_data(directory)
    plot_ah_and_a(df)
    plot_speed_and_distance(df)
    df = apply_kmeans_clustering(df, ['S', 'A'])
    plot_clusters(df)
    plot_fft(df, 'S')

if __name__ == "__main__":
    DATA_DIRECTORY = "/mnt/data/data"  # Ajusta esta ruta según sea necesario
    main(DATA_DIRECTORY)

