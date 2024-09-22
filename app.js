
    // Fetch data from your serverless function
    fetch('/api/spotify')
      .then(response => response.json())
      .then(data => {
        
        // Get the current playing track
        const currentPlaying = data.currentPlaying;
        const currentPlayingList = document.getElementById('current-playing');
        
        
        if (currentPlaying.currently_playing_type === 'track' ) {
          // Create list item element
          const listItem = document.createElement('li');
          listItem.classList.add('border', 'border-neutral-content', 'border-2', 'rounded-md','mb-4');

          // Create the main div that wraps the content
          const divContainer = document.createElement('div');
          divContainer.classList.add('p-4', 'flex', 'items-center');

          // Create the image element
          const img = document.createElement('img');
          img.id = 'cover';
          img.src = currentPlaying.item.album.images[0].url; // Set image source from the API

          img.alt = `Cover image for ${currentPlaying.item.name}`;
          img.classList.add('rounded-md', 'mr-4', 'size-20');

          // Create the text container
          const textContainer = document.createElement('div');
          textContainer.classList.add('text-md','lg:text-xl');

          // Create the song title (judul-lagu)
          const songTitle = document.createElement('p');
          songTitle.id = 'judul-lagu';
          songTitle.classList.add('font-bold');
          songTitle.textContent = currentPlaying.item.name; // Set song name from the API

          // Create the artist name (nama-artis)
          const artistName = document.createElement('p');
          artistName.id = 'nama-artis';
          artistName.textContent = currentPlaying.item.artists.map(artist => artist.name).join(', '); // Set artist names

          // Append song title and artist name to the text container
          textContainer.appendChild(songTitle);
          textContainer.appendChild(artistName);

          // Append the image and text container to the main div
          divContainer.appendChild(img);
          divContainer.appendChild(textContainer);

          // Append the div container to the list item
          listItem.appendChild(divContainer);

          // Append the list item to the ul element
          currentPlayingList.appendChild(listItem);
          
        } else {
          // Create list item element
          const listItem = document.createElement('li');
          listItem.classList.add('border', 'border-neutral-content', 'border-2', 'rounded-md','mb-4');

          // Create the main div that wraps the content
          const divContainer = document.createElement('div');
          divContainer.classList.add('p-4', 'flex', 'items-center');

          // Create the image element
          const img = document.createElement('img');
          img.id = 'cover';
          img.src = 'https://via.placeholder.com/150'; // Set image source from the API
          img.alt = `Cover image for ${currentPlaying.item.name}`;
          img.classList.add('rounded-md', 'mr-4', 'size-20');

          // Create the text container
          const textContainer = document.createElement('div');
          textContainer.classList.add('text-md','lg:text-xl');

          // Create the song title (judul-lagu)
          const songTitle = document.createElement('p');
          songTitle.id = 'judul-lagu';
          songTitle.classList.add('font-bold');
          songTitle.textContent = 'Listening to the voices in my head'; 

          // Create the artist name (nama-artis)
          const artistName = document.createElement('p');
          artistName.id = 'nama-artis';
          artistName.textContent = 'Myself' 
          

          // Append song title and artist name to the text container
          textContainer.appendChild(songTitle);
          textContainer.appendChild(artistName);

          // Append the image and text container to the main div
          divContainer.appendChild(img);
          divContainer.appendChild(textContainer);

          // Append the div container to the list item
          listItem.appendChild(divContainer);
          

          // Append the list item to the ul element
          currentPlayingList.appendChild(listItem);
        }


          

        const trackList = document.getElementById('track-list');
        const topTrack = data.topTracks;
          topTrack.items.forEach(track => {
          // Create list item element
          const listItem = document.createElement('li');
          listItem.classList.add('border', 'border-neutral-content', 'border-2', 'rounded-md','mb-4');
  
          // Create the main div that wraps the content
          const divContainer = document.createElement('div');
          divContainer.classList.add('p-4', 'flex', 'items-center');
  
          // Create the image element
          const img = document.createElement('img');
          img.id = 'cover';
          img.src = track.album.images[0].url; // Set image source from the API
          img.alt = `Cover image for ${track.name}`;
          img.classList.add('rounded-md', 'mr-4', 'size-20');
  
          // Create the text container
          const textContainer = document.createElement('div');
          textContainer.classList.add('text-md','lg:text-xl');
  
          // Create the song title (judul-lagu)
          const songTitle = document.createElement('p');
          songTitle.id = 'judul-lagu';
          songTitle.classList.add('font-bold');
          songTitle.textContent = track.name; // Set song name from the API
  
          // Create the artist name (nama-artis)
          const artistName = document.createElement('p');
          artistName.id = 'nama-artis';
          artistName.textContent = track.artists.map(artist => artist.name).join(', '); // Set artist names
  
          // Append song title and artist name to the text container
          textContainer.appendChild(songTitle);
          textContainer.appendChild(artistName);
  
          // Append the image and text container to the main div
          divContainer.appendChild(img);
          divContainer.appendChild(textContainer);
  
          // Append the div container to the list item
          listItem.appendChild(divContainer);
  
          // Append the list item to the ul element
          trackList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error:', error));