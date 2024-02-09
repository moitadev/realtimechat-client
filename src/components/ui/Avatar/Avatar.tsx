import NoAvatar from '@/assets/imgs/noavatar.png';

type AvatarProps = {
  src?: string;
  username?: string;
  height: number;
  width: number;
};

export const Avatar = ({ src, username, height, width }: AvatarProps) => {
  return (
    <>
      <img
        src={src ? src : NoAvatar}
        alt={username? username : 'Sem nome'}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          objectFit: `cover`,
          borderRadius: `50px`,
          border: `1px solid var(--accent)`
        }}
      />
    </>
  );
};
