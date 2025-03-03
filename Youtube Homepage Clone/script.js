const videos = [
    {
        title: "Learn Web Development in 2023",
        channel: "CodeWithHarry",
        views: "1.2M views",
        thumbnail: "https://i.ytimg.com/vi/6mbwJ2xhgzM/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=6mbwJ2xhgzM",
        duration: "32:17"
    },
    {
        title: "JavaScript Masterclass",
        channel: "Traversy Media",
        views: "856K views",
        thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        duration: "15:24"
    },
    {
        title: "Python for Everybody",
        channel: "freeCodeCamp",
        views: "2.1M views",
        thumbnail: "https://i.ytimg.com/vi/8jAykqxIeqw/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=8jAykqxIeqw",
        duration: "10:15"
    },
    {
        title: "React JS Full Course",
        channel: "Codevolution",
        views: "980K views",
        thumbnail: "https://i.ytimg.com/vi/QFaFIcGhPoM/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=QFaFIcGhPoM",
        duration: "22:48"
    },
    {
        title: "Data Structures & Algorithms",
        channel: "Jenny's Lectures",
        views: "1.8M views",
        thumbnail: "https://i.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
        duration: "45:12"
    },
    {
        title: "Advanced CSS Techniques",
        channel: "Kevin Powell",
        views: "320K views",
        thumbnail: "https://i.ytimg.com/vi/3nLTB_E6XAM/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=3nLTB_E6XAM",
        duration: "32:17"
    },
    {
        title: "UI/UX Design Tutorial",
        channel: "DesignCourse",
        views: "450K views",
        thumbnail: "https://i.ytimg.com/vi/68w2VwalD5w/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=68w2VwalD5w",
        duration: "28:39"
    },
    {
        title: "Machine Learning Basics",
        channel: "Krish Naik",
        views: "1.1M views",
        thumbnail: "https://i.ytimg.com/vi/JxgmHe2NyeY/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=JxgmHe2NyeY",
        duration: "18:22"
    },
    {
        title: "Node.js Crash Course",
        channel: "Academind",
        views: "780K views",
        thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
    },
    {
        title: "Vue.js for Beginners",
        channel: "The Net Ninja",
        views: "540K views",
        thumbnail: "https://i.ytimg.com/vi/qZXt1Aom3Cs/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
        duration: "25:14"
    },
    {
        title: "Flutter Tutorial for Beginners",
        channel: "The Net Ninja",
        views: "620K views",
        thumbnail: "https://i.ytimg.com/vi/1ukSR1GRtMU/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
        duration: "15:30"
    },
    {
        title: "Docker Tutorial for Beginners",
        channel: "TechWorld with Nana",
        views: "1.3M views",
        thumbnail: "https://i.ytimg.com/vi/3c-iBn73dDE/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1646627927863-19874c27316b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.youtube.com/watch?v=3c-iBn73dDE",
        duration: "12:34"
    },
    {
        title: "Git & GitHub Crash Course",
        channel: "Traversy Media",
        views: "950K views",
        thumbnail: "https://i.ytimg.com/vi/SWYqp7iY_Tc/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
        duration: "15:20" 
    },
    {
        title: "TypeScript Full Course",
        channel: "Academind",
        views: "420K views",
        thumbnail: "https://i.ytimg.com/vi/BwuLxPH8IDs/maxresdefault.jpg",
        profilePic: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
        duration: "12:45"
    },
    {
        title: "AWS Tutorial for Beginners",
        channel: "freeCodeCamp",
        views: "1.5M views",
        thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        profilePic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.youtube.com/watch?v=ulprqHHWlng",
        duration: "8:00"
    },
    {
        title: "5 UI/UX Design Principles for Better Web Apps",
        channel: "Design Matters",
        views: "632K views",
        timestamp: "2 weeks ago",
        thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        profilePic: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        duration: "20:15"
    }

];

function renderVideos(filteredVideos = videos) {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';
    
    filteredVideos.forEach(video => {
        const videoCard = `
            <div class="col-lg-3 col-md-4 col-sm-6 video-card">
                <a href="${video.link}" target="_blank" class="text-decoration-none">
                    <div class="card bg-white">
                        <div class="thumbnail-container position-relative">
                            <img src="${video.thumbnail}" class="video-thumbnail" alt="${video.title}" onerror="this.src='https://via.placeholder.com/300x170'">
                            <span class="video-duration position-absolute">${video.duration}</span>
                        </div>
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <img src="${video.profilePic}" class="rounded-circle me-2" alt="${video.channel}" width="40" height="40">
                                <div>
                                    <h6 class="card-title mb-0">${video.title}</h6>
                                    <p class="card-text text-muted mb-0">${video.channel}</p>
                                </div>
                            </div>
                            <p class="card-text text-muted">${video.views}</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
        videoGrid.innerHTML += videoCard;
    });
}
// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm) ||
        video.channel.toLowerCase().includes(searchTerm)
    );
    renderVideos(filteredVideos);
});

// Initial render
renderVideos();