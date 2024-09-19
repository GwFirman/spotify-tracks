fetch('/api/spotify')
  .then(response => response.json())
  .then(data => {
    const trackList = document.getElementById('track-list');
    const currentPlaying = document.getElementById('current-playing');

    // Mengambil data current playing
    const currentPlayingData = data.currentPlayingData; // Sesuaikan nama objek sesuai dengan data yang dikirim dari API
    if (currentPlayingData.currently_playing_type === 'track') {
      const currentPlayingContainer = document.createElement('div');
      currentPlayingContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');

      const img = document.createElement('img');
      img.id = 'cover';
      img.src = currentPlayingData.item.album.images[0].url;
      img.alt = `Cover image for ${currentPlayingData.item.name}`;
      img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12');

      const textContainer = document.createElement('div');
      textContainer.classList.add('text-sm', 'lg:text-md');

      const songTitle = document.createElement('p');
      songTitle.id = 'judul-lagu';
      songTitle.classList.add('font-medium');
      songTitle.textContent = currentPlayingData.item.name;

      const artistName = document.createElement('p');
      artistName.id = 'nama-artis';
      artistName.textContent = currentPlayingData.item.artists.map(artist => artist.name).join(', ');

      textContainer.appendChild(songTitle);
      textContainer.appendChild(artistName);

      currentPlayingContainer.appendChild(img);
      currentPlayingContainer.appendChild(textContainer);

      currentPlaying.appendChild(currentPlayingContainer);
    } else {
      // Jika tidak ada lagu yang sedang diputar
      const currentPlayingContainer = document.createElement('div');
      currentPlayingContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');

      const img = document.createElement('img');
      img.id = 'cover';
      img.src = 'https://via.placeholder.com/150';
      img.alt = 'Placeholder cover image';
      img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12');

      const textContainer = document.createElement('div');
      textContainer.classList.add('text-sm', 'lg:text-md');

      const songTitle = document.createElement('p');
      songTitle.id = 'judul-lagu';
      songTitle.classList.add('font-medium');
      songTitle.textContent = 'Listening to the voices in my head';

      const artistName = document.createElement('p');
      artistName.id = 'nama-artis';
      artistName.textContent = 'Myself';

      textContainer.appendChild(songTitle);
      textContainer.appendChild(artistName);

      currentPlayingContainer.appendChild(img);
      currentPlayingContainer.appendChild(textContainer);

      currentPlaying.appendChild(currentPlayingContainer);
    }

    // Mengambil data top tracks
    const topTracksData = data.topTracksData; // Sesuaikan nama objek sesuai dengan data yang dikirim dari API
    topTracksData.items.forEach(track => {
      const listItem = document.createElement('li');
      listItem.classList.add('border', 'hover:border-neutral-content', 'border-2', 'rounded-md', 'mb-4');

      const linkItem = document.createElement('a');
      linkItem.href = track.external_urls.spotify;
      linkItem.target = '_blank';

      const divContainer = document.createElement('div');
      divContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');

      const img = document.createElement('img');
      img.id = 'cover';
      img.src = track.album.images[0].url;
      img.alt = `Cover image for ${track.name}`;
      img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12');

      const textContainer = document.createElement('div');
      textContainer.classList.add('text-sm', 'lg:text-md');

      const songTitle = document.createElement('p');
      songTitle.id = 'judul-lagu';
      songTitle.classList.add('font-medium');
      songTitle.textContent = track.name;

      const artistName = document.createElement('p');
      artistName.id = 'nama-artis';
      artistName.textContent = track.artists.map(artist => artist.name).join(', ');

      textContainer.appendChild(songTitle);
      textContainer.appendChild(artistName);

      divContainer.appendChild(img);
      divContainer.appendChild(textContainer);

      linkItem.appendChild(divContainer);
      listItem.appendChild(linkItem);

      trackList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error:', error));
