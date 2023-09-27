FROM python:3.9-slim

# Install requirements
RUN pip install Flask pandas

# Copy the application
COPY ./app.py /app/app.py

# Set work directory
WORKDIR /app

# Run the application
CMD ["python", "app.py"]
