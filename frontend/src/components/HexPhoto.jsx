import profileImg from '../assets/images/profile.jpg';

// Portrait inside a hexagon, with a slowly rotating hexagon behind it.
export default function HexPhoto({ alt }) {
  return (
    <div className="hex-wrap">
      <div className="hex ghost" />
      <div className="hex ring">
        <div className="hex face">
          <img src={profileImg} alt={alt} width="640" height="640" />
        </div>
      </div>
    </div>
  );
}
