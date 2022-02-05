const Bio = () => {
  return `
        <section class="bio">
            <div class="profile-photo">
                <img src="https://images.pexels.com/photos/1125328/pexels-photo-1125328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile-photo">
            </div>

            <div class="profile-info">
                <p class="name">Benzy La Creamy</p>
                <button>Follow</button>
            </div>

            <form class="edit-bio">
            <input type="text" id="name" placeholder="name" />
            <button type="submit">Submit</button>
            </form>
        </section>
`;
};

export default Bio;
