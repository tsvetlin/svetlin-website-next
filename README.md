# Svetlin Website - Next.js

Personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Getting Started

### Local Development (Without Docker)

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:
```bash
npm run build
npm start
```

## Docker Deployment

This project supports containerized deployment with multi-platform builds for both Apple Silicon and Intel processors.

### Prerequisites

- Docker Desktop installed and running
- Docker Hub account (for pushing images)
- Docker Buildx enabled (comes with Docker Desktop)

### Local Docker Build

Build a Docker image for your local architecture:

```bash
docker build -t svetlint/svetlin-website-next:1.0.0 .
```

Run the container locally:

```bash
docker run -p 3000:3000 svetlint/svetlin-website-next:1.0.0
```

Access the application at [http://localhost:3000](http://localhost:3000).

Stop the container:

```bash
# Find the container ID
docker ps

# Stop the container
docker stop <container-id>
```

Remove the container:

```bash
docker rm <container-id>
```

### Docker Compose (Recommended)

The easiest way to run the application locally is with Docker Compose.

**Start the application:**

```bash
docker-compose up -d
```

The `-d` flag runs it in detached mode (background). Access at [http://localhost:3000](http://localhost:3000).

**View logs:**

```bash
# Follow logs in real-time
docker-compose logs -f

# View last 100 lines
docker-compose logs --tail=100
```

**Stop the application:**

```bash
docker-compose down
```

**Rebuild and restart:**

```bash
# Rebuild the image and restart
docker-compose up -d --build

# Force recreate containers
docker-compose up -d --force-recreate
```

**Check status:**

```bash
docker-compose ps
```

**Restart the service:**

```bash
docker-compose restart
```

The compose file includes:
- **Auto-restart policy:** Container restarts automatically if it crashes
- **Health checks:** Monitors application health every 30 seconds
- **Named container:** Easy to identify and manage
- **Port mapping:** Exposes port 3000

### Multi-Platform Docker Build

For deploying to different architectures (e.g., Mac M1 development, Intel production servers), use Docker Buildx.

#### One-Time Setup

Create and bootstrap a multi-platform builder:

```bash
# Create a new builder instance
docker buildx create --name multiplatform --use

# Bootstrap the builder (downloads necessary components)
docker buildx inspect --bootstrap
```

Verify the builder supports multiple platforms:

```bash
docker buildx ls
```

You should see `linux/amd64` and `linux/arm64` in the platforms list.

#### Build Multi-Platform Images

**Build and push to Docker Hub:**

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t svetlint/svetlin-website-next:1.0.0 \
  --push \
  .
```

**Build for multiple platforms without pushing (local testing):**

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t svetlint/svetlin-website-next:1.0.0 \
  --load \
  .
```

**Note:** When using `--load`, you can only build for your local architecture. For actual multi-platform builds, use `--push` or save to a tar file.

**Build and save to tar file:**

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t svetlint/svetlin-website-next:1.0.0 \
  -o type=tar,dest=svetlin-website.tar \
  .
```

#### Build with Different Tags

**Build with multiple tags:**

```bash
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t svetlint/svetlin-website-next:1.0.0 \
  -t svetlint/svetlin-website-next:latest \
  --push \
  .
```

**Build for specific platform only:**

```bash
# For Intel/AMD processors
docker buildx build \
  --platform linux/amd64 \
  -t svetlint/svetlin-website-next:1.0.0-amd64 \
  --push \
  .

# For Apple Silicon
docker buildx build \
  --platform linux/arm64 \
  -t svetlint/svetlin-website-next:1.0.0-arm64 \
  --push \
  .
```

### Useful Docker Commands

**List running containers:**
```bash
docker ps
```

**List all containers (including stopped):**
```bash
docker ps -a
```

**View container logs:**
```bash
docker logs <container-id>

# Follow logs in real-time
docker logs -f <container-id>
```

**Execute commands inside running container:**
```bash
docker exec -it <container-id> sh
```

**Inspect image details:**
```bash
docker inspect svetlint/svetlin-website-next:1.0.0
```

**View image layers and size:**
```bash
docker history svetlint/svetlin-website-next:1.0.0
```

**Remove images:**
```bash
# Remove specific image
docker rmi svetlint/svetlin-website-next:1.0.0

# Remove all unused images
docker image prune -a
```

**Pull image from Docker Hub:**
```bash
docker pull svetlint/svetlin-website-next:1.0.0
```

### Environment Variables

To pass environment variables to the container:

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  svetlint/svetlin-website-next:1.0.0
```

Or use an env file:

```bash
docker run -p 3000:3000 \
  --env-file .env.production \
  svetlint/svetlin-website-next:1.0.0
```

### Production Deployment

**Run in detached mode (background):**
```bash
docker run -d \
  -p 3000:3000 \
  --name svetlin-website \
  --restart unless-stopped \
  svetlint/svetlin-website-next:1.0.0
```

**With custom port mapping:**
```bash
docker run -d \
  -p 80:3000 \
  --name svetlin-website \
  --restart unless-stopped \
  svetlint/svetlin-website-next:1.0.0
```

**Update running container:**
```bash
# Pull latest image
docker pull svetlint/svetlin-website-next:1.0.0

# Stop and remove old container
docker stop svetlin-website
docker rm svetlin-website

# Start new container
docker run -d \
  -p 3000:3000 \
  --name svetlin-website \
  --restart unless-stopped \
  svetlint/svetlin-website-next:1.0.0
```

### Troubleshooting

**Build fails with "no space left on device":**
```bash
# Clean up unused Docker resources
docker system prune -a
```

**Container exits immediately:**
```bash
# Check logs for errors
docker logs <container-id>
```

**Buildx not available:**
```bash
# Update Docker Desktop to latest version
# Or enable experimental features in Docker settings
```

**Can't push to Docker Hub:**
```bash
# Login to Docker Hub
docker login

# Then retry the push command
```

## Docker Image Details

- **Base Image:** Node 20 Alpine (minimal size)
- **Architecture Support:** linux/amd64, linux/arm64
- **Exposed Port:** 3000
- **User:** Non-root user (nextjs:nodejs)
- **Build Type:** Multi-stage with standalone output
- **Approximate Size:** ~150-200MB (optimized)

## Tech Stack

- **Framework:** Next.js 15
- **React:** 19
- **TypeScript:** 5
- **Styling:** Tailwind CSS 3.4
- **Deployment:** Docker (Multi-platform)

## License

Private project