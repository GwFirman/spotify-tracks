# Spotify Top Tracks Application

This is a simple web application that retrieves and displays the top tracks of a Spotify user using the Spotify API. The project is deployed using **Vercel** and connected to GitHub for continuous deployment.

## Features
- Fetches top tracks of a Spotify user.
- Deployed using Vercel for seamless CI/CD integration.

## Requirements
Before you get started, ensure you have the following:
- [Spotify Developer Account](https://developer.spotify.com/)
- [GitHub Account](https://github.com/)
- [Vercel Account](https://vercel.com/)

## Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/GwFirman/spotify-tracks.git
cd spotify-top-tracks

```
### 2. Create a Spotify App
#### 1. Go to the Spotify Developer Dashboard.
#### 2. Create a new Spotify app to obtain your Client ID and Client Secret.
#### 3. Under Redirect URIs, add http://localhost:3000/callback (or the callback URL you will use on your server).
#### 4. Set the appropriate scopes for the application (like user-top-read for fetching top tracks).


### 3. Set Up Environment Variables
In the root directory of your project, create a .env.local file to store the environment variables.

```bash
touch .env.local
```


### 4. Deploy with Vercel
#### 1. Go to Vercel.
#### 2. Click on New Project and import the repository from GitHub.
#### 3. Vercel will automatically detect the project configuration. You can just click Deploy.
After deployment, Vercel will give you a live link to access your project.
### 5. Set Environment Variables in Vercel
#### 1. Go to the project settings in Vercel.
#### 2. Under the Environment Variables section, add the following:
- CLIENT_ID
- CLIENT_SECRET
- REFRESH_TOKEN
