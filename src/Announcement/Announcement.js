import useFetch from "../useFetch";
import AnnouncementList from "./AnnouncementList";

const Announcement = () => {
  const {
    error,
    isPending,
    data: announcements,
  } = useFetch("http://localhost:8000/announcement");

  return (
    <div className="container">
      <div className="announcement">
        <div className="title" style={{ textAlign: "center" }}>
          <h1>Announcement</h1>
        </div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {announcements && <AnnouncementList announcement={announcements} />}
      </div>
    </div>
  );
};

export default Announcement;
