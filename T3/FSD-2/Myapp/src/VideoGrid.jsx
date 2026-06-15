function VideoGrid(){
{
    const videos = [{
        id: 1,
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1M views',
        image: 'https://via.placeholder.com/150'
    }]
    return (
        <div className="video-grid">
            {videos.map((video) => (
                <div key={video.id} className="video-card">
                    <img src={video.image} alt={video.title} />
                    <h3>{video.title}</h3>
                    <p>{video.channel}</p>
                    <p>{video.views}</p>
                </div>
            ))}
        </div>
    );
}
}
export default VideoGrid;