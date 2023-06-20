# Use a base Python image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the working directory
COPY . .

# Expose port 5000 for the app
EXPOSE 5000

# Set environment variables
ENV MONGO_HOST="mongodb"
ENV MONGO_PORT=27017
ENV MONGO_INITDB_ROOT_PASSWORD="test123"

# Run the app using Python
CMD ["python", "app.py"]