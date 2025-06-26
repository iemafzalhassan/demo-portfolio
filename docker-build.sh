#!/bin/bash

# Portfolio Docker Build and Run Script

echo "🚀 Building Afzal Hassan's Portfolio Docker Image..."

# Build the production image
echo "📦 Building production image..."
docker build -t afzal-portfolio .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Available commands:"
    echo "  Development: docker-compose up"
    echo "  Production:  docker run -p 3001:3000 afzal-portfolio"
    echo "  or using compose profiles:"
    echo "  Development: docker-compose --profile dev up"
    echo "  Production:  docker-compose --profile prod up"
    echo ""
    echo "🌐 After running, your portfolio will be available at:"
    echo "  Development: http://localhost:3000"
    echo "  Production:  http://localhost:3001"
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi 