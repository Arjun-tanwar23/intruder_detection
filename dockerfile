# Base image
FROM ubuntu:24.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y nano python3 python3-venv python3-pip curl nodejs npm \
    # && git config --global user.name "rogueML" \
    # && git config --global user.email "mrgoel2975@gmail.com" \
    && mkdir /src \
    && rm -rf /var/lib/apt/lists/*

    
# Create Python virtual environment
RUN python3 -m venv myenv \
    && ./myenv/bin/pip install --upgrade pip \
    && ./myenv/bin/pip install jupyter pandas matplotlib numpy scikit-learn seaborn
    
# Set working directory
WORKDIR /src

# Install Vite and Tailwind dependencies
# RUN npm install -g npm@latest \
#     && npm install -g create-vite \
#     && npm install -g tailwindcss postcss autoprefixer \
#     && npm install -g vite

# Entry point for running a bash shell
ENTRYPOINT ["bash"]
