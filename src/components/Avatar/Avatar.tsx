import "./Avatar.scss";

export interface AvatarProps {
  image: string;
}

export const Avatar = ({ image }: AvatarProps) => (
  <div className="Avatar">
    <div className="Avatar__Content">
      <img src={image} alt="" />
    </div>
  </div>
);
