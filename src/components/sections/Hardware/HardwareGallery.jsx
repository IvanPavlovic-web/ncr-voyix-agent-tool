import "./HardwareGallery.css";

const HardwareGallery = ({ items }) => {
  return (
    <div className="hardware-gallery">
      {items.map((item) => (
        <figure key={item.id} className="gallery-item">
          <img src={item.image} alt={item.caption} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default HardwareGallery;
