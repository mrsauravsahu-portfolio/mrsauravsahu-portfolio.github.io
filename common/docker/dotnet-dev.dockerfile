ARG DOTNET_VERSION=5.0.408

FROM mcr.microsoft.com/dotnet/sdk:${DOTNET_VERSION} AS build-env

WORKDIR /app

EXPOSE 80
